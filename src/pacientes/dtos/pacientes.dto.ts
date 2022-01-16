import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

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

export class UpdatePacienteDto  {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly direccion: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly nombreTitular:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly telefono:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly nombreMascota: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly razaMascota:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly tipoMascota:string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    readonly edadMascota: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly comentarios:string;
}