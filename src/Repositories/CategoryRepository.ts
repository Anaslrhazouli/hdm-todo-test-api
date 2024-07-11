/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma, Category } from '@prisma/client';

@Injectable()
export default class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({ data });
  }

  async update(
    id: number,
    data: Prisma.CategoryUpdateInput,
  ): Promise<Category> {
    return this.prisma.category.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Category> {
    return this.prisma.category.delete({ where: { id } });
  }
}
