import { UserRepository } from '../port/repository/user-repository';
import { User } from '../model/user';
import { Injectable } from '@nestjs/common';
import { BusinessError } from 'src/domain/exceptions/business-error';

@Injectable()
export class RegisterUserService {
  private _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async execute(user: User) {
    if (user.id === null && await this._userRepository.nameExists(user.name)) {
      throw new BusinessError(
        `The user with the name ${user.name} already exists`,
      );
    }
    await this._userRepository.save(user);
  }
}
