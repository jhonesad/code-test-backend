import { UserDTO } from '../../model/user.dto';

export abstract class UserDao {
  abstract async list(): Promise<UserDTO[]>;
  abstract async find(name: string): Promise<UserDTO>;
}
