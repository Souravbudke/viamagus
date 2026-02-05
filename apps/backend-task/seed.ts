import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module'; // Adjust path if needed
import { UsersService } from './src/users/users.service';
import { TeamsService } from './src/teams/teams.service';
import { TasksService } from './src/tasks/tasks.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    const usersService = app.get(UsersService);
    const teamsService = app.get(TeamsService);
    const tasksService = app.get(TasksService);

    console.log('🌱 Seeding started...');

    // Create Users
    const user1 = await usersService.create({ username: 'admin', password: 'password' });
    const user2 = await usersService.create({ username: 'dev1', password: 'password' });
    const user3 = await usersService.create({ username: 'dev2', password: 'password' });

    console.log('✅ Created Users:');
    console.log(`   - admin: ${user1._id}`);
    console.log(`   - dev1: ${user2._id}`);
    console.log(`   - dev2: ${user3._id}`);

    // Create Team
    const team = await teamsService.create({ name: 'Alpha Team' });
    console.log(`✅ Created Team: ${team.name} (ID: ${team._id})`);

    // Add Members
    await teamsService.addMember(team._id.toString(), user2._id.toString());
    await teamsService.addMember(team._id.toString(), user3._id.toString());
    console.log(`✅ Added members to team`);

    // Create Task
    const task = await tasksService.create({
        description: 'Initial Seed Task',
        status: 'OPEN',
        due_date: new Date().toISOString(),
        assigneeId: user2._id.toString()
    }, user1);
    console.log(`✅ Created Task (ID: ${task._id}) assigned to dev1`);

    await app.close();
    console.log('🚀 Seeding complete!');
}

bootstrap();
