import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Carousel } from "./components/carousel";
import { Navbar } from "./components/navbar"
import "../src/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container p-3" >
      
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
