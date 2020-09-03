// import {
//   Body,
//   Controller,
//   Delete,
//   Get, HttpException, HttpStatus,
//   NotFoundException,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { CreateDto, UpdateDto } from './dto'
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
// import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { NotFoundResponse } from './type';
import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model: {
    type: Todo,
  },
})
@ApiTags('todo')
@Controller("companies")
export class TodoController implements CrudController<Todo> {
  constructor(public service: TodoService) {}
}



// @ApiTags('todo')
// @Controller('rest/todo')
// export class TodoController {
//   constructor(private readonly todoService: TodoService) {}
//
//   @Get()
//   @ApiResponse({
//     status: 200,
//     description: 'get all todo',
//     type: [Todo]
//   })
//   @ApiResponse({
//     status: 404,
//     description: "Not Found!",
//     type: NotFoundResponse
//   })
//   getAllAction(): Promise<Todo[]> {
//     return this.todoService.findAll();
//   }
//
//   @Get(':id')
//   @ApiResponse({
//     status: 200,
//     description: 'get todo by Id',
//     type: Todo
//   })
//   @ApiResponse({
//     status: 404,
//     description: "Not Found!",
//     type: NotFoundResponse
//   })
//   async getOneAction(@Param('id') id: string): Promise<Todo> {
//     const todo = this.todoService.findOne(id);
//     if (todo === undefined) {
//       throw new HttpException(
//         'Todo with id=' + id + ' not exists',
//         HttpStatus.NOT_FOUND
//       );
//     }
//     return todo;
//   }
//
//   @Post()
//   @ApiResponse({
//     status: 200,
//     description: 'create todo',
//     type: Todo,
//   })
//   @ApiResponse({
//     status: 404,
//     description: 'Not Found',
//     type: NotFoundResponse
//   })
//   @ApiBody({ type: CreateDto })
//   createAction(@Body() createDto: CreateDto): Promise<Todo> {
//     const todo = new Todo();
//     todo.title = createDto.title;
//     if (createDto.isCompleted !== undefined) {
//       todo.isCompleted = createDto.isCompleted;
//     }
//     return this.todoService.create(todo);
//   }
//
//   @Put(':id')
//   @ApiResponse({
//     status: 201,
//     description: 'update todo by ID',
//     type: Todo})
//   @ApiResponse({
//     status: 404,
//     description: "Not Found!",
//     type: NotFoundResponse
//   })
//   @ApiBody({type: UpdateDto})
//   async updateAction(
//     @Param('id') id: string,
//     @Body() {title, isCompleted = false}: UpdateDto
//   ): Promise<Todo> {
//     const todo = await this.todoService.findOne(id);
//     if (todo === undefined) {
//       throw new NotFoundException('Todo with id=' + id + ' not exists');
//     }
//     todo.title = title;
//     todo.isCompleted = isCompleted;
//     return this.todoService.update(todo);
//   }
//
//   @Delete(':id')
//   @ApiResponse({
//     status: 201,
//     description: 'delete todo',
//     type: Todo})
//   @ApiResponse({
//     status: 404,
//     description: "Not Found!",
//     type: NotFoundResponse
//   })
//   deleteAction(@Param('id') id: string): Promise<void> {
//     return this.todoService.remove(id);
//   }
// }
