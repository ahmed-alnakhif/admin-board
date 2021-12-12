"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cats_service_1 = require("./cats.service");
const create_cat_dto_1 = require("./dto/create-cat.dto");
const cat_input_1 = require("./inputs/cat.input");
let CatsResolver = class CatsResolver {
    constructor(catsService) {
        this.catsService = catsService;
    }
    async hello() {
        return 'hello';
    }
    async cats() {
        return this.catsService.findAll();
    }
    async createCat(input) {
        return this.catsService.create(input);
    }
};
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsResolver.prototype, "hello", null);
__decorate([
    (0, graphql_1.Query)(() => [create_cat_dto_1.CreateCatDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsResolver.prototype, "cats", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_cat_dto_1.CreateCatDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cat_input_1.CatInput]),
    __metadata("design:returntype", Promise)
], CatsResolver.prototype, "createCat", null);
CatsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsResolver);
exports.CatsResolver = CatsResolver;
//# sourceMappingURL=cats.resolver.js.map