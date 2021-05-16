/* eslint-disable default-case */
import React, { useState } from 'react';
import './Search.css';

function Search(props) {
	const { posesToSearch, initialData, setData } = props;
	const [searchedWord, setSearchedWord] = useState('');

	const searchedWordToCheck = searchedWord.trim().toLowerCase();
	function handleSubmit(e) {
		e.preventDefault();
		console.log(searchedWordToCheck);

		let newData = [];

		if (searchedWord === 'beginner' || searchedWord === 'intermediate' || searchedWord === 'expert') {
			newData = posesToSearch.filter(item => item.difficultyLevel === searchedWord);
			//setData(newData);
			setSearchedWord('');
			console.log(newData);
		} else {
			newData = posesToSearch.filter(item => item.nameTranslated.includes(searchedWord));
			// setData(newData);
			setSearchedWord('');
			console.log(newData);
		}

		if (newData.length <= 0) {
			// setData(posesToSearch);
			console.log('No Matches');
		}
	}

	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search' value={searchedWord} onChange={e => setSearchedWord(e.target.value)} />
			<button type='submit'>Search</button>
			<button
				type='reset'
				onClick={() => {
					setSearchedWord('');
					setData(initialData);
				}}
			>
				Reset
			</button>
		</form>
	);
}

export default Search;
