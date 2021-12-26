import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { Paciente } from './pacientes.entity';

@Entity({ name: 'historiales' })
export class Historial {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({type:'varchar'})
  historialPath: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => Paciente, (paciente) => paciente.historiales, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name:'paciente_id'})
  paciente: Paciente;
}
