import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'

import '../../assets/client/base.css'
import '../../assets/client/grid.css'

const WebsiteLayout = () => {
  return (
    <div className='container'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default WebsiteLayout