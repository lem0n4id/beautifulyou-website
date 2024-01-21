import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
function Header() {
	const [isNavOpen, setNavOpen] = useState(false);
	const toggleBar = () => {
		setNavOpen(!isNavOpen);
	};
	return (
		<header>
			<nav className="bg-primary w-full flex flex-col justify-center items-center h-24">
				<div className="text-black  flex justify-between w-full gap-4  h-content px-8">
					<div className="w-full">Beautiful You</div>
					{/*Desktop Navbar*/}
					<div className="w-full hidden md:flex justify-around text-2xl font-normal font-josefin ">
						<div className="cursor-pointer">Podcast</div>
						<div className="cursor-pointer">Blog</div>
						<div className="cursor-pointer">Events</div>
						<div className="cursor-pointer">Volunteer</div>
						<div className="cursor-pointer">About Us</div>
					</div>
					{/*Mobile Ham*/}
					<div onClick={toggleBar} className="h-6 w-6 z-20 md:hidden">
						{isNavOpen ? (
							<IoClose className="h-10 w-10" />
						) : (
							<GiHamburgerMenu className="h-6 w-6" />
						)}
					</div>
					{/* Mobile Navbar */}
					<ul
						className={
							isNavOpen
								? 'absolute z-10 pt-1 top-0 left-0 bg-primary/90 flex flex-col justify-center items-center gap-10 text-xl flex-wrap w-full h-screen'
								: 'hidden'
						}
					>
						<li className="cursor-pointer">Podcast</li>
						<li className="cursor-pointer">Blog</li>
						<li className="cursor-pointer">Events</li>
						<li className="cursor-pointer">Volunteer</li>
						<li className="cursor-pointer">About Us</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
