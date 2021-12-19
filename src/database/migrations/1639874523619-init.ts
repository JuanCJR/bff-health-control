import {MigrationInterface, QueryRunner} from "typeorm";

export class init1639874523619 implements MigrationInterface {
    name = 'init1639874523619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pacientes" ("id" SERIAL NOT NULL, "cedula" character varying NOT NULL, "nombre_titular" character varying NOT NULL, "direccion" character varying NOT NULL, "telefono" character varying NOT NULL, "nombre_mascota" character varying NOT NULL, "tipo_mascota" character varying NOT NULL, "edad_mascota" character varying NOT NULL, "comentarios" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_aa9c9f624ff22fc06c44d8b1609" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "historiales" ("id" SERIAL NOT NULL, "historialPath" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "paciente_id" integer, CONSTRAINT "PK_a73d86192e124d8f9d1d496e583" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "historiales" ADD CONSTRAINT "FK_c5826f8d68d1ea8ce27a5476842" FOREIGN KEY ("paciente_id") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "historiales" DROP CONSTRAINT "FK_c5826f8d68d1ea8ce27a5476842"`);
        await queryRunner.query(`DROP TABLE "historiales"`);
        await queryRunner.query(`DROP TABLE "pacientes"`);
    }

}
