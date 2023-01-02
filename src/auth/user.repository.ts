import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(Users) private userEntityRepository: Repository<Users>,
  ) {}

  async insert(authCredentialsDto: AuthCredentialsDto): Promise<Users> {
    const task = this.userEntityRepository.create(authCredentialsDto);
    await this.userEntityRepository.save(task);
    return task;
  }
}
