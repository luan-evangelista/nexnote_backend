import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notes')
export class NotesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
