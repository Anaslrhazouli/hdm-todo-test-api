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
  import UseCaseFactory from '../UseCase/UseCaseFactory';
import CreateCategoryUseCase from '../UseCase/CreateCategory/CreateCategoryUseCase';
import UpdateCategoryUseCase from '../UseCase/UpdateCategory/UpdateCategoryUseCase';
import GetAllCategoriesUseCase from '../UseCase/GetAllCategories/GetAllCategoriesUseCase';
import DeleteCategoryUseCase from 'src/UseCase/DeleteCategoty/DeleteCategoryUseCase';
  
  @Controller('categories')
  export default class CategoryController {
    constructor(private readonly useCaseFactory: UseCaseFactory) {}
  
    @Get()
    async getAll() {
      return (await this.useCaseFactory.create(GetAllCategoriesUseCase)).handle();
    }
  
    @Post()
    async create(@Body('name') name: string) {
      const createCategoryUseCase = await this.useCaseFactory.create(CreateCategoryUseCase);
      return createCategoryUseCase.handle(name);
    }
  
    @Patch(':id')
    async update(@Param('id') id: string, @Body('name') name: string) {
      const updateCategoryUseCase = await this.useCaseFactory.create(UpdateCategoryUseCase);
      return updateCategoryUseCase.handle(Number(id), name);
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return (await this.useCaseFactory.create(DeleteCategoryUseCase)).handle(Number(id));
    }
  }
  