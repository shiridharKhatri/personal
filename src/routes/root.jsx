import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Sociallinks from '../components/Sociallinks'
import Portfolio from '../components/Portfolio'
import Expertise from '../components/Expertise'
import Services from '../components/Services'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Blogs from '../components/Blogs'

export default function Root() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Sociallinks/>
    <Portfolio/>
    <Expertise/>
    <Blogs/>
    <Services/>
    <Reviews/>
    <Contact/>
    </>
  )
}
