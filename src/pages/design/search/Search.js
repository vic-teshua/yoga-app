import React, { useState } from 'react';
import './Search.css';

function Search(props) {
	const { initialData, setData, setIsFound } = props;
	const [searchedWord, setSearchedWord] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		let newData = [];

		if (searchedWord === 'beginner' || searchedWord === 'intermediate' || searchedWord === 'expert') {
			newData = initialData.filter(item => item.difficultyLevel === searchedWord);
			setData(newData);
			setSearchedWord('');
			setIsFound(true);
		} else {
			newData = initialData.filter(item => item.nameTranslated.includes(searchedWord));
			setData(newData);
			setSearchedWord('');
			setIsFound(true);
		}

		if (newData.length <= 0) {
			setIsFound(false);
			setData(initialData);
		}
	}

	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search' value={searchedWord} onChange={e => setSearchedWord(e.target.value.trim().toLowerCase())} />
			<button type='submit'>Search</button>
			<button
				type='reset'
				onClick={() => {
					setData(initialData);
					setIsFound(true);
					setSearchedWord('');
				}}
			>
				Reset
			</button>
		</form>
	);
}

export default Search;
