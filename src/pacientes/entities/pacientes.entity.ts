import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Historial } from './historiales.entity';

@Entity({ name: 'pacientes' })
export class Paciente {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'cedula', type: 'varchar' })
  cedula: string;

  @Column({ name: 'nombre_titular', type: 'varchar' })
  nombreTitular: string;

  @Column({ name: 'direccion', type: 'varchar' })
  direccion: string;

  @Column({ name: 'telefono', type: 'varchar' })
  telefono: string;

  @Column({ name: 'nombre_mascota', type: 'varchar' })
  nombreMascota: string;

  @Column({ name: 'tipo_mascota', type: 'varchar' })
  tipoMascota: string;

  @Column({ name: 'raza_mascota', type: 'varchar' })
  razaMascota: string;

  @Column({ name: 'edad_mascota', type: 'varchar' })
  edadMascota: number;

  @Column({ name: 'comentarios', type: 'varchar' })
  comentarios: string;  

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @OneToMany(() => Historial, (historiales) => historiales.paciente)
  historiales: Historial[];
}
