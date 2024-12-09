import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import app from "../firebase/FIrebaseAuth";
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [forgetEmail, setForgetEmail] = useState(null)
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    return signInWithPopup(auth, provider)
  }

  const passReset = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const update = (userProfile) => {
   return updateProfile(auth.currentUser, userProfile)
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (displayName, photoURL) => {
  
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };


  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    setUser,
    createUser,
    loginUser,
    logOut,
    profileUpdate,
    logInWithGoogle,
    passReset,
    update,
    loading,
    setForgetEmail,
    forgetEmail
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
