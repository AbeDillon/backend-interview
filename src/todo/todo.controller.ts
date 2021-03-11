import { Controller, Get } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService} from './todo.service';


@Controller()
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  public getTodoList(): Promise<Todo[]> {
    return this.todoService.retrieveAll();
  }
}
