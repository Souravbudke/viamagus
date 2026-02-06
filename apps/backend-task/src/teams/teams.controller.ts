import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateTeamDto } from './dto/create-team.dto';
import { AddMemberDto } from './dto/add-member.dto';

@Controller('teams')
@UseGuards(AuthGuard('jwt'))
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Post()
    create(@Body() createTeamDto: CreateTeamDto) {
        return this.teamsService.create(createTeamDto);
    }

    @Post(':id/members')
    addMember(@Param('id') id: string, @Body() addMemberDto: AddMemberDto) {
        return this.teamsService.addMember(id, addMemberDto.userId);
    }

    @Get()
    findAll() {
        return this.teamsService.findAll();
    }
}
