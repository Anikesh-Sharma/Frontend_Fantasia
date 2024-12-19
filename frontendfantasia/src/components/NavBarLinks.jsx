
import { NavLink } from "react-router-dom";

export default function NavBarLinks() {


  return (   
    <ul className="flex flex-col md:flex-row gap-4 justify-center items-center text-xl text-emerald-600 font-serif">
      <NavLink className={({isActive})=> isActive ? "text-emerald-950 font-bold" : ""} to="/"><li>Home</li></NavLink>
      <NavLink className={({isActive})=> isActive ? "text-emerald-950 font-bold" : ""} to="/charts"><li>Charts</li></NavLink>
      <NavLink className={({isActive})=> isActive ? "text-emerald-950 font-bold" : ""} to="/nutritions"><li>Nutritions</li></NavLink>
      <NavLink className={({isActive})=> isActive ? "text-emerald-950 font-bold" : ""} to="/mindfulserenity"><li>Mindful Serenity</li></NavLink>
    </ul>
  )
}
