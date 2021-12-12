import { Injectable } from "@nestjs/common";
import Firebase from "firebase";
import { UserService } from "src/user/user.service";
import { SignInInput } from "./dto/inputs/signin.input";
import { SignUpInput } from "./dto/inputs/signup.input";
import { SignInOutput } from "./dto/outputs/signin-output";
import { SignUpOutput } from "./dto/outputs/signup-output";
import { mapToSignInOutput, mapToSignUpOutput } from "./utils/mappers";

@Injectable()
export class AuthService {
  firebase = new Firebase();
  userService = new UserService();

  async signup(signUpInput: SignUpInput): Promise<SignUpOutput> {
    try {
      const { email, password } = signUpInput;

      //create user in firebase authentication
      const userCredentials = await this.firebase.signUpWithEmailAndPassword(
        email,
        password
      );

      //create user in firestore
      const newFirestoreUserObj = await this.userService.createUser(
        userCredentials.uid,
        email
      );

      const newUser: SignUpOutput = mapToSignUpOutput(userCredentials, newFirestoreUserObj);

      console.log("new user created successfully!: ", newUser);

      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async signin(signInInput: SignInInput): Promise<SignInOutput> {
    try {
      const { email, password } = signInInput;

      const userCredentials = await this.firebase.signInWithEmailAndPassword(
        email,
        password
      );
      const firestoreUserObj = await this.firebase.getDoc("users", userCredentials.uid);

      const retrievedUser: SignInOutput = mapToSignInOutput(
        userCredentials,
        firestoreUserObj
      );

      console.log("retrieved user: ", retrievedUser);

      return retrievedUser;
    } catch (error) {
      console.log(error);
    }
  }
}
