// var admin = require("firebase-admin");
import * as admin from 'firebase-admin';
import { Firestore, getFirestore } from 'firebase-admin/firestore';
import { Auth, getAuth } from 'firebase-admin/auth';
const serviceAccount = require('../serviceAccountKey.json');

export class Firebase {
  firestore: Firestore;
  auth: Auth;

  constructor() {
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }

    this.auth = getAuth();
    this.firestore = getFirestore();
  }
}
