import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from 'src/common/abstract.models';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  readonly email: string;
}
