import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import AsanaCard from '../card/Card';

function Column(props) {
	return (
		<Droppable droppableId={props.column.id} direction='horizontal'>
			{(provided, snapshot) => {
				return (
					<div
						className={props.column.id === 'column-2' ? 'col flex column-to-print' : 'col flex'}
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
