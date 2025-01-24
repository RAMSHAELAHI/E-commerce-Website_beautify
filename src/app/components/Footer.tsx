import React from 'react'


export default  function Footer(){
  return (
    <div>
      <footer className=' flex flex-col space-y-10 justify-center m-10 mb-0'>

        <nav className=' flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-500'>
          <a className='hover:text-emerald-500 text-amber-500 '  href='#'> Home </a>
          <a className='hover:text-emerald-500 text-amber-500 '  href='#'> About </a>
          <a className='hover:text-emerald-500 text-amber-500 '  href='#'> Delivery </a>
          <a className='hover:text-emerald-500 text-amber-500 '  href='#'> Contact </a>
        
        </nav>

        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out hover:scale-105'>
          
          <a href='http://facebook.com' target='blank' rel='nofollow nooperner'> 
          <img 
          src='https://img.icons8.com/?size=100&id=118497&format=png&color=000000'
          alt='facebook logo'
          />

          </a>

          <a href='https://live.twitter.com' target='blank' rel='nofollow nooperner'> 
          <img 
          src='https://img.icons8.com/?size=100&id=BU9jRrPRo6Lf&format=png&color=000000'
          alt='x logo'
          />

          </a>

          <a href='https://www.instagram.com/' target='blank' rel='nofollow nooperner'> 
          <img 
          src='https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000'
          alt='instagram logo'
          />


</a>

<a href='https://mail.google.com/' target='blank' rel='nofollow nooperner'> 
<img 
src='https://img.icons8.com/?size=100&id=25581&format=png&color=000000'
alt='mail logo'
/>



          </a>
        </div>
        <p className='text-center hover:text-emerald-500 text-amber-500 font-medium mb-3'> ©Ramsha Elahi | All Rights Reserved | 2024</p>
     <br />
     <br />
     
      </footer>
    </div>
  )
}


