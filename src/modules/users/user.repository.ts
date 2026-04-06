export abstract class UserRepository {
  abstract findAll(): Promise<any[]>;
  abstract create(data: any): Promise<any>;
  abstract findUserByEmail(email: string): Promise<any>;
}
