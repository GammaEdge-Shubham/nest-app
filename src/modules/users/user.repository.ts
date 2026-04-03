export abstract class UserRepository {
  abstract findAll(): Promise<any[]>;
  abstract create(data: any): Promise<any>;
}
