import { useState } from "react";
import { app } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { useNavigate } from "react-router";
import { settings } from "firebase/analytics";
import toast from "react-hot-toast";
const firebaseAuth = getAuth(app);

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
  });
  const navigation = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(firebaseAuth);
      setAuth({
        user: null,
      });
      navigation("/login");
      toast("Signed out successfully!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "top-center",
      });
      // toast.success("Signed out successfully");
      console.log("Signed out sucessfully");
    } catch (error) {
      console.log("Error signing out", error);
    }
  };
  const loginUser = async ({ email, password }) => {
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
      toast("Signed in successfully!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "top-center",
      });
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
    <AuthContext.Provider value={{ auth, loginUser, createUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
