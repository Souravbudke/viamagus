import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) { }

    @Post('login')
    async login(@Body() req) {
        const user = await this.authService.validateUser(req.username, req.password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return this.authService.login(user);
    }

    // Endpoint to seed a user for testing
    @Post('register')
    async register(@Body() body) {
        return this.usersService.create(body);
    }
}
