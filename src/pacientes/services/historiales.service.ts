import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    const historial = this.historialRepo.findOne(id);
    if (!historial) {
      throw new NotFoundException(`Historial ${id} no encontrado`);
    }
    return historial;
  }

  async create(payload: CreateHistorialDto) {
    const paciente = await this.pacienteService.findById(payload.pacienteId);
    const newhistorial = this.historialRepo.create(payload);
    newhistorial.paciente = paciente;
    return await this.historialRepo.save(newhistorial);
  }

  async update(id: number, changes: UpdateHistorialDto) {
    const historial = await this.historialRepo.findOne(id);
    if (!historial) {
      throw new NotFoundException(`Historial ${id} no encontrado`);
    }
    this.historialRepo.merge(historial, changes);
    return await this.historialRepo.save(historial);
  }

  async delete(id: number) {
    const historial = this.historialRepo.findOne(id);
    if (!historial) {
      throw new NotFoundException(`Historial ${id} no encontrado`);
    }
    return await this.historialRepo.delete(id);
  }
}
