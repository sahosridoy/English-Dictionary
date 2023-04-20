import React from 'react'
import Header from '../components/public/header/Header'
import Footer from '../components/public/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return <>
    <Header />
    <div className="container mx-auto page">

    <Outlet/>
    </div>
    <Footer/>
  </>
}
