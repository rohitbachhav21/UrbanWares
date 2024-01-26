import React from 'react'

import useSmoothScroll from '../useSmoothScroll'
import heroright from "../../images/heroright.jpeg"
import heroleft from "../../images/heroleft.jpeg"
import Vid from "../../images/Vid.mp4"

const Hero = () => {

  const scrolltoList = useSmoothScroll('listSection')

  return (
    <div>
      <div className='bg-neutral-300'  >
        <div className=' flex flex-col-reverse md:flex md:flex-row'>
          <div className='p-4 m-4 ml-10'><img className="hidden md:block" src={heroright} alt='hero' width={400} height={400} /></div>
          <div className=''><img className='justify-center items-center block md:hidden ' src={heroleft} alt="hero" width={400} height={400} /></div>
          <div className='p-4 md:m-auto'>
            <h1 className='text-6xl font-bold'>Best Shoes in <span className='text-gray-800'>Pune</span></h1>
            <h3 className='text-2xl p-2'>"Step Up Your Style with Urban Wares"</h3>
            <p>We offers fashionable and trendy footwear that can elevate style.</p>
            <div className='m-4  text-sm'><button onClick={scrolltoList} className='p-2 bg-black text-white rounded-lg flex justify-end items-center'>Explore Now</button></div>

          </div>
        </div>
      </div>
      <div className='Vid p-3 bg-neutral-300'>
        <h2 className='font-sans font-semibold text-2xl text-center mb-3'>Stride of the Future-The Modern Sneaker Revolution</h2>
        <div className='md:pl-48 md:pr-48 md:pb-10 md:pt-10'>
          <video autoPlay muted loop controls className='w-full h-full object-cover'>
            <source src={Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Hero
