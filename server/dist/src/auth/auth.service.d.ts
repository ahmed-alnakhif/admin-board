import { Firebase } from 'firebase';
import { UserService } from 'src/user/user.service';
import { SignUpInput } from './dto/inputs/signup.input';
import { SignUpOutput } from './dto/outputs/signup-output';
export declare class AuthService {
    firebase: Firebase;
    userService: UserService;
    signup(signUpInput: SignUpInput): Promise<SignUpOutput>;
}
