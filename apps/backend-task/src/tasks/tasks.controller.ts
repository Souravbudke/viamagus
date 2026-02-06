import { Controller, Get, Post, Body, Patch, Param, UseGuards, Query, Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto, @Request() req) {
        return this.tasksService.create(createTaskDto, req.user);
    }

    @Get()
    findAll(@Query('assignee') assignee: string) {
        return this.tasksService.findAll(assignee);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }
}
