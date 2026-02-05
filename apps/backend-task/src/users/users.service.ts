import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findOne(username: string): Promise<User | null> {
        return this.usersRepository.findOne({
            where: { username },
            select: ['_id', 'username', 'password'] // Explicitly select password for auth
        });
    }

    async create(user: Partial<User>): Promise<User> {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

    async findById(id: string): Promise<User | null> {
        // TypeORM Mongo driver can sometimes handle string IDs if they are valid ObjectIds
        const { ObjectId } = require('mongodb');
        return this.usersRepository.findOne({ where: { _id: new ObjectId(id) } });
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
}
