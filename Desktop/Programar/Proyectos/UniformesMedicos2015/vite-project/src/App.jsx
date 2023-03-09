import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Navbar } from "./components/navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
