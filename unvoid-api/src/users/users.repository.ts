import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRespository } from 'src/database/abstract.repository';
import { User } from './models/user.models';
import { UserDocument } from './models/user.schema';

@Injectable()
export class UsersRepository extends AbstractRespository<UserDocument> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
