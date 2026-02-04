import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    async create(createTaskDto: any, user: User): Promise<Task> {
        const task = this.tasksRepository.create(createTaskDto as Partial<Task>); // Cast to Partial<Task> to ensure single object
        if (createTaskDto.assigneeId) {
            task.assignee = { id: createTaskDto.assigneeId } as User;
        }
        return this.tasksRepository.save(task);
    }

    async findAll(assigneeId?: number): Promise<Task[]> {
        if (assigneeId) {
            return this.tasksRepository.find({
                where: { assignee: { id: assigneeId } },
                relations: ['assignee']
            });
        }
        return this.tasksRepository.find({ relations: ['assignee'] });
    }

    async update(id: number, updateTaskDto: any): Promise<Task | null> {
        await this.tasksRepository.update(id, updateTaskDto);
        return this.tasksRepository.findOne({ where: { id }, relations: ['assignee'] });
    }
}
