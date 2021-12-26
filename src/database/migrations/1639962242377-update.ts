import {MigrationInterface, QueryRunner} from "typeorm";

export class update1639962242377 implements MigrationInterface {
    name = 'update1639962242377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "historiales" DROP CONSTRAINT "FK_c5826f8d68d1ea8ce27a5476842"`);
        await queryRunner.query(`ALTER TABLE "historiales" ADD CONSTRAINT "FK_c5826f8d68d1ea8ce27a5476842" FOREIGN KEY ("paciente_id") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "historiales" DROP CONSTRAINT "FK_c5826f8d68d1ea8ce27a5476842"`);
        await queryRunner.query(`ALTER TABLE "historiales" ADD CONSTRAINT "FK_c5826f8d68d1ea8ce27a5476842" FOREIGN KEY ("paciente_id") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
