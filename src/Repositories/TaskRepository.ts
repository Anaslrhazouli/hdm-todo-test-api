/* eslint-disable prettier/prettier */
// src/Repositories/TaskRepository.ts
// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export default class TaskRepository {
  async findByCategory(categoryId: number): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: { categoryId },
      include: { category: true },
    });
  }
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async delete(id: number): Promise<Task> {
    console.log(`TaskRepository: Deleting task with id ${id}`);
    return this.prisma.task.delete({
      where: { id },
    });
  }

  async create(data: Prisma.TaskCreateInput | Prisma.TaskUncheckedCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  async update(id: number, data: Prisma.TaskUpdateInput | Prisma.TaskUncheckedUpdateInput): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }
  async toggleComplete(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
    return this.prisma.task.update({
      where: { id },
      data: { completed: !task.completed },
    });
  }


}
