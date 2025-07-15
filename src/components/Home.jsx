import React from 'react'
import Header from './Header'
import homeImg from "../assets/images/homeImg.jpg"
import TopHeader from './TopHeader'

const Home = () => {
  return (
    <div>
      
        <Header/>
        <img className='w-full h-auto object-cover overflow-hidden'
        src={homeImg} alt='img' />
    </div>
  )
}

export default Home