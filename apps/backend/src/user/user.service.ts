import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { hash, compare } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
    ) { }

    async createUser(name: string, email: string, password: string): Promise<User> {
        const existingUser = await this.userModel.findOne({ email }).exec();
        if (existingUser) {
            throw new HttpException('Existing User try signing in', HttpStatus.UNAUTHORIZED);
        }
        const user = new this.userModel({ name, email, password: await hash(password, parseInt(process.env.HASH_ROUNDS)) });
        return await user.save();
    }

    async signIn(email: string, password: string): Promise<User> {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new HttpException('Invalid email', HttpStatus.UNAUTHORIZED);
        }
        if (!(await compare(password, user.password))) {
            throw new HttpException('Wrong password', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}
