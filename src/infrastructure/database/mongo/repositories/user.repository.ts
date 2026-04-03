import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserRepository } from 'src/modules/users/user.repository';
import { UserDocument } from '../schemas/user.schema';

@Injectable()
export class MongoUserRepository implements UserRepository {
  constructor(
    @InjectModel(UserDocument.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(data: any) {
    return await this.userModel.create(data);
  }

  async findAll() {
    return await this.userModel.find().lean();
  }
}
