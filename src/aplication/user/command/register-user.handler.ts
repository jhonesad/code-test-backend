import { Injectable } from '@nestjs/common';
import { RegisterUserService } from 'src/domain/user/service/register-user-service';
import { RegisterUserCommand } from './register-user.command';
import { User } from 'src/domain/user/model/user';

@Injectable()
export class RegisterUserHandler {
  constructor(private _registerUserService: RegisterUserService) {}

  async execute(registerUserCommand: RegisterUserCommand) {
    await this._registerUserService.execute(
      new User(
        registerUserCommand.id,
        registerUserCommand.name,
        registerUserCommand.description,
        registerUserCommand.createDate,
      ),
    );
  }
}
