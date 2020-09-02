import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Todo } from '../Entities/todo.entity';
import { CreateTodo, UpdateTodo } from './todo.dto';

@Controller('rest/todo')
export class TodoController {

  @Get()
  getAllAction(): string {
    return "Todo Get All"
  }

  @Get(":id")
  getOneAction(@Param("id") id: string): string {
    return `Todo Get One by id = ${id}`
  }

  @Post()
  saveAction(@Body() todo: CreateTodo): CreateTodo {
    console.log(todo)
    return todo
  }

  @Put(':id')
  updateAction(
    @Param("id")id: string,
    @Body() todo: UpdateTodo): UpdateTodo {
    console.log(`Search by id = ${id}`)
    console.log(todo)
    return todo
  }

  @Delete(":id")
  deleteAction(@Param('id') id : string): string{
      return `Delete Action= ${id}`
  }
}
