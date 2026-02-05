import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Task {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    description: string;

    @Column()
    due_date: string;

    @Column()
    status: string;

    @Column()
    assigneeId: string; // Reference to User._id
}
