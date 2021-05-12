import React from 'react';

function AsanaCard(props) {
	const { nameTranslated, image, difficultyLevel } = props;

	return (
		<div className='card' style={{ width: '10rem' }}>
			<img src={image} className='card-img-top' alt='...' />
			<div className='card-body'>
				<p className='card-text'>{nameTranslated}</p>
				<p className='badge bg-info'>{difficultyLevel}</p>
			</div>
		</div>
	);
}

export default AsanaCard;
