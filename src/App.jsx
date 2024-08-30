import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <main className=' flex flex-col min-h-screen bg-secondary font-montserrat text-gray-300'>
      <Navbar />
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App