import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  async findAll() {
    return this.userRepo.findAll();
  }
}
