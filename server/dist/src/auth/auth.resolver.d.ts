import { AuthService } from './auth.service';
import { SignUpInput } from './dto/inputs/signup.input';
import { SignUpOutput } from './dto/outputs/signup-output';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(signUpInput: SignUpInput): Promise<SignUpOutput>;
}
