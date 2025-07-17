import React from 'react'
import Header from './Header'
import homeImg from "../assets/images/homeImg.jpg"
import healthcare from "../assets/images/healthcare.png"
import customerSupport from "../assets/images/customerSupport.png"
import telemedicine from "../assets/images/telemedicine.png"

const Home = () => {
  return (
    <>
        <div className='relative'>
            <Header/>
        <img className='w-full h-auto object-cover overflow-visible'
        src={homeImg} alt='img' />
        <div className='relative bottom-[180px]'>
        <div className='absolute bottom-[300px] left-12 w-2/5 shadow-lg'> 
            <p className='text-xl font-bold text-teal-500'> Smarter Service Care</p>
            <h1 className='text-7xl mb-14 text-white font-bold'>We are Committed to your Best Health
            </h1>
            <p className='text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse hic tempore accusamus expedita. Earum 
                eos repudiandae id rec.</p>
         
        </div>
         <div className='bg-teal-100 w-3/4 h-1/4 flex p-4 py-2 '>
        <div className='p-5'>
            <img src={healthcare} className='h-12 w-12' />
           <h2 className='font-bold text-lg'> Special Service</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='p-5'>
            <img src={customerSupport} className='h-12 w-12' />
            <h2 className='font-bold text-lg'> 24/7 Advanced Care</h2>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='p-5 '>
            <img src={telemedicine} className='h-12 w-12 ' />
            <h2 className='font-bold text-lg'> Video Consultation</h2>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        </div>
         </div>
        </div>
    </div>
     
   </>
  )
}

export default Home