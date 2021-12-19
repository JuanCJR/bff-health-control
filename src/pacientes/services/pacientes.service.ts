import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePacienteDto, UpdatePacienteDto } from '../dtos/pacientes.dto';
import { Paciente } from '../entities/pacientes.entity';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente) private pacienteRepo: Repository<Paciente>,
  ) {}

  async find() {
    return await this.pacienteRepo.find();
  }

  async findById(id: number) {
    const paciente = await this.pacienteRepo.findOne(id,{relations:['historiales']});
    if (!paciente) {
      throw new NotFoundException(`Paciente ${id} no encontrado`);
    }
    return paciente;
  }

  async create(payload: CreatePacienteDto) {
    const newPaciente = this.pacienteRepo.create(payload);
    return await this.pacienteRepo.save(newPaciente);
  }

  async update(id: number, changes: UpdatePacienteDto) {
    const paciente = await this.pacienteRepo.findOne(id);
    if (!paciente) {
      throw new NotFoundException(`Paciente ${id} no encontrado`);
    }
    this.pacienteRepo.merge(paciente, changes);
    return await this.pacienteRepo.save(paciente);
  }

  async delete(id: number) {
    const paciente = this.pacienteRepo.findOne(id);
    if (!paciente) {
      throw new NotFoundException(`Paciente ${id} no encontrado`);
    }
    return await this.pacienteRepo.delete(id);
  }
}
