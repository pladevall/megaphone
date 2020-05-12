import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLlBrU8t3laPAyZn3mAxlCajhsrrjFz8o",
  authDomain: "megaphone-14154.firebaseapp.com",
  databaseURL: "https://megaphone-14154.firebaseio.com",
  projectId: "megaphone-14154",
  storageBucket: "megaphone-14154.appspot.com",
  messagingSenderId: "62426205360",
  appId: "1:62426205360:web:49a7559d6824315f7e3f75",
  measurementId: "G-R4SS79MP16",
};

// SIGN IN WITH GOOGLE CONFIG
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
};

// FUNCTION TO READ/WRITE DATA TO FIRESTORE
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

// FUNCTION TO INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// CONST USED THROUGH OUT THE APP
export const auth = firebase.auth();
export const firestore = firebase.firestore();
