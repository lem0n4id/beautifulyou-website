import React from 'react';

function Podcast() {
	return (
		<div className="bg-primary flex flex-col justify-center items-center  gap-3 w-full h-content py-6">
			<div className="text-black text-4xl md:text-5xl font-medium font-playfair flex flex-col justify-center items-center">
				TOP PODCAST EPISODES
			</div>
			<div className="md:w-96 w-40 h-[1px] bg-black"></div>
			<div className="flex md:flex-nowrap flex-wrap items-center justify-between w-full h-full gap-6 md:gap-24 pt-6 pb-16 px-32 md:px-0">
				<div className="w-72 h-96 relative  hover:scale-105 ease-in-out duration-500">
					<img
						src="./img1.png"
						alt=""
						className="absolute  w-72 h-96 object-cover rounded-none "
					/>
                    <div className='absolute  podcast-gradient w-full h-full bottom-0'></div>
                    <div className='pb-4 absolute text-4xl font-normal font-josefin leading-10 tracking-tight  w-full h-full bottom-0 flex flex-col justify-end items-center gap-1'>
                        <div>23 THINGS I </div>
                        <div>LEARNED </div>
                        <div>IN 2023</div>
                        <div class="w-60 h-6 text-center text-black text-base font-thin font-josefin">one line description of the episode</div>
                        <button className="w-32 h-8 bg-black text-white text-lg font-normal">listen now</button>
                    </div>
				</div>
				<div className="w-72 h-96 relative  hover:scale-105 ease-in-out duration-500">
					<img
						src="./img2.png"
						alt=""
						className="absolute  w-72 h-96 object-cover rounded-none "
					/>
                    <div className='absolute  podcast-gradient w-full h-full bottom-0'></div>
                    <div className='pb-4 absolute text-4xl font-normal text-white font-josefin leading-10 tracking-tight  w-full h-full bottom-0 flex flex-col justify-end items-center gap-1'>
                        <div>LIVING</div>
                        <div>WELL WITH</div>
                        <div>BIPOLAR</div>
                        <div class="w-60 h-6 text-center  text-base font-thin font-josefin text-white">one line description of the episode</div>
                        <button className="w-32 h-8 bg-black text-white text-lg font-normal">listen now</button>
                    </div>
				</div>
				<div className="w-72 h-96 relative  hover:scale-105 ease-in-out duration-500">
					<img
						src="./img3.png"
						alt=""
						className="absolute  w-72 h-96 object-cover rounded-none "
					/>
                    <div className='absolute  podcast-gradient w-full h-full bottom-0'></div>
                    <div className='pb-4  absolute text-4xl font-normal font-josefin leading-10 tracking-tight  w-full h-full bottom-0 flex flex-col justify-end items-center gap-1'>
                        <div>MANAGING </div>
                        <div>MADD</div>
                        
                        <div class="w-60 h-6 text-center text-black text-base font-thin font-josefin">with Joanna Jacob</div>
                        <button className="w-32 h-8 bg-black text-white text-lg font-normal">listen now</button>
                    </div>
				</div>
				
			</div>
		</div>
	);
}

export default Podcast;
