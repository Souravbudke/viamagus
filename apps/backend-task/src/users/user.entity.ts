import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ select: false }) // Hide password by default
    password: string;

    @OneToMany(() => Task, (task) => task.assignee)
    tasks: Task[];
}
