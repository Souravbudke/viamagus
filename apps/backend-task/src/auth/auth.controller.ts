import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return this.authService.login(user);
    }

    // Endpoint to seed a user for testing
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}
