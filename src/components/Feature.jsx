import React from 'react';

function Feature() {
	return (
		<div className="bg-primary flex flex-col w-full h-content md:h-80 py-3 px-20 items-center justify-center gap-8 ">
			<div class="text-center text-black text-5xl font-normal font-['Josefin Sans'] uppercase leading-relaxed">
				also featured in
			</div>
			<div class="w-full h-content py-4 justify-evenly flex-wrap md:flex-nowrap items-start gap-36 inline-flex bg-stone-50">
				<div class="w-36 h-24 bg-zinc-300"></div>
				<div class="w-36 h-24 bg-zinc-300"></div>
				<div class="w-36 h-24 bg-zinc-300"></div>
				<div class="w-36 h-24 bg-zinc-300"></div>
			</div>
		</div>
	);
}

export default Feature;
