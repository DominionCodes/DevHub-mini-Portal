import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Users from './pages/Users.jsx'
import UserDetails from './pages/UserDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App