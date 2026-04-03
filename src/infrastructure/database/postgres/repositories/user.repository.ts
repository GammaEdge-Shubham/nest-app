import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/users/user.repository';
import { PostgresService } from '../postgres.service';

@Injectable()
export class PostgresUserRepository implements UserRepository {
  constructor(private readonly prismaPostgres: PostgresService) {}
  findAll(): Promise<any[]> {
    return this.prismaPostgres.user.findMany({});
  }
  create(data: any): Promise<any> {
    return this.prismaPostgres.user.create({
      data: {
        id: 1,
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }
}
