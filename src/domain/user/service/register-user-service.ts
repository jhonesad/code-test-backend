import { UserRepository } from '../port/repository/user-repository';
import { User } from '../model/user';
import { Injectable } from '@nestjs/common';
import { BusinessError } from 'src/domain/exceptions/business-error';
import { UserDao } from '../port/dao/user-dao';

@Injectable()
export class RegisterUserService {
  private _userRepository: UserRepository;
  private _userDao: UserDao;

  constructor(userRepository: UserRepository, userDao: UserDao) {
    this._userRepository = userRepository;
    this._userDao = userDao;
  }

  async execute(user: User) {
    const userDto = await this._userDao.find(user.name);

    if(userDto !== null && userDto !== undefined && userDto.id.toString() !== user.id) {
      throw new BusinessError(
        `The user with the name ${user.name} already exists`,
      );
    }
    
    await this._userRepository.save(user);
  }
}
