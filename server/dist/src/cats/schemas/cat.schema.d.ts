import { Document } from 'mongoose';
export declare class Cat {
    name: string;
    age: number;
    breed: string;
}
export declare type CatDocument = Cat & Document;
export declare const CatSchema: any;
