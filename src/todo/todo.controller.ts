import { Controller, Get, Post, Body } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService} from './todo.service';


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
}
