import {MigrationInterface, QueryRunner} from "typeorm";

export class update1639962113689 implements MigrationInterface {
    name = 'update1639962113689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" ADD CONSTRAINT "UQ_e3bde26ff02d7070303bb234c7c" UNIQUE ("cedula")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" DROP CONSTRAINT "UQ_e3bde26ff02d7070303bb234c7c"`);
    }

}
