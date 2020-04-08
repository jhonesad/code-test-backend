import { Module } from '@nestjs/common';

import { RegisterUserService } from 'src/domain/user/service/register-user-service';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { UserRepositoryMongo } from './adapter/repository/user-repository.mongo';
import { UserEntity } from './entity/user.entity';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterUserHandler } from 'src/aplication/user/command/register-user.handler';
import { UserDao } from 'src/domain/user/port/dao/user-dao';
import { UserDaoMongo } from './adapter/dao/user-dao-mongo';
import { ListUserHandler } from 'src/aplication/user/query/list-users.handler';
import { SaveUserAvatarHandler } from 'src/aplication/user/command/save-user-avatar.handler';
import { SaveUserAvatarService } from 'src/domain/user/service/save-user-avatar-service';
import { FindUserHandler } from 'src/aplication/user/query/find-user.handler'

const userRepositoryProvider = {
  provide: UserRepository,
  useClass: UserRepositoryMongo,
};
const userDaoProvider = {
  provide: UserDao,
  useClass: UserDaoMongo,
};
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    RegisterUserService,
    userRepositoryProvider,
    userDaoProvider,
    RegisterUserHandler,
    ListUserHandler,
    SaveUserAvatarHandler,
    SaveUserAvatarService,
    FindUserHandler
  ],
  controllers: [UserController],
})
export class UserModule {}
