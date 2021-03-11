import { Controller, Get } from '@nestjs/common';


@Controller()
export class TodoController {
  
  @Get()
  public getTodoList() {
    return "<u>My Todo List</u>";
  }
}
