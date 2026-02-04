import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    due_date: string; // ISO Date string

    @Column()
    status: string; // OPEN, IN_PROGRESS, DONE

    @ManyToOne(() => User, (user) => user.tasks)
    assignee: User;
}
