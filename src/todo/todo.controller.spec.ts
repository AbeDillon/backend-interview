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
    it('should return a list of todos', () => {
      expect(exampleController.getTodoList()).toBe([]);
    });
  });
});
