import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'
import LoginModal from '../component/LoginModal'
import RegisterModal from '../component/RegisterModal'

function MainLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    <LoginModal />
    <RegisterModal />
    </>
  )
}

export default MainLayout