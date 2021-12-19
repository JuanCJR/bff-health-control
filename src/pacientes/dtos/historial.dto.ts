import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateHistorialDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  historialPath:string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  pacienteId: number;
}

export class UpdateHistorialDto extends PartialType(CreateHistorialDto) {}
