import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignUpInput {
  @Field()
  readonly name: string;
  
  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}
