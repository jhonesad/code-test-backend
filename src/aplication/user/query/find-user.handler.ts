import { Injectable } from '@nestjs/common';
import { UserDao } from 'src/domain/user/port/dao/user-dao';
import { UserDTO } from 'src/domain/user/model/user.dto';

@Injectable()
export class FindUserHandler {
    constructor(private _userDao: UserDao) {}

    async execute(name: string): Promise<UserDTO> {
      return await this._userDao.find(name);
    }
}