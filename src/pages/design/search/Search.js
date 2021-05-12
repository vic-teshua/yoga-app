import React, { useState } from 'react';

function Search(props) {
	const { data, setData } = props;

	const [searchedWord, setSearchedWord] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (searchedWord === 'beginner' || searchedWord === 'intermediate' || searchedWord === 'expert') {
			let newData = data.filter(item => item.difficultyLevel === searchedWord);
			setData(newData);
		} else {
			let newData = data.filter(item => item.nameTranslated.includes(searchedWord));
			setData(newData);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Search' value={searchedWord} onChange={e => setSearchedWord(e.target.value)} />
			<button type='submit'>Search</button>
		</form>
	);
}

export default Search;