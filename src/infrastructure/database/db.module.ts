import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgresModule } from './postgres/postgres.module';
import { MongoModule } from './mongo/mongo.module';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    const imports: any = [ConfigModule];

    const dbType = process.env.DB_TYPE!;
    if (!dbType) throw new Error('DB type is not set in env!');
    switch (dbType.toLowerCase()) {
      case 'postgres':
        imports.push(PostgresModule);
        break;
      case 'mongo':
        imports.push(MongoModule);
        break;
      default:
        throw new Error(`Invalid DB type in environment variable: ${dbType}`);
    }

    return {
      module: DatabaseModule,
      imports,
      exports: imports,
      global: true,
    };
  }
}
