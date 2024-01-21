import React from 'react'

function Hero() {
	return (
		<section className='bg-primary flex justify-between relative'>
			<div className="ml-[120px] py-[70px]">
				<h2 className='font-josefin font-light text-[28px]'>Welcome to Beautiful You</h2>
				<h1 className='font-playfair font-medium text-[64px] leading-none'>MEET OUR<br className='h-1' />FOUNDER</h1>
				{/* line */}
				<div className='h-[1px] w-56 bg-black my-2'></div>
				<p className='font-josefin text-[18px] my-5 max-w-[540px]'>
					Hi! I am Avantika, founder of Beautiful You.
					I am your fierce and passionate mental health advocate.
					Graduating with my major in Psychology and living with
					Bipolar Disorder myself has made me understand the importance of
					Mental Health Advocacy from a very young age. I strive to educate
					people and destigmatize mental health in India. I aim to help people
					feel less alone through my work and I want to create a safe space for all.
					Apart from my work, I love traveling, coffee and poetry!
				</p>
				<div className='flex gap-3 border-2 border-black w-fit p-2'>
					<img src="./youtube.svg" className='h-14' alt="" />
					<img src="./spotify.svg" className='h-14' alt="" />
				</div>
			</div>
			<div className='flex flex-col justify-end mr-[120px] z-10'>
				<img src="./hero.png" className='' alt="" />
			</div>
			<div className='absolute top-0 right-0 w-[742px] h-full hero-gradient z-0'>
			</div>

		</section>
	)
}

export default Hero