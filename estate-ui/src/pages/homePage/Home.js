import React from 'react';

import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/searchBar/SearchBar';

const Home = () => {
	return (
		<article className="homePage">
			<div className="textContainer">
				<section className="textWrapper">
					<h1 className="homeTitle">Find Real Estate & Get Your Dream Place</h1>
					<p className="homeDescription">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
						explicabo suscipit cum eius, iure est nulla animi consequatur
						facilis id pariatur fugit quos laudantium temporibus dolor ea
						repellat provident impedit!
					</p>
					<SearchBar />

					<div className="homeInfo">
						<div className="box">
							<h1>16+</h1>
							<h2>Years of Experience</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>Awards Gained</h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</section>
			</div>
			<div className="imageContainer">
				<img
					src="https://res.cloudinary.com/dgga8cymk/image/upload/v1717761492/Estate/estate-home-right-bg.png"
					alt="home"
				/>
			</div>
		</article>
	);
};

export default Home;
