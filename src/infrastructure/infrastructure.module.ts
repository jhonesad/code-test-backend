import { Module, Logger } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [Logger],
  imports: [TypeOrmModule.forRoot(), UserModule],
})
export class InfrastructureModule {}
