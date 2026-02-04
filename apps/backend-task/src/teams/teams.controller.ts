import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('teams')
@UseGuards(AuthGuard('jwt'))
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Post()
    create(@Body() createTeamDto: any) {
        return this.teamsService.create(createTeamDto);
    }

    @Post(':id/members')
    addMember(@Param('id') id: string, @Body() body: { userId: number }) {
        return this.teamsService.addMember(+id, body.userId);
    }

    @Get()
    findAll() {
        return this.teamsService.findAll();
    }
}
