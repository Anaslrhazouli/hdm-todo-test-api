/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
import { Task } from '@prisma/client';

@Injectable()
export default class GetTasksByCategoryUseCase implements UseCase<Promise<Task[]>, [categoryId: number]> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(categoryId: number): Promise<Task[]> {
    return this.taskRepository.findByCategory(categoryId);
  }
}
