import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Cart from "./cart/Cart";
import Payment from "./payment/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignUp from "./front/SignUp";
import Login from "./front/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { redirect } from "react-router";
import { Toaster } from "react-hot-toast";
function App() {
  const { auth } = useContext(AuthContext);
  // if (!auth.user) return redirect("/login");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/payment" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
