import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Component/Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Component/Login'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
