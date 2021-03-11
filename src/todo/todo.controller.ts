import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService} from './todo.service';
import { UpdateResult } from 'typeorm';

@Controller()
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  public retrieveAll(): Promise<Todo[]> {
    return this.todoService.retrieveAll();
  }
  @Post('create')
  async create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }
  @Put(':id/update')
  async update(@Param('id') id, @Body() todo: Todo): Promise<UpdateResult> {
    return this.todoService.update(todo);
  }
}
