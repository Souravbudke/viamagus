import { Controller, Get, Post, Body, Patch, Param, UseGuards, Query, Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    create(@Body() createTaskDto: any, @Request() req) {
        return this.tasksService.create(createTaskDto, req.user);
    }

    @Get()
    findAll(@Query('assignee') assignee: string) {
        return this.tasksService.findAll(assignee ? +assignee : undefined);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: any) {
        return this.tasksService.update(+id, updateTaskDto);
    }
}
