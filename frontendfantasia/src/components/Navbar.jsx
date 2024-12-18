import { useState } from "react"
import logo from "../assets/logo.png"
import { TiThMenu } from "react-icons/ti";
import NavBarLinks from "./NavBarLinks";

export default function Navbar() {

    let [collapse,setCollapse] = useState(false)

    function toggleCollapse(){
        setCollapse(!collapse)
    } 

  return (
    <div className="sticky top-0 bg-lime-200 w-full shadow-lg shadow-amber-800 flex justify-evenly items-center flex-wrap rounded-b-xl">
        <div className="pl-4">
            <img src={logo} alt="logo" className="h-20" /> 
        </div>
        <div className="hidden md:flex">
        <NavBarLinks />
        </div>
        <button className="md:hidden text-3xl text-emerald-600" onClick={toggleCollapse}>
        <TiThMenu />
        </button>
        {collapse && (
        <div className="flex flex-col items-center md:hidden basis-full">
          <NavBarLinks />
        </div>
        )}
    </div>
  )
}
