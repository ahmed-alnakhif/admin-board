import { AccessList, UserRole } from '../enums';
export declare class User {
    id: string;
    name: string;
    email: string;
    userRole: UserRole;
    accessList: AccessList[];
}
