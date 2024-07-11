/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import CategoryRepository from '../../Repositories/CategoryRepository';
import { Category } from '@prisma/client';

@Injectable()
export default class UpdateCategoryUseCase implements UseCase<Promise<Category>, [id: number, name: string]> {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async handle(id: number, name: string): Promise<Category> {
    return this.categoryRepository.update(id, { name });
  }
}
