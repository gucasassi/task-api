import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('tasks')
export class TasksController {
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return `This action adds a new task`;
  }

  @Get()
  findAll() {
    return `This action returns all tasks`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} task`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action delete a #${id} task`;
  }
}
