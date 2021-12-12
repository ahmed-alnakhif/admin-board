import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/inputs/signin.input';
import { SignUpInput } from './dto/inputs/signup.input';
import { SignInOutput } from './dto/outputs/signin-output';
import { SignUpOutput } from './dto/outputs/signup-output';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignUpOutput, { name: 'signUp' })
  signup(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signup(signUpInput);
  }

  @Mutation(() => SignInOutput, { name: 'signIn' })
  signin(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.signin(signInInput);
  }
}
