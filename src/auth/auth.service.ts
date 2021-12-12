import { Injectable } from '@nestjs/common';
import { Firebase } from 'firebase';
import { UserService } from 'src/user/user.service';
import { SignInInput } from './dto/inputs/signin.input';
import { SignUpInput } from './dto/inputs/signup.input';
import { SigninOutput } from './dto/outputs/signin-output';
import { SignUpOutput } from './dto/outputs/signup-output';

@Injectable()
export class AuthService {
  firebase = new Firebase();
  userService = new UserService();

  async signup(signUpInput: SignUpInput): Promise<SignUpOutput> {
    try { 
      const { name, email, password } = signUpInput;
      //create user in authentication
      const userRecord = await this.firebase.auth.createUser({
        email,
        password,
        displayName: name,
      });

      //create user in firestore
      const newUser = await this.userService.createUser(
        signUpInput,
        userRecord.uid,
      );

      console.log('new user created successfully!: ', newUser);

      return newUser;
    } catch (error) {
      console.log(error);
    }
  }
}
