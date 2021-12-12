import { Model } from 'mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<CatDocument>);
    create(createCatType: CreateCatDto): Promise<CatDocument>;
    findAll(): Promise<Cat[]>;
}
