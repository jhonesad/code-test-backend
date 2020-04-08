import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterUserCommand } from 'src/aplication/user/command/register-user.command';
import { RegisterUserHandler } from 'src/aplication/user/command/register-user.handler';
import { SaveUserAvatarHandler } from 'src/aplication/user/command/save-user-avatar.handler';
import { ListUserHandler } from 'src/aplication/user/query/list-users.handler';
import { UserDTO } from 'src/domain/user/model/user.dto';
import { FindUserHandler } from 'src/aplication/user/query/find-user.handler';

@Controller('users')
export class UserController {
  constructor(
    private readonly _registerUserHandler: RegisterUserHandler,
    private readonly _listUserHandler: ListUserHandler,
    private readonly _saveUserAvatarHandler: SaveUserAvatarHandler,
    private readonly _findUserHandler: FindUserHandler
  ) {}

  @Post()
  async create(@Body() registerUserCommand: RegisterUserCommand) : Promise<UserDTO>{
    await this._registerUserHandler.execute(registerUserCommand);
    return await this._findUserHandler.execute(registerUserCommand.name);
  }

  @Get()
  async list(): Promise<UserDTO[]> {
    return await this._listUserHandler.execute();
  }

  @Get(':name')
  async find(@Param('name') name): Promise<UserDTO> {
    return await this._findUserHandler.execute(name);
  }

  @Post('upload/:name')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@Param('name') name, @UploadedFile() file) {
    this._saveUserAvatarHandler.execute({avatar:file.buffer, name:name});
  }
}
