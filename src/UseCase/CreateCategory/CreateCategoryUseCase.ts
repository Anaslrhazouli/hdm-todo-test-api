/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import CategoryRepository from '../../Repositories/CategoryRepository';
import { Category } from '@prisma/client';

@Injectable()
export default class CreateCategoryUseCase implements UseCase<Promise<Category>, [name: string]> {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async handle(name: string): Promise<Category> {
    return this.categoryRepository.create({ name });
  }
}
