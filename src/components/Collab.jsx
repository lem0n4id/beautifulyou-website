import React from 'react'

function Collab() {
  return (
    <section>
      <div className='collab-gradient h-content w-full flex items-center justify-around gap-10 lg:gap-2 px-10 lg:px-44 py-20 lg:flex-nowrap flex-wrap-reverse'>
        <div className='h-content w-fit flex flex-col justify-center items-center lg:items-start gap-2 sm:gap-4'>
            <div className='text-sm sm:text-lg lg:text-[28px] text-black font-thin font-josefin'>COME COLLABORATE WITH US</div>
            <div className='text-3xl sm:text-5xl lg:text-6xl font-medium font-playfair leading-10'>COLLABORATE</div>
            <div className='text-3xl sm:text-5xl lg:text-6xl font-medium font-playfair leading-10'>W/ US</div>
            <div class="w-56 h-px bg-black"></div>
            <div class="w-[280px] md:w-96 h-content text-justify text-black text-base sm:text-[20px] font-medium font-josefin ">
              We are looking for psychologists, psychiatrists, NGOs to work with in Mumbai, India. 
              We are also looking to collaborate online via Instagram content and Podcast. If you are
            </div>
            <div><button className='bg-black w-36 h-11  text-white text-lg hover:bg-black/80 00'>Contact Us</button></div>
        </div>
        <div class="w-96 h-96 bg-stone-50"></div>
      </div>
    </section>
    
  )
}

export default Collab