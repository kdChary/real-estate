import React from 'react';

import './App.scss';
import Home from './pages/homePage/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<main className="layout">
			<Navbar />
			<section className="page">
				<Home />
			</section>
		</main>
	);
};

export default App;
