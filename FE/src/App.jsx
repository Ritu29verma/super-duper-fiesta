import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
