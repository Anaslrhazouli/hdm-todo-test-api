/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import CreateCategoryUseCase from './CreateCategory/CreateCategoryUseCase';
import UpdateCategoryUseCase from './UpdateCategory/UpdateCategoryUseCase';
import GetAllCategoriesUseCase from './GetAllCategories/GetAllCategoriesUseCase';
import GetTasksByCategoryUseCase from './GetTasksByCategory/GetTasksByCategoryUseCase';
import DeleteCategoryUseCase from './DeleteCategoty/DeleteCategoryUseCase';


type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase | CreateCategoryUseCase | UpdateCategoryUseCase
 | GetAllCategoriesUseCase| GetTasksByCategoryUseCase| DeleteCategoryUseCase ;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
