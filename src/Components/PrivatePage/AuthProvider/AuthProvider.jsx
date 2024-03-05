/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { app } from "../../../../firebase.config";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
export const UserContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //
      if (currentUser && currentUser.email) {
        axios
          .post("http://localhost:9000/jwt", { email: currentUser.email })
          .then((data) => {
            localStorage.setItem("accessToken", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("accessToken");
      }
      //
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    updateUserProfile,
    logOut,
  };
  return (
    <UserContext.Provider value={authInfo}>
      {/*  */}
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
