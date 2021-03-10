import { Controller, Get } from '@nestjs/common';


@Controller()
export class ExampleController {
  
  @Get()
  public getToDoList() {
    return "This is a get!"
  }
}
