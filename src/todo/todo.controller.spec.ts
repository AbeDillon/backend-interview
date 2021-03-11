import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';

describe('TodoController Test', () => {
  let exampleController: TodoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
    }).compile();
  
    exampleController = app.get<TodoController>(TodoController);
  });

  describe('root', () => {
    it('should return "<u>My Todo List</u>"', () => {
      expect(exampleController.getTodoList()).toBe("<u>My Todo List</u>");
    });
  });
});
