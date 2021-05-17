import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import AsanaCard from '../card/Card';


function Column(props) {
	
	console.log(props.column.id);

	return (
		<Droppable droppableId={props.column.id} direction='horizontal'>
			{(provided, snapshot) => {
				return (
					<div
					className='col flex'
					style={snapshot.isDraggingOver ? { backgroundColor: 'wheat' } : { backgroundColor: 'inherit' }}
					ref={provided.innerRef}
					{...provided.droppableProps}
					
					>
					{props.poses.map((pose, index) => (
						<AsanaCard key={pose.id} {...pose} index={index} />
						))}
						{provided.placeholder}
						
						</div>
						);
					}}
		</Droppable>
	);
}

export default Column;
