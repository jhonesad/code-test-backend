import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { User } from 'src/domain/user/model/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entity/user.entity';
import { Repository } from 'typeorm';

export class UserRepositoryMongo implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async nameExists(name: string): Promise<boolean> {
    return (await this.repository.count({ name: name })) > 0;
  }

  async save(user: User) {
    let entity: UserEntity = null;
    if(user.id !== null) {
      entity = await this.repository.findOne(user.id);
      entity.name = user.name;
      entity.description = user.description;
    } else {
      entity = new UserEntity();
      entity.name = user.name;
      entity.description = user.description;
      entity.createDate = user.createDate;
    }

    await this.repository.save(entity);
  }

  async saveAvatar(avatar: Buffer, name: string) {
    this.repository.update({name: name}, {avatar: avatar})
  }
}
