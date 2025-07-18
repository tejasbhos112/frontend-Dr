import React from 'react'
import cancer from "../assets/images/cancer.png"
import heartbeat from "../assets/images/heartbeat.png"
import kidney from "../assets/images/kidney.png";
import liver from "../assets/images/liver.png"
import neurology from "../assets/images/neurology.png"
import orthopedic from "../assets/images/orthopedic.png"


const Services = () => {
  return (
    <div className='bg-white'>

         <section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="text-lg text-teal-500 font-bold ">Our Services</h1>
      <h1 className='text-5xl font-bold text-black'>Our Healthcare Service</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo alias, commodi magni impedit expedita ullam sit unde et magnam officia quibusdam praesentium nam mollitia corporis rerum id dolores itaque.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-300  mb-4">
            <img src={cancer}  className='p-1'/>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Cancer Service</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-300 text-indigo-500 mb-4">
           <img src={liver}  className='p-1.5'/>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Liver Transport</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-300 text-indigo-500 mb-4">
            <img src={kidney}  className='p-1'/>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Kidney Transport</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-300 text-indigo-500 mb-4">
           <img src={heartbeat}  className='p-1'/>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Cardiac Arrhythmia</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-300 text-indigo-500 mb-4">
            <img src={neurology}  className='p-1'/>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neurology Care</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-300 text-indigo-500 mb-4">
            <img src={orthopedic}  className='p-1'/>
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Orthopedic Care</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>
   
  </div>
</section>
    </div>
  )
}

export default Services