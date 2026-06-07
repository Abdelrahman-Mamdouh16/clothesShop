import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
export default function App() {


  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}