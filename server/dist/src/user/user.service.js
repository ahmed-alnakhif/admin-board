"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const firebase_1 = require("../../firebase");
const auth_service_1 = require("../auth/auth.service");
const enums_1 = require("./enums");
let UserService = class UserService {
    constructor() {
        this.firebase = new firebase_1.Firebase();
    }
    async createUser(createUserInput, uid) {
        try {
            await this.firebase.firestore
                .collection('users')
                .doc(uid)
                .set(Object.assign(Object.assign({}, createUserInput), { userRole: enums_1.UserRole.USER, accessList: [enums_1.AccessList.HOME] }));
            return {
                id: uid,
                name: createUserInput.name,
                email: createUserInput.email,
                userRole: enums_1.UserRole.USER,
                accessList: [enums_1.AccessList.HOME],
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAll() {
        try {
            const usersCollection = await this.firebase.firestore
                .collection('users')
                .get();
            const users = [];
            usersCollection.forEach((doc) => {
                const { name, email, userRole, accessList } = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    userRole,
                    accessList,
                });
                console.log(doc.id, '=>', doc.data());
            });
            return users;
        }
        catch (error) {
            common_1.Logger.error(error);
        }
    }
    async findOne(id) {
        const userDocument = await this.firebase.firestore
            .collection('users')
            .doc(id)
            .get();
        console.log(userDocument.data());
        let user;
        if (userDocument.data()) {
            const { name, email, userRole, accessList } = userDocument.data();
            user = {
                id: userDocument.id,
                name,
                email,
                userRole,
                accessList,
            };
        }
        return user;
    }
    update(id, updateUserInput) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map