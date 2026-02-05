import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Team {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string;

    @Column()
    memberIds: string[]; // Store ObjectIds as strings for simplicity in JSON
}
