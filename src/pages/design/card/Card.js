import React, { useRef } from 'react';
import './Card.css';
import Modal from '../Modal/Modal';
import { Draggable } from 'react-beautiful-dnd';

function AsanaCard(props) {

	const { index, id, nameTranslated, image, difficultyLevel, category, description, benefits } = props;
	const modal = useRef(null);

	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<div className='card card-pose' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={() => modal.current.open()}>
					<img src={image} className='card-img-top' alt='...' />

					<div className='card-body'>
						<p className='card-text'>{nameTranslated}</p>
						<p
							className={
								difficultyLevel === 'beginner' ? 'badge bg-beginner' : difficultyLevel === 'intermediate' ? 'badge bg-intermediate' : 'badge bg-expert'
							}
						>
							{difficultyLevel}
						</p>
					</div>
					<Modal ref={modal}>
						<img src={image} className='card-img-top1' alt='...' width='100%' height='40%' />
						<div className='card-body'>
							<p className='card-text'>{category}</p>
							<p className={difficultyLevel === 'beginner' ? 'badge bg-success' : difficultyLevel === 'intermediate' ? 'badge bg-warning' : 'badge bg-danger'}>
								{difficultyLevel}
							</p>
							<br></br>
							<h5>
								Instructions:<br></br>
							</h5>
							{description.map(item => {
								return <li>{item.slice(0, 1).toUpperCase() + item.slice(1)}</li>;
							})}
							<br></br>
							<h4>
								Benefits: <br></br>
							</h4>
							{benefits.map(benefit => {
								return <li>{benefit.slice(0, 1).toUpperCase() + benefit.slice(1)}</li>;
							})}
						</div>
					</Modal>
				</div>
			)}
		</Draggable>
	);
}

export default AsanaCard;
