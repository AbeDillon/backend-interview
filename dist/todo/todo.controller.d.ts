import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    retrieveAll(): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    update(id: any, todo: Todo): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
