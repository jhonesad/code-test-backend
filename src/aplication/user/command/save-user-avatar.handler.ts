import { Injectable } from '@nestjs/common';
import { SaveUserAvatarCommand } from './save-user-avatar.command';
import { SaveUserAvatarService } from 'src/domain/user/service/save-user-avatar-service';

@Injectable()
export class SaveUserAvatarHandler {
  constructor(private _saveUserAvatarService: SaveUserAvatarService) {}

  async execute(saveUserAvatarCommand: SaveUserAvatarCommand) {
    await this._saveUserAvatarService.execute(saveUserAvatarCommand.avatar,saveUserAvatarCommand.name);
  }
}