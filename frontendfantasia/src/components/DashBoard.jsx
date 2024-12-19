import { Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
import HomePage from "./HomePage";
import Excersice from "./Excersice";
import Nutritions from "./Nutritions";
import MindfulSerenity from "./MindfulSerenity";
import Headertop from "./Headertop";

export function DashBoard() {
  return (
    <div className="h-screen">
    <Headertop />
    <div className="flex justify-start pl-20 pr-20 pt-10 ">

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise" element={<Excersice />} />
        <Route path="/nutritions" element={<Nutritions />} />
        <Route path="/mindfulserenity" element={<MindfulSerenity />} />
    </Routes>
    </div>
    </div>
  )
}
