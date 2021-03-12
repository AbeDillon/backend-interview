import { Entity, Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: () => Date.now()})
  created: number;

  @Column({default: () => Date.now()})
  updated: number;

  @Column()
  note: string

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = Date.now();
  }
}