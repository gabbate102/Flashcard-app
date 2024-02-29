import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Layout } from "./components/layout.jsx"
import { Login } from "./components/login.jsx"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
