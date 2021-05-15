import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import AsanaCard from '../card/Card';

function Column(props) {
	return (
		<Droppable droppableId={props.column.id} direction='horizontal'>
			{provided => (
				<div className='col flex' ref={provided.innerRef} {...provided.droppableProps}>
					{props.poses.map((pose, index) => (
						<AsanaCard key={pose.id} {...pose} index={index} />
					))}

					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
}

export default Column;
