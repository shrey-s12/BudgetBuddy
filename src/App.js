import React from 'react'
import Form from './components/Form'
import View from './components/View'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  )
}

export default App