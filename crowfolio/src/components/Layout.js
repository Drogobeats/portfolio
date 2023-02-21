import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SidebarWithHeader from './Sidebar' 

export default function Layout({ children }) {
  return (
    <>
        <SidebarWithHeader />
            <main>{children}</main>
        <Footer />
    </>
  )
}
