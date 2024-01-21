import React from 'react';

function Newsletter() {
	return (
		<main className="bg-secondary w-full md:h-60 h-content flex flex-col gap-2 justify-center items-center">
            <div className='w-1/2 md:w-full  flex flex-col gap-2 justify-center items-center'>
			<div className="text-black text-xl font-thin font-josefin">
				to keep up with our latest content
			</div>
			<div className="text-black text-5xl font-medium font-playfair pb-2">
				JOIN OUR NEWSLETTER
			</div>
			<div className="md:w-96 w-40 h-[1.5px] bg-black"></div>
			<div className="w-content flex flex-col justify-around gap-4 px-6 pt-4 md:flex-row">
				<input type="text" placeholder="Your Name" className=" w-64 h-10 focus:border-primary border-white border-2 leading-tight py-2 px-2 text-black placeholder:text-black active:border-primary text-lg font-thin font-josefin" />
                <input type="email" placeholder="Email Address" className="w-64 h-10 focus:border-primary border-white border-2 leading-tight py-2 px-2 text-black placeholder:text-black active:border-primary text-lg font-thin font-josefin"/>
                <button className='bg-black px-4  text-white text-lg hover:bg-black/80 00'>Sign Up</button>
			</div>
            </div>
		</main>
	);
}

export default Newsletter;