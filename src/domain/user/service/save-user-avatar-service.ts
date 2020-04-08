import { UserRepository } from '../port/repository/user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaveUserAvatarService {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

  async execute(avatar: Buffer, name: string) {
    await this._userRepository.saveAvatar(avatar, name);
  }
}
