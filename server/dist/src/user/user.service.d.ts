import { Firebase } from 'firebase';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { UpdateUserInput } from './dto/inputs/update-user.input';
import { CreateUserOutput } from './dto/outputs/create-user-output';
import { User } from './entities/user.entity';
export declare class UserService {
    firebase: Firebase;
    createUser(createUserInput: CreateUserInput, uid: string): Promise<CreateUserOutput>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserInput: UpdateUserInput): string;
    remove(id: string): string;
}
