import femalemodel  from "../assets/femalemodel.png"
import malemodel  from "../assets/malemodel.png"
import proteinicon  from "../assets/proteinicon.png"
import crabsicon  from "../assets/crabsicon.png"
import fatsicon  from "../assets/fatsicon.png"
import { TypeAnimation } from 'react-type-animation'
import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col md:flex-row justify-evenly items-center bg-lime-100 rounded-md w-full p-12">
      <div className="text-center w-1/2">
      <TypeAnimation
      sequence={[
          'Welcome to FITNESS FANTASIA - Transform Your Body, Mind, and Life!',
          1000,
        ]}
        wrapper="span"
        speed={30}
        className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 from-20% via-emerald-600 via-20% to-lime-600 t0-30%"
        repeat={Infinity}
        cursor={false}
        omitDeletionAnimation={true}
        />
      </div>
      <div className="flex flex-row mr-4 pb-2">
      <img className="h-72 w-auto" src={femalemodel} alt="model" />
      <img className="h-72 w-auto" src={malemodel} alt="" />
      </div>
      <div className="flex flex-col gap-2 w-1/4 text-rose-700 ml-12 pl-2 text-2xl text-center font-bold">
        <h2>Start Your Fitness Journey Today - Sign Up Now!</h2>
        <button type="button" className="text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-900 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
    </div>
    </div>
    <div className="flex flex-col bg-lime-100 px-32 py-5 rounded-lg mt-10 text-2xl font-bold text-lime-800 shadow-lg">
       <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-relaxed">
        <span className="text-emerald-700">AT FITNESS FANTASIA</span>, WE PROVIDE YOU WITH
        <span className="text-orange-500"> PERSONALIZED FITNESS PLANS</span>, 
        <span className="text-green-700"> NUTRITION ADVICE</span>, AND A SUPPORTIVE COMMUNITY TO HELP YOU ACHIEVE YOUR HEALTH GOALS.
      </h2>
      <p className="text-lg md:text-xl text-center mt-5">
        Whether you’re looking to <span className="font-semibold text-red-500">lose weight</span>, 
        <span className="font-semibold text-blue-500"> build muscle</span>, or simply 
        <span className="font-semibold text-purple-600"> feel better</span>, we have the tools and guidance you need to succeed.
      </p>
    </div>
    <div className="bg-gradient-to-br from-lime-200 to-emerald-100 px-10 py-8 rounded-lg shadow-lg mt-10 border border-lime-400">
      <h3 className="text-2xl md:text-3xl font-extrabold text-lime-800 text-center mb-6">
        Why Choose <span className="text-green-700">Fitness Fantasia?</span>
      </h3>
      <ul className="list-disc list-inside space-y-4 text-lg md:text-xl text-lime-900 font-medium">
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-3xl">🔥</span>
          <span><strong>Personalized Fitness Plans:</strong> Tailored workouts based on your goals.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-500 text-3xl">🍎</span>
          <span><strong>Nutrition Guidance:</strong> Access meal plans and nutrition tips.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-500 text-3xl">📊</span>
          <span><strong>Track Your Progress:</strong> Monitor your fitness journey with detailed insights.</span>
        </li>
      </ul>
  </div>
    <div className="bg-lime-100 p-6 rounded-lg mt-10">
    <h2 className="text-3xl font-bold text-center text-lime-700">Fuel Your Body with the Right Nutrients</h2>
    <p className="text-lg text-center text-gray-700 mt-4">Nutrition plays a critical role in your fitness journey. A well-balanced diet fuels your body, aids recovery, and supports overall wellness. Whether you are building muscle or improving endurance, the right nutrients make all the difference.</p>
  
    <div className="flex flex-col md:flex-row justify-evenly mt-8">
        <div className="text-center">
        <img src={proteinicon} alt="Protein" className="mx-auto mb-2 h-48" />
        <h3 className="font-semibold text-xl">Protein</h3>
        <p className="text-gray-600">Essential for muscle growth and repair. Add lean meats, fish, and plant-based proteins to your diet.</p>
        </div>

        <div className="text-center">
        <img src={crabsicon} alt="Carbohydrates" className="mx-auto mb-2 h-48" />
        <h3 className="font-semibold text-xl">Carbohydrates</h3>
        <p className="text-gray-600">Your body is primary source of energy. Include whole grains, fruits, and vegetables for sustained energy.</p>
        </div>

        <div className="text-center">
        <img src={fatsicon} alt="Healthy Fats" className="mx-auto mb-2 h-48" />
        <h3 className="font-semibold text-xl">Healthy Fats</h3>
        <p className="text-gray-600">Supports brain health and hormone function. Sources include avocados, nuts, and olive oil.</p>
        </div>
    </div>
  
    <div className="text-center mt-6">
        <p className="text-lg text-lime-700">Want to learn more about creating a nutrition plan tailored to your fitness goals? <NavLink to="/register" className="text-rose-600 font-bold">Join us today!</NavLink></p>
    </div>
    </div>
    

    </div>
  )
}
