import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Applayout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default Applayout
