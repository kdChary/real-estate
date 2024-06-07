import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import './Navbar.scss';

const Navbar = () => {
	const [showMenu, setToggleMenu] = useState(false);
	return (
		<nav>
			<div className="left">
				<div className="logo-card">
					<img
						src="https://res.cloudinary.com/dgga8cymk/image/upload/v1717747797/Estate/ksdEstates-logo.png"
						alt="logo"
					/>
					<span>ksdEstates</span>
				</div>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<a href="/">Agents</a>
			</div>

			<div className="right">
				<button type="button" className="btn sign-in">
					Login
				</button>
				<button type="button" className="btn sign-up">
					Sign Up
				</button>
				<button
					type="button"
					className="menu-icon"
					onClick={() => {
						console.log('clicked');
						return setToggleMenu(!showMenu);
					}}>
					{!showMenu ? <MdMenu /> : <MdClose />}
				</button>
				<div className={showMenu ? 'menu menu-appear' : 'menu '}></div>
			</div>
		</nav>
	);
};

export default Navbar;
