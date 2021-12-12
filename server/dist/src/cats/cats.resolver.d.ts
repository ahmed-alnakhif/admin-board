import { CatsService } from './cats.service';
import { CatInput } from './inputs/cat.input';
export declare class CatsResolver {
    private readonly catsService;
    constructor(catsService: CatsService);
    hello(): Promise<string>;
    cats(): Promise<import("./schemas/cat.schema").Cat[]>;
    createCat(input: CatInput): Promise<any>;
}
