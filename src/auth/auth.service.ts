import { Injectable } from '@nestjs/common';

import { AuthCredentialsDto } from './dto/auth-credentials.dto';

import { UsersRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto) {
    await this.usersRepository.insert(authCredentialsDto);
  }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
