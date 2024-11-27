import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="favourites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
