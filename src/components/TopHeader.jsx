import React from 'react'
import clock from '../assets/images/clock.png'
import phoneCall from "../assets/images/phoneCall.png"
import telegram from "../assets/images/telegram.png"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"


const TopHeader = () => {
  return (
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
  )
}

export default TopHeader