import {MigrationInterface, QueryRunner} from "typeorm";

export class update1639962543024 implements MigrationInterface {
    name = 'update1639962543024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "paciente_dir_path" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "paciente_dir_path"`);
    }

}
