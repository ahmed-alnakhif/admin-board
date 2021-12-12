import { initializeApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "../config/environment";

class Firebase {
  auth: Auth;
  db: Firestore;

  constructor() {
    initializeApp(firebaseConfig);
    this.auth = getAuth();
    this.db = getFirestore();
  }

  signUpWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
    }
  };

  signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
    }
  };

  signOut = async () => {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log(error);
    }
  };

  getDoc = async (collectionName: string, id: string) => {
    try {
      const docSnap = await getDoc(doc(this.db, collectionName, id));
      return docSnap?.data();
    } catch (error) {
      console.log(error);
    }
  };

  getAllDocs = async (collectionName: string) => {
    try {
      const docSnap = await getDocs(collection(this.db, collectionName));
      return docSnap;
    } catch (error) {
      console.log(error);
    }
  };

  createDocWithId = async (collection: string, id: string, data: any) => {
    try {
      await setDoc(doc(this.db, collection, id), data);
      console.log("document written successfully with Id: ", id);
    } catch (error) {
      console.log(error);
    }
  };
}

export default Firebase;
