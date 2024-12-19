import femalemodel from "../assets/femalemodel.png";
import malemodel from "../assets/malemodel.png";
import proteinicon from "../assets/proteinicon.png";
import crabsicon from "../assets/crabsicon.png";
import fatsicon from "../assets/fatsicon.png";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import MotivationalQuotesSlider from "./QuotesSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-50 p-12 rounded-lg shadow-lg mx-6 mt-8">
        <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0">
          <TypeAnimation
            sequence={["Welcome to FITNESS FANTASIA - Transform Your Body, Mind, and Life!", 1000]}
            wrapper="span"
            speed={30}
            className="font-extrabold text-4xl md:text-5xl text-blue-600"
            repeat={Infinity}
            cursor={false}
            omitDeletionAnimation={true}
          />
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Join us to achieve your fitness goals with personalized plans and a supportive community!
          </p>
          <NavLink to="/register">
            <button className="mt-6 px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium shadow-md">
              Get Started
            </button>
          </NavLink>
        </div>
        <div className="flex gap-4">
          <img className="h-64 md:h-72 w-auto" src={femalemodel} alt="Female Model" />
          <img className="h-64 md:h-72 w-auto" src={malemodel} alt="Male Model" />
        </div>
      </div>
      <div className="bg-gray-100 p-10 mt-10 rounded-lg shadow-md mx-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Why Choose <span className="text-blue-500">Fitness Fantasia?</span>
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg md:text-xl text-gray-700">
          <li><strong>Personalized Fitness Plans:</strong> Tailored workouts based on your goals.</li>
          <li><strong>Nutrition Guidance:</strong> Access meal plans and tips for balanced eating.</li>
          <li><strong>Progress Tracking:</strong> Monitor your journey with detailed insights.</li>
          <li><strong>Supportive Community:</strong> Join a like-minded group of fitness enthusiasts.</li>
        </ul>
      </div>
      <MotivationalQuotesSlider />
      <div className="bg-blue-50 p-10 mt-10 rounded-lg mx-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">Fuel Your Body with the Right Nutrients</h2>
        <p className="text-lg text-center text-gray-600 mt-4">
          Proper nutrition is essential for achieving your fitness goals. Discover the role of macronutrients in your journey!
        </p>
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-8 gap-6">
          <div className="text-center">
            <img src={proteinicon} alt="Protein" className="h-48 mx-auto" />
            <h3 className="font-semibold text-xl mt-2 text-blue-700">Protein</h3>
            <p className="text-gray-600 mt-1">Supports muscle growth and repair.</p>
          </div>
          <div className="text-center">
            <img src={crabsicon} alt="Carbohydrates" className="h-48 mx-auto" />
            <h3 className="font-semibold text-xl mt-2 text-blue-700">Carbohydrates</h3>
            <p className="text-gray-600 mt-1">The primary source of energy for your body.</p>
          </div>
          <div className="text-center">
            <img src={fatsicon} alt="Healthy Fats" className="h-48 mx-auto" />
            <h3 className="font-semibold text-xl mt-2 text-blue-700">Healthy Fats</h3>
            <p className="text-gray-600 mt-1">Support brain health and hormones.</p>
          </div>
        </div>
      </div>
      <footer className="bg-blue-800 text-white p-6 mt-12">
        <div className="text-center">
          <h3 className="text-xl font-bold">Fitness Fantasia</h3>
          <p className="mt-2">Your partner in health and fitness. Let’s achieve greatness together!</p>
          <NavLink to="/contact" className="text-blue-300 underline mt-2 block">
            Contact Us
          </NavLink>
        </div>
      </footer>
    </div>
  );
}
