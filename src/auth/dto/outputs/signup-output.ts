import { ObjectType, Field, ID, PartialType } from '@nestjs/graphql';
import { AccessList, UserRole } from 'src/user/enums';

@ObjectType()
export class SignUpOutput {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly email: string;

  @Field((type) => UserRole)
  readonly userRole: UserRole;

  @Field((type) => [AccessList])
  readonly accessList: AccessList[];
}
