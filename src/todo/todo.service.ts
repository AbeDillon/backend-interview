import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepo: Repository<Todo>
  ) {}
  async create(todo: Todo): Promise<Todo> {
    return await this.todoRepo.save(todo);
  }
  async retrieveAll(): Promise<Todo[]> {
    return await this.todoRepo.find();
  }
  async update(todo: Todo): Promise<UpdateResult> {
    return await this.todoRepo.update(todo.id, todo);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepo.delete(id);
  }
}
