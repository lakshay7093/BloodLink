import { adminAuth } from "./firebase/admin";

export async function verifyFirebaseToken(token: string) {
  return adminAuth.verifyIdToken(token);
}