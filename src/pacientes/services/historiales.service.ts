import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

import { CreateHistorialDto, UpdateHistorialDto } from '../dtos/historial.dto';
import { Historial } from '../entities/historiales.entity';
import { PacientesService } from './pacientes.service';

@Injectable()
export class HistorialesService {
  constructor(
    @InjectRepository(Historial) private historialRepo: Repository<Historial>,
    private pacienteService: PacientesService,
  ) {}

  async find() {
    return await this.historialRepo.find();
  }

  async findById(id: number) {
    const historial = await this.historialRepo.findOne(id);
    if (!historial) {
      throw new NotFoundException(`Historial ${id} no encontrado`);
    }

    const data = fs.readFileSync(historial.historialPath, 'utf-8');

    return {...historial,data};
  }

  async create(payload: CreateHistorialDto) {
    const paciente = await this.pacienteService.findById(payload.pacienteId);
    const newhistorial = this.historialRepo.create();

    const date = new Date();
    const informeNameDate = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}${date.getHours()}${date.getMinutes()}`;

    const informeName = `${paciente.id}-${informeNameDate}.txt`;
    newhistorial.historialPath = path.join(
      paciente.pacienteDirPath,
      informeName,
    );
    fs.writeFileSync(newhistorial.historialPath, payload.informe);

    newhistorial.paciente = paciente;

    return await this.historialRepo.save(newhistorial);
  }

  async update(id: number, changes: UpdateHistorialDto) {
    const historial = await this.historialRepo.findOne(id);
    if (!historial) {
      throw new NotFoundException(`Historial ${id} no encontrado`);
    }

    if (changes.informe) {
      fs.unlinkSync(historial.historialPath);
      fs.writeFileSync(historial.historialPath, changes.informe);
    }

    return await this.historialRepo.save(historial);
  }

  async delete(id: number) {
    const historial = await this.historialRepo.findOne(id);
    if (!historial) {
      throw new NotFoundException(`Historial ${id} no encontrado`);
    }
    fs.unlinkSync(historial.historialPath);

    return await this.historialRepo.delete(id);
  }
}
