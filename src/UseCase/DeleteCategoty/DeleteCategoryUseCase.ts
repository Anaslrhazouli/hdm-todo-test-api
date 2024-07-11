/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import CategoryRepository from 'src/Repositories/CategoryRepository';

@Injectable()
export default class DeleteCategoryUseCase implements UseCase<Promise<boolean>, [id: number]> {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async handle(id: number) {
    try {
      await this.categoryRepository.delete(id);
      return true;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
