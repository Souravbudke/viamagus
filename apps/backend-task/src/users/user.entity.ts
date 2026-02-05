import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column({ unique: true })
    username: string;

    @Column({ select: false })
    password: string;

    // We can store teamId if we want bidirectional
    @Column()
    teamId: string; // Store as string for easier handling or ObjectId
}
