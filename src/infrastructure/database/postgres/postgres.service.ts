import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

@Injectable()
export class PostgresService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.POSTGRES_URI!,
    });

    super({ adapter });
  }
}
