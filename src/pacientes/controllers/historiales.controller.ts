import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateHistorialDto, UpdateHistorialDto } from '../dtos/historial.dto';
import { HistorialesService } from '../services/historiales.service';

@ApiTags('historiales')
@Controller('historiales')
export class HistorialesController {
  constructor(private historialService: HistorialesService) {}

  @Get()
  findAll() {
    return this.historialService.find();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.historialService.findById(id);
  }

  @Post()
  create(@Body() payload: CreateHistorialDto) {
    return this.historialService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateHistorialDto,
  ) {
    return this.historialService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.historialService.delete(id);
  }
}
