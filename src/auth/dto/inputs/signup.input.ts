import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignUpInput {
  
  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}
