import { ObjectType, Field, ID, PartialType } from '@nestjs/graphql';

@ObjectType()
export class SigninOutput {
  @Field()
  readonly token: string;

}
