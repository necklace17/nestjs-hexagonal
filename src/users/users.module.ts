import { Module } from '@nestjs/common';
import { UsersController } from './adapters/web/users.controller';
import { UserRepository } from './adapters/persistance/user.repository';
import { UsersService } from './users/users.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'IUserPort',
      useClass: UserRepository,
    },
    {
      provide: 'ICrudUser',
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
