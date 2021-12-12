"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessList = exports.UserRole = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Admin";
    UserRole["MODERATOR"] = "Moderator";
    UserRole["USER"] = "User";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
(0, graphql_1.registerEnumType)(UserRole, {
    name: 'UserRole',
});
var AccessList;
(function (AccessList) {
    AccessList["HOME"] = "Home";
    AccessList["ABOUT"] = "About";
    AccessList["CONTACT"] = "Contact";
})(AccessList = exports.AccessList || (exports.AccessList = {}));
(0, graphql_1.registerEnumType)(AccessList, {
    name: 'AccessList',
});
//# sourceMappingURL=enums.js.map