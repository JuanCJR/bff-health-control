import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PacientesService } from '../services/pacientes.service';
import { CreatePacienteDto, UpdatePacienteDto } from '../dtos/pacientes.dto';

@ApiTags('pacientes')
@Controller('pacientes')
export class PacientesController {
  constructor(private pacientesServices: PacientesService) {}
  @Get()
  findAll(@Query('cedula') cedula: string) {
    return this.pacientesServices.find(cedula);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pacientesServices.findById(id);
  }

  @Post()
  create(@Body() payload: CreatePacienteDto) {
    return this.pacientesServices.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePacienteDto,
  ) {
    return this.pacientesServices.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.pacientesServices.delete(id);
  }
}
