import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('signup')
    async signup(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ): Promise<{ user: object }> {
        try {
            await this.userService.createUser(name, email, password);
            return { user: { name, email } };
        }
        catch (error) {
            throw new HttpException('Existing User', HttpStatus.UNAUTHORIZED);
        }
    }

    @Post('signin')
    async signin(
        @Body('email') email: string,
        @Body('password') password: string,
    ): Promise<{ user: object }> {
        try {
            await this.userService.signIn(email, password);
            return { user: { email } };
        }
        catch (error) {
            throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
        }
    }
}
