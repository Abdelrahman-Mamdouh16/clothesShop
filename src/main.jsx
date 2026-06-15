import "./index.css";
import DarkModeTheme from "./Tools/DarkModeTheme";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Collection from "./pages/Collection/Collection";
import ShopContextProvider from "./Context/shopContext";


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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">

    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>

  </div>
);