import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createDir } from 'src/common/createDir';
import { Repository } from 'typeorm';
import * as rimraf from 'rimraf';
import * as fs from 'fs';

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
    const paciente = await this.pacienteRepo.findOne(id, {
      relations: ['historiales'],
    });
    if (!paciente) {
      throw new NotFoundException(`Paciente ${id} no encontrado`);
    }
    return paciente;
  }

  async create(payload: CreatePacienteDto) {
    const newPaciente = this.pacienteRepo.create(payload);

    const dirName = newPaciente.cedula;

    //Crea directorio del paciente
    const pacienteDirPath = createDir(dirName);

    newPaciente.pacienteDirPath = pacienteDirPath;

    return await this.pacienteRepo.save(newPaciente);
  }

  async update(id: number, changes: UpdatePacienteDto) {
    const paciente = await this.pacienteRepo.findOne(id);
    if (!paciente) {
      throw new NotFoundException(`Paciente ${id} no encontrado`);
    }
    this.pacienteRepo.merge(paciente, changes);

    // //Si se actualiza la cedula, se actualiza el nombre del directorio del paciente
    // if (changes.cedula) {
    //   const dirArray = paciente.pacienteDirPath.split('/');
    //   const dirArrayLength = dirArray.length-1;
    //   dirArray[dirArrayLength] = changes.cedula;

    //   const newDir = dirArray.toString().replace(/,/g, '/');
    //   console.log(newDir)
    //   fs.renameSync(paciente.pacienteDirPath, newDir);
    //   paciente.pacienteDirPath = newDir;
    // }
    return await this.pacienteRepo.save(paciente);
  }

  async delete(id: number) {
    const paciente = await this.pacienteRepo.findOne(id);
    if (!paciente) {
      throw new NotFoundException(`Paciente ${id} no encontrado`);
    }

    //Elimina directorio del paciente
    rimraf.sync(paciente.pacienteDirPath);

    return await this.pacienteRepo.delete(id);
  }
}
