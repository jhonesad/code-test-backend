import { User } from '../../model/user';

export abstract class UserRepository {
  abstract async nameExists(name: string): Promise<boolean>;
  abstract async save(user: User);
  abstract async saveAvatar(avatar: Buffer, name: String);
}
