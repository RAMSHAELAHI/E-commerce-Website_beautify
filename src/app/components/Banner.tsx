import React from 'react'

export default function Banner  ()  {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black-to-grey-700 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-20'>
        <img src="images/make-up.jpg"
         alt="Flawless Make-up Products" 
         className=' w-full h-fullobject-cover'/>

      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-items-center'>
      <h1 className='text-amber-500 sm:text-4xl font-serif mb-4'>  Beautify With Rumi</h1>
        <h2 className='text-white sm:text-6xl font-bold mb-4'>  Discover our Products</h2>
      <p className=' text-white text-lg text-center mb-6 max-w-xl'>
        Shop Now For Exclusive Products Discount !
        <button
        type='button'
        className='bg-neutral-500 text-white text-sm font-semibold py-3 px-6 rounded-full 
        shadow-large hover:bg-yellow-800 transition duration-300'>
          Exciting Deals Will Be Launched On This Weekend
          
        </button>

      </p>
      </div>
    </div>
  )
}


