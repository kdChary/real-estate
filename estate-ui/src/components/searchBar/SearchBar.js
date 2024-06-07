import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.scss';

const types = ['buy', 'rent'];

const SearchBar = () => {
	const [query, setQuery] = useState({
		type: 'buy',
		location: '',
		minPrice: 0,
		maxPrice: 0,
	});

	const minPriceRef = useRef(0);
	const maxPriceRef = useRef(0);

	const switchType = (optn) => {
		setQuery((q) => ({ ...q, type: optn }));
	};

	const changeQuery = (event) => {
		event.preventDefault();
		// console.log(minPriceRef.current.value);
		setQuery((q) => ({
			...q,
			location: '',
			minPrice: minPriceRef.current.value,
			maxPrice: maxPriceRef.current.value,
		}));

		minPriceRef.current.value = 0
		maxPriceRef.current.value = 0
	};

	return (
		<div className="searchBar">
			<div className="type">
				{types.map((type) => (
					<button
						key={type}
						type="button"
						className={query.type === type ? 'active' : ''}
						onClick={() => switchType(type)}>
						{type}
					</button>
				))}
			</div>

			<form name="search" onSubmit={changeQuery}>
				<input type="location" name="location" placeholder="City Location" />
				<input
					type="number"
					name="minPrice"
					min={0}
					max={100000}
					placeholder="Min Price"
					ref={minPriceRef}
				/>
				<input
					type="text"
					name="maxPrice"
					min={0}
					max={1000000}
					placeholder="Max Price"
					ref={maxPriceRef}
				/>
				<button type="submit">
					<FaSearch />
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
