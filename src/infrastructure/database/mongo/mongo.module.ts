import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MongoUserRepository } from './repositories/user.repository';
import { UserDocument, UserSchema } from './schemas/user.schema';
import { UserRepository } from 'src/modules/users/user.repository';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI!),
    MongooseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: MongoUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class MongoModule {}
