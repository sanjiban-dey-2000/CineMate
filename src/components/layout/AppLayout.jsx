import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import LoadingPage from './LoadingPage'

const AppLayout = () => {
  const navigation=useNavigation();
  console.log(navigation);
  if(navigation.state==="loading"){
    return <LoadingPage/>
  }
  return (
    <>
        <Header/>
        <div className="pt-16"> {/* Padding top to offset fixed header height */}
        <Outlet />
      </div>
        <Footer/>
    </>
  )
}

export default AppLayout