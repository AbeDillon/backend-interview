import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';

describe('ExampleController Test', () => {
  let exampleController: ExampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
    }).compile();
  
    exampleController = app.get<ExampleController>(ExampleController);
  });

  describe('root', () => {
    it('should return "<u>My ToDo List</u>"', () => {
      expect(exampleController.getToDoList()).toBe("<u>My ToDo List</u>");
    });
  });
});
