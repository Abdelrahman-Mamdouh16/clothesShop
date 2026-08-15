import ReactDOM from "react-dom/client";
import ProductsRoutes, { Products, ProductDetails } from "Products/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DarkModeTheme from "./Tools/DarkModeTheme";

import App from "./App";

import About from "./pages/About/About";


import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import ShopContextProvider from "./Context/ShopContext";
import UserSignInContextProvider from "./Context/UserSignInContext";
import Cart from "./pages/Cart/Cart";

DarkModeTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "Products",
        element: <ProductsRoutes />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":ProductDetails",
            element: <ProductDetails />,
          },
        ],
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
  </div>,
);
