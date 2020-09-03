import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@EntityRepository(Todo)
export class CustomTodoRepository extends Repository<Todo> {}
