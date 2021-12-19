import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString, } from "class-validator";

export class CreatePacienteDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly cedula: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly direccion: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly nombreTitular:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly telefono:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly nombreMascota: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly razaMascota:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly tipoMascota:string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly edadMascota: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly comentarios:string;
}

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {}