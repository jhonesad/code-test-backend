import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { UserDao } from 'src/domain/user/port/dao/user-dao';
import { UserDTO } from 'src/domain/user/model/user.dto';
import { UserEntity } from '../../entity/user.entity';

export class UserDaoMongo implements UserDao {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}  

  async list(): Promise<UserDTO[]> {
    return await this.entityManager.find(UserEntity,{});
  }

  async find(name: string): Promise<UserDTO> {
    return await this.entityManager.findOne(UserEntity,{name: name});
  }
}
