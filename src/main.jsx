import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import CartContextProvider from "./context/Context.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import Toaster from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Toaster /> */}
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
