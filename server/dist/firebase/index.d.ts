import { Firestore } from 'firebase-admin/firestore';
import { Auth } from 'firebase-admin/auth';
export declare class Firebase {
    firestore: Firestore;
    auth: Auth;
    constructor();
}
