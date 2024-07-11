/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import TaskController from './Controllers/TaskController';
import { PrismaService } from './PrismaService';
import TaskRepository from './Repositories/TaskRepository';
import UseCaseFactory from './UseCase/UseCaseFactory';
import CategoryController from './Controllers/CategoryController';
import CategoryRepository from './Repositories/CategoryRepository';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TaskController, CategoryController],
  providers: [PrismaService, TaskRepository, CategoryRepository, UseCaseFactory],
})
export class AppModule {}
