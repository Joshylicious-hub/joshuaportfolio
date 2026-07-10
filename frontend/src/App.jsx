import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
