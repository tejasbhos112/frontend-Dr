import React from 'react'
import TopHeader from './TopHeader'
import clock from '../assets/images/clock.png'
import phoneCall from "../assets/images/phoneCall.png"
import telegram from "../assets/images/telegram.png"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"

const Header = () => {
  return (
    <>
    <div>
        <div className='flex justify-between bg-white p-4'>
       
               <div className='flex'>
               <p className='inline-flex '>
                   <img className="h-5 w-5 my-1 ml-2" src={clock}/>
                   <span className='px-1'>Mon-Fri 9am-5pm</span>
                </p>
       
       
               <p className='inline-flex '>
                    <img className="h-5 w-5 my-1 ml-2" src={phoneCall}/>
                    <span className='px-1'>  Call Us: +821-456-241
                   </span>
                   </p>
       
                <p className='inline-flex '>
                   <img className="h-5 w-5 my-1 ml-2" src={telegram}/>
                   <span className=' px-1'>Email: hello@info.com</span>
                </p>
       
               </div>
       
               <div >
                  <ul className='flex gap-2'>
                   <li>
                        <img className="h-5 w-5 my-1 ml-2" src={instagram}/>
                   </li>
                   <li>
                        <img className="h-5 w-5 my-1 ml-2" src={facebook}/>
                   </li>
                   <li>
                        <img className="h-5 w-5 my-1 ml-2" src={twitter}/>
                   </li>
                  </ul>
               </div>
           </div>
    </div>
    <div className=''>
        <div className="navbar shadow-sm sticky bg-[#010f26]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Department</a>
          <ul className="p-2">
            <li><a>dep 1</a></li>
            <li><a>dep 2</a></li>
          </ul>
        </li>
       <li><a>About</a></li>
       <li><a>Contact</a></li>
      </ul>
    </div>
    <a className='font-bold text-xl text-white'>daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-bold text-xl text-white'><a>Home</a></li>
      <li>
        <details>
          <summary className='font-bold text-xl text-white'>Department</summary>
          <ul className="p-2">
            <li><a>dep1</a></li>
            <li><a>dep2</a></li>
          </ul>
        </details>
      </li>
      <li className='font-bold text-xl text-white'><a>About</a></li>
       <li className='font-bold text-xl text-white'><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-6 p-4 bg-teal-500 text-white border-none">Create Account</a>
  </div>
</div>
    </div>
    </>
  )
}

export default Header