import React from 'react';
import './Card.css';

function AsanaCard(props) {
	const { nameTranslated, image, difficultyLevel } = props;

	return (
		<div className='card'>
			<img src={image} className='card-img-top' alt='...' width='100%' height='50%' />
			<div className='card-body'>
				<p className='card-text'>{nameTranslated}</p>
				<p className={difficultyLevel === 'beginner' ? 'badge bg-success' : difficultyLevel === 'intermediate' ? 'badge bg-warning' : 'badge bg-danger'}>
					{difficultyLevel}
				</p>
			</div>
		</div>
	);
}

export default AsanaCard;
