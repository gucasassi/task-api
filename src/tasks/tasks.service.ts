import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    return `This action adds a new task`;
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: string, updateTestDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  delete(id: string) {
    return `This action removes a #${id} task`;
  }
}
