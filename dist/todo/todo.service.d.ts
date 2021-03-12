import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Todo } from './todo.entity';
export declare class TodoService {
    private todoRepo;
    constructor(todoRepo: Repository<Todo>);
    create(todo: Todo): Promise<Todo>;
    retrieveAll(): Promise<Todo[]>;
    update(todo: Todo): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
