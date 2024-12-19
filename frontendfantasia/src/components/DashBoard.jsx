import { Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
import HomePage from "./HomePage";
import Nutritions from "./Nutritions";
import MindfulSerenity from "./MindfulSerenity";
import Navbar from "./Navbar";
import Charts from "./Excersice";

export function DashBoard() {
  return (
    <div className="h-screen">
    <Navbar />
    <div className="flex justify-start pl-20 pr-20 pt-10 ">

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/nutritions" element={<Nutritions />} />
        <Route path="/mindfulserenity" element={<MindfulSerenity />} />
    </Routes>
    </div>
    </div>
  )
}
