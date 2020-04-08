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
    const entities = await this.entityManager.find(UserEntity,{});
    let listReturn = Array<UserDTO>();
    entities.forEach(ent => {
      let entDto = new UserDTO();
      entDto.id = ent.id.toString();
      entDto.name = ent.name;
      entDto.description = ent.description;
      entDto.createDate = ent.createDate;
      listReturn.push(entDto);
    });
    return Promise.resolve(listReturn);
  }

  async find(name: string): Promise<UserDTO> {
    const userEnt = await this.entityManager.findOne(UserEntity,{name: name});
    let ent: UserDTO = null;
    if(userEnt !== null && userEnt !== undefined) {
      ent = new UserDTO();
      ent.id = userEnt.id.toString();
      ent.name = userEnt.name;
      ent.description = userEnt.description;
      ent.createDate = userEnt.createDate;
      ent.avatar = userEnt.avatar;
    }
    
    return Promise.resolve(ent);
  }
}
