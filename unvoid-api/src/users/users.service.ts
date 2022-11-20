import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { getUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { User } from './models/user.models';
import { UserDocument } from './models/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(createUserData: CreateUserInput): Promise<User> {
    await this._validateCreateUserData(createUserData);
    const userDocument = await this.usersRepository.create({
      ...createUserData,
      password: await bcrypt.hash(createUserData.password, 10),
    });

    return this._toModel(userDocument);
  }

  private async _validateCreateUserData(createUserData: CreateUserInput) {
    try {
      await this.usersRepository.findOne({ email: createUserData.email });
      throw new UnprocessableEntityException('Email already exists.');
    } catch (error) {}
  }

  async getUser(getUserArgs: getUserArgs): Promise<User> {
    const userDocument = await this.usersRepository.findOne(getUserArgs);
    return this._toModel(userDocument);
  }

  private _toModel(userDocument: UserDocument): User {
    return {
      _id: userDocument._id.toHexString(),
      email: userDocument.email,
    };
  }
}
