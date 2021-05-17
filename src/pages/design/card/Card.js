import React from 'react';
import './Card.css';

import { Draggable } from 'react-beautiful-dnd';

function AsanaCard(props) {
	const { index, id, nameTranslated, image, difficultyLevel } = props;

	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<div className='card' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					<img src={image} className='card-img-top' alt='...' width='100%' height='50%' />

					<div className='card-body'>
						<p className='card-text'>{nameTranslated}</p>
						<p className={difficultyLevel === 'beginner' ? 'badge bg-success' : difficultyLevel === 'intermediate' ? 'badge bg-warning' : 'badge bg-danger'}>
							{difficultyLevel}
						</p>
					</div>
				</div>
			)}
		</Draggable>
	);
}

export default AsanaCard;
