import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TeamsService {
    constructor(
        @InjectRepository(Team)
        private teamsRepository: Repository<Team>,
    ) { }

    async create(createTeamDto: any): Promise<Team> {
        const team = this.teamsRepository.create(createTeamDto as Partial<Team>);
        return this.teamsRepository.save(team);
    }

    async addMember(teamId: string, userId: string): Promise<Team | null> {
        const { ObjectId } = require('mongodb');
        const team = await this.teamsRepository.findOne({ where: { _id: new ObjectId(teamId) } });

        if (team) {
            if (!team.memberIds) {
                team.memberIds = [];
            }
            // Avoid duplicates
            if (!team.memberIds.includes(userId)) {
                team.memberIds.push(userId);
                return this.teamsRepository.save(team);
            }
            return team;
        }
        return null;
    }

    async findAll(): Promise<Team[]> {
        return this.teamsRepository.find({ relations: ['members'] });
    }
}
