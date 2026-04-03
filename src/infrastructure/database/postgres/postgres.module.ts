import { Module } from '@nestjs/common';
import { UserRepository } from 'src/modules/users/user.repository';
import { PostgresUserRepository } from './repositories/user.repository';
import { PostgresService } from './postgres.service';

@Module({
  providers: [
    PostgresService,
    { provide: UserRepository, useClass: PostgresUserRepository },
  ],
  exports: [UserRepository],
})
export class PostgresModule {}
