import { useState } from "react";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import NavBarLinks from "./NavBarLinks";

export default function Navbar() {
  let [collapse, setCollapse] = useState(false);

  function toggleCollapse() {
    setCollapse(!collapse);
  }

  return (
    <div className="sticky top-0 bg-gradient-to-r from-emerald-200 via-lime-100 to-emerald-200 w-full shadow-md flex justify-between items-center flex-wrap p-4 rounded-b-lg z-50">
      <div className="pl-4">
        <img src={logo} alt="logo" className="h-16 md:h-20" />
      </div>
      <div className="hidden md:flex">
        <NavBarLinks />
      </div>
      <button
        className="md:hidden text-3xl text-lime-800 focus:outline-none hover:text-emerald-600"
        onClick={toggleCollapse}
      >
        <TiThMenu />
      </button>
      {collapse && (
        <div className="flex flex-col items-center w-full mt-4 bg-lime-100 py-4 rounded-lg shadow-inner md:hidden">
          <NavBarLinks />
        </div>
      )}
    </div>
  );
}
