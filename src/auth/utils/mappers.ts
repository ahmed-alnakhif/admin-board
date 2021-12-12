import { SignInOutput } from "../dto/outputs/signin-output";
import { SignUpOutput } from "../dto/outputs/signup-output";

export const mapToSignUpOutput = (
  authCredentials: any,
  firestoreObj: any
): SignUpOutput => {
  return {
    ...firestoreObj,
    accessToken: authCredentials.accessToken,
  };
};

export const mapToSignInOutput = (
  authCredentials: any,
  firestoreObj: any
): SignInOutput => {
  return {
    id: authCredentials?.uid,
    email: authCredentials?.email,
    accessToken: authCredentials?.accessToken,
    userRole: firestoreObj?.userRole,
    accessList: firestoreObj?.accessList,
  };
};
