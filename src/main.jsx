import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DarkModeTheme from "./Tools/DarkModeTheme";

import App from "./App";

import ShopContextProvider from "./Context/ShopContext";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Collection from "./pages/Collection/Collection";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

import UserSignInContextProvider from "./Context/UserSignInContext";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";


DarkModeTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <App />
    ,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "Signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "collection/:ProductDetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="min-h-[100vh] bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
    <UserSignInContextProvider>
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </UserSignInContextProvider>

  </div>
);