import { useState } from "react";
import { app } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
const firebaseAuth = getAuth(app);

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
  });

  const loginUser = async ({ email, password }) => {
    console.log(email, password);
    try {
      const res = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = res.user;
      setAuth(() => ({
        user: user,
      }));
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const createUser = async ({ email, password }) => {
    try {
      const res = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = res.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <AuthContext.Provider value={{ auth, loginUser, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
