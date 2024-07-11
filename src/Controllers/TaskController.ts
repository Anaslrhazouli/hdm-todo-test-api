/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import DeleteTask from '../UseCase/DeleteTask/DeleteTask';
import GetAllTasksUseCase from '../UseCase/GetAllTasks/GetAllTasksUseCase';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import UseCaseFactory from '../UseCase/UseCaseFactory';
import SaveTaskUseCase from '../UseCase/SaveTask/SaveTaskUseCase';
import TaskRepository from '../Repositories/TaskRepository';
import GetTasksByCategoryUseCase from 'src/UseCase/GetTasksByCategory/GetTasksByCategoryUseCase';

@Controller()
export default class TaskController {
  constructor(private readonly useCaseFactory: UseCaseFactory, private readonly taskRepository: TaskRepository) {}

  @Get('/tasks')
  async getAll() {
    return (await this.useCaseFactory.create(GetAllTasksUseCase)).handle();
  }

  @Get('/tasks/category/:categoryId')
  async getByCategory(@Param('categoryId') categoryId: string) {
    const getTasksByCategoryUseCase = await this.useCaseFactory.create(GetTasksByCategoryUseCase);
    return getTasksByCategoryUseCase.handle(Number(categoryId));
  }

  @Post('/tasks')
  async create(@Body() dto: SaveTaskDto) {
    console.log('Received task data:', dto); // Add this line for debugging
    const saveTaskUseCase = await this.useCaseFactory.create(SaveTaskUseCase);
    return saveTaskUseCase.handle(dto);
  }

  @Patch('/tasks/:id')
  async update(@Param('id') id: string, @Body() dto: SaveTaskDto) {
    const saveTaskUseCase = await this.useCaseFactory.create(SaveTaskUseCase);
    dto.id = Number(id);
    return saveTaskUseCase.handle(dto);
  }

  @Patch('/tasks/:id/toggle')
  async toggleComplete(@Param('id') id: string) {
    console.log(`Received request to toggle complete status for task with id: ${id}`);
    return this.taskRepository.toggleComplete(Number(id));
  }


  @Delete('/tasks/:id')
  async delete(@Param('id') id: string) {
    console.log(`Received request to delete task with id: ${id}`);
    const result = await (await this.useCaseFactory.create(DeleteTask)).handle(Number(id));
    console.log(`Deletion result: ${result}`);
    return result;
  }
}
