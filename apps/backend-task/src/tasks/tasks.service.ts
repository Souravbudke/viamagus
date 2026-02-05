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
        const task = this.tasksRepository.create(createTaskDto as Partial<Task>);
        // Automatically assign to the creator or specified assignee?
        // Requirement: "Ability to assign a task to a team member" usually implies logic.
        // For creation, let's assume if assigneeId is passed, use it, else assign to creator (optional).
        if (createTaskDto.assigneeId) {
            task.assigneeId = createTaskDto.assigneeId;
        } else if (user && user._id) {
            task.assigneeId = user._id.toString();
        }
        return this.tasksRepository.save(task);
    }

    async findAll(assigneeId?: string): Promise<Task[]> {
        if (assigneeId) {
            return this.tasksRepository.find({
                where: { assigneeId: assigneeId }
            });
        }
        return this.tasksRepository.find();
    }

    async update(id: string, updateTaskDto: any): Promise<Task | null> {
        const { ObjectId } = require('mongodb');
        await this.tasksRepository.update({ _id: new ObjectId(id) }, updateTaskDto);
        return this.tasksRepository.findOne({ where: { _id: new ObjectId(id) } });
    }
}
