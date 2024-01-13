import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 63 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 127 })
  passwd: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  birthAt: Date;

  @Column({ default: 1 })
  role: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
