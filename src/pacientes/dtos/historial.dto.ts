import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateHistorialDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  informe:string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  pacienteId: number;
}

export class UpdateHistorialDto extends PartialType(CreateHistorialDto) {}
