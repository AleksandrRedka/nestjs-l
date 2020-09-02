import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//GetOneById
//GetAll
//Post(Create or Update)
//Delete (Delete)


@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isCompleted: boolean;
}
