import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
