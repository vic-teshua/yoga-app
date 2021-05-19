import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import AsanaCard from '../card/Card';

function Column(props) {
	console.log(props);
	return (
		<Droppable droppableId={props.column.id} direction='horizontal'>
			{(provided, snapshot) => {
				return (
					<div
						className={props.column.id === 'column-2' ? 'col-8 flexColumn rightColumn' : 'col-4 flexColumn leftColumn'}
						// className={'col flex'}
						style={snapshot.isDraggingOver ? { backgroundColor: '#d3cdb7' } : { backgroundColor: 'inherit' }}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{props.column.posesIds.length === 0 ? (
							<p className='drop-here'>Drop here</p>
						) : (
							props.poses.map((pose, index) => <AsanaCard key={pose.id} {...pose} index={index} />)
						)}
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
}

export default Column;
