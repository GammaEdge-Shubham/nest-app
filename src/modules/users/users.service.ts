import {
  Injectable,
  Inject,
  HttpException,
  HttpCode,
  HttpStatus,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  async findAll() {
    return this.userRepo.findAll();
  }

  async create(data: any) {
    const isUserExist = await this.userRepo.findUserByEmail(data.email);
    if (isUserExist && Array.isArray(isUserExist) && isUserExist.length)
      throw new BadRequestException('User already exist!');
    return await this.userRepo.create(data);
    // add email service to verify account
  }

  async login(data: any) {
    const user = await this.userRepo.findUserByEmail(data.email);

    if (!user) {
      throw new BadRequestException(
        'User does not exist! Please register first',
      );
    }

    // add encryption technique
    if (user.password !== data.password) {
      throw new ForbiddenException('Incorrect user or password!');
    }

    return 'logged in';
  }
}
