import {MigrationInterface, QueryRunner} from "typeorm";

export class addTipoMascotaField1639874714334 implements MigrationInterface {
    name = 'addTipoMascotaField1639874714334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "raza_mascota" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "raza_mascota"`);
    }

}
