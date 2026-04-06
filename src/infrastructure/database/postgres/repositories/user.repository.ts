import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/users/user.repository';
import { PostgresService } from '../postgres.service';

@Injectable()
export class PostgresUserRepository implements UserRepository {
  constructor(private readonly prismaPostgres: PostgresService) {}

  async findAll(): Promise<any[]> {
    return await this.prismaPostgres.user.findMany({});
  }

  async create(data: any): Promise<any> {
    return await this.prismaPostgres.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      },
    });
  }

  async findUserByEmail(email: string): Promise<any> {
    return await this.prismaPostgres.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
