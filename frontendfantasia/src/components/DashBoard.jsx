import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Excersice from "./Excersice";
import Nutritions from "./Nutritions";
import MindfulSerenity from "./MindfulSerenity";

export function DashBoard() {
  return (
    <div className="h-screen">
    <Navbar />
    <div className="flex justify-start pl-20 pr-20 pt-10 ">

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Excersice />} />
        <Route path="/nutritions" element={<Nutritions />} />
        <Route path="/mindfulserenity" element={<MindfulSerenity />} />
    </Routes>
    </div>
    <div className="">
      <h1>Hello</h1>
    </div>
    </div>
  )
}
