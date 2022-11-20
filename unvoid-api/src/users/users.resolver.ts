import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { getUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { User } from './models/user.models';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly _userService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this._userService.createUser(createUserData);
  }

  @Query(() => User, { name: 'user' })
  async getUser(@Args() getUserArgs: getUserArgs) {
    return this._userService.getUser(getUserArgs);
  }
}
