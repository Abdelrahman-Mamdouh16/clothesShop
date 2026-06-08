import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";



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