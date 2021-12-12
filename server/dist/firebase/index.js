"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Firebase = void 0;
const admin = require("firebase-admin");
const firestore_1 = require("firebase-admin/firestore");
const auth_1 = require("firebase-admin/auth");
const serviceAccount = require('../serviceAccountKey.json');
class Firebase {
    constructor() {
        if (admin.apps.length === 0) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        }
        this.auth = (0, auth_1.getAuth)();
        this.firestore = (0, firestore_1.getFirestore)();
    }
}
exports.Firebase = Firebase;
//# sourceMappingURL=index.js.map