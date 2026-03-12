import React from 'react'
import Header from './Header/header'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
// hey remember this is not the part of code .this is just for your understanding purpose.
// Outlet — a special React Router component that renders the current matched child route
{/* <Route path="/" element={<Layout />}>        // Layout wraps everything
    <Route path="" element={<Home />} />      // Outlet renders <Home/>
    <Route path="about" element={<About />}/> // Outlet renders <About/>
    <Route path="contact" element={<Contact />}/> // Outlet renders <Contact/>
</Route> */}
// ┌─────────────────────┐
// │       Header        │  ← always shown
// ├─────────────────────┤
// │   <Outlet />        │  ← changes based on URL
// │   /      → Home     │
// │   /about → About    │
// │   /contact→ Contact │
// ├─────────────────────┤
// │       Footer        │  ← always shown
