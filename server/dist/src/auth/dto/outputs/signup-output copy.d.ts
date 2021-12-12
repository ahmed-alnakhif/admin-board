import { AccessList, UserRole } from 'src/user/enums';
export declare class SignUpOutput {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly userRole: UserRole;
    readonly accessList: AccessList[];
}
