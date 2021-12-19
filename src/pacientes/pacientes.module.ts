import { Module } from '@nestjs/common';
import { PacientesController } from './controllers/pacientes.controller';
import { HistorialesController } from './controllers/historiales.controller';
import { HistorialesService } from './services/historiales.service';
import { PacientesService } from './services/pacientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/pacientes.entity';
import { Historial } from './entities/historiales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente, Historial])],
  controllers: [PacientesController, HistorialesController],
  providers: [HistorialesService, PacientesService],
})

export class PacientesModule {}
