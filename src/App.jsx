import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Cart from "./cart/Cart";
import Payment from "./payment/Payment";
import { Routes, Route } from "react-router";
import SignUp from "./front/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="favourites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/cart/payment" element={<Payment />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
