import React from 'react'

function OurMission() {
    return (
        <section className='bg-primary flex flex-col lg:flex-row items-center lg:items-end justify-between relative'>
            
            {/* hero image */}
            <div className='flex flex-col justify-end mx-16 mt-20 h-auto max-w-[410px] lg:px-0 lg:max-w-full z-10'>
                <img src="./hero.png" className='' alt="" />
            </div>

            <div className="flex flex-col items-center lg:items-start h-full my-auto lg:mr-[130px] pt-12 pb-2 lg:py-[70px]">

                {/* mobile gradient */}
                <div className='absolute top-0 w-full h-full our-mission-gradient-mobile z-0 block lg:hidden'>
                </div>

                <h1 className='font-playfair font-medium text-5xl lg:text-[64px] leading-none z-10'>OUR<br className='h-1' />MISSION</h1>

                {/* line */}
                <div className='h-[1px] w-[158px] lg:w-56 bg-black my-2 z-10'></div>

                {/* text desktop */}
                <p className='font-josefin text-[20px] my-5 max-w-[540px] hidden lg:block'>
                    We aim to educate, aware, and empower people through mental health advocacy. 
                    We aim to help people feel less alone through building a community through 
                    our work. We want to educate people via our content and events
                </p>
            </div>

            {/* text mobile */}
            <p className='font-josefin text-base my-5 pb-5 max-w-[322px] z-10 block lg:hidden'>
                We aim to educate, aware, and empower people through mental health advocacy. 
                We aim to help people feel less alone through building a community through 
                our work. We want to educate people via our content and events
            </p>

            {/* desktop gradient */}
            <div className='absolute top-0 left-0 w-[720px] h-full our-mission-gradient z-0 hidden lg:block'>
            </div>

        </section>
    )
}

export default OurMission