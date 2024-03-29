import React from 'react'
import NavBar from '../componnent/NavBar'
import Herosection from '../componnent/Herosection'
import BlogMenu from '../componnent/BlogMenu'
import Footer from '../componnent/Footer'

const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <Herosection/>
        <BlogMenu/>
        <Footer/>
    </div>
  )
}

export default HomePage
