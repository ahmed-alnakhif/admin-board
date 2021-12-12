import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/inputs/update-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): string;
    removeUser(id: string): string;
}
