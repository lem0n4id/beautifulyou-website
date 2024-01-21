import React from 'react'
import { YOUTUBE_URL, SPOTIFY_URL } from '../consts';


function Hero() {
	return (
		<section className='bg-primary flex flex-col lg:flex-row items-center lg:items-end justify-between relative'>
			<div className="flex flex-col items-center lg:items-start lg:ml-[120px] pt-12 pb-2 lg:py-[70px]">
				
				{/* mobile gradient */}
				<div className='absolute top-0 w-full h-full hero-gradient-mobile z-0 block lg:hidden'>
				</div>

				<h2 className='font-josefin font-light text-xl lg:text-[28px] z-10'>Welcome to Beautiful You</h2>
				<h1 className='font-playfair font-medium text-5xl lg:text-[64px] leading-none z-10'>MEET OUR<br className='h-1' />FOUNDER</h1>
				
				{/* line */}
				<div className='h-[1px] w-[158px] lg:w-56 bg-black my-2 z-10'></div>

				{/* text desktop */}
				<p className='font-josefin text-[18px] my-5 max-w-[540px] hidden lg:block'>
					Hi! I am Avantika, founder of Beautiful You.
					I am your fierce and passionate mental health advocate.
					Graduating with my major in Psychology and living with
					Bipolar Disorder myself has made me understand the importance of
					Mental Health Advocacy from a very young age. I strive to educate
					people and destigmatize mental health in India. I aim to help people
					feel less alone through my work and I want to create a safe space for all.
					Apart from my work, I love traveling, coffee and poetry!
				</p>
				
				{/* social icons desktop */}
				<div className='hidden lg:block'>
					<div className='flex flex-row gap-3 border-2 border-black  p-2'>
						<a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
							<img src="./youtube.svg" className='h-14' alt="" />
						</a>
						<a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
							<img src="./spotify.svg" className='h-14' alt="" />
						</a>
					</div>
				</div>
				
			</div>

			{/* hero image */}
			<div className='flex flex-col justify-end px-10 h-auto max-w-[410px] lg:px-0 lg:max-w-full z-10'>
				<img src="./hero.png" className='' alt="" />
			</div>

			{/* text mobile */}
			<p className='font-josefin text-base my-5 max-w-[322px] z-10 block lg:hidden'>
				Hi! I am Avantika, founder of Beautiful You.
				I am your fierce and passionate mental health advocate.
				Graduating with my major in Psychology and living with
				Bipolar Disorder myself has made me understand the importance of
				Mental Health Advocacy from a very young age. I strive to educate
				people and destigmatize mental health in India. I aim to help people
				feel less alone through my work and I want to create a safe space for all.
				Apart from my work, I love traveling, coffee and poetry!
			</p>

			{/* social icons mobile */}
			<div className='block lg:hidden z-10 mb-8'>
				<div className='flex gap-3 border-2 border-black w-fit p-2'>
					<a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
						<img src="./youtube.svg" className='h-14' alt="" />
					</a>
					<a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
						<img src="./spotify.svg" className='h-14' alt="" />
					</a>
				</div>	
			</div>
						

			{/* desktop gradient */}
			<div className='absolute top-0 right-0 w-[742px] h-full hero-gradient z-0 hidden lg:block'>
			</div>

		</section>
	)
}

export default Hero