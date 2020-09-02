import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './Entities/todo.entity';
import { TodoController } from './Controllers/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [],
})
export class TodoModule {}
