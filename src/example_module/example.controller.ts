import { Controller, Get } from '@nestjs/common';


@Controller()
export class ExampleController {
  
  @Get()
  public getToDoList() {
    return "<u>My ToDo List</u>";
  }
}
