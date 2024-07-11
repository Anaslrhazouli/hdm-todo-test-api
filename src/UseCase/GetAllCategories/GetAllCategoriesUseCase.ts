import { Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import CategoryRepository from '../../Repositories/CategoryRepository';
import { Category } from '@prisma/client';

@Injectable()
export default class GetAllCategoriesUseCase implements UseCase<Promise<Category[]>, []> {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async handle(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }
}
