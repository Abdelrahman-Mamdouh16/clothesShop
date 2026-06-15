import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";



export default function App() {


  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="container mx-auto flex-1">
        <Outlet />
      </div>
      <Footer />

    </div>
  );
}