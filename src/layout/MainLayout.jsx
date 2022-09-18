import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'
import LoginModal from '../component/LoginModal'

function MainLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    <LoginModal />
    </>
  )
}

export default MainLayout