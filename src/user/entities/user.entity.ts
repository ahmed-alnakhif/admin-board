import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AccessList, UserRole } from '../enums';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => UserRole)
  userRole: UserRole;

  @Field((type) => [AccessList])
  accessList: AccessList[];
}
