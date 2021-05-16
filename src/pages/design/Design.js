import React, { useState } from 'react';
import './Design.css';
import { DragDropContext } from 'react-beautiful-dnd';

// components
import Search from './search/Search';
import Column from './column/Column';

// data
import asanaData from '../../data/data';
import columnsData from '../../data/columnsData';

function Design() {
	const [data, setData] = useState(asanaData);
	const [state, setState] = useState(columnsData);

	const onDragEnd = result => {
		const { destination, source, draggableId } = result;

		// check 'not valid' activities
		if (!destination) return;

		if (destination.droppableID === source.droppableID && destination.index === source.index) return;

		const start = state.columns[source.droppableId];
		const finish = state.columns[destination.droppableId];

		// DRAG and DROP inside one column
		if (start === finish) {
			const newPosesIds = Array.from(start.posesIds);
			newPosesIds.splice(source.index, 1);
			newPosesIds.splice(destination.index, 0, draggableId);

			// create new column with the same properties but with the new poses Ids array
			const newColumn = {
				...start,
				posesIds: newPosesIds,
			};

			// update the state
			const newState = {
				...state,
				columns: {
					...state.columns,
					[newColumn.id]: newColumn,
				},
			};

			setState(newState);
			return;
		}

		// DRAG and DROP between columns

		// START
		const startPosesId = Array.from(start.posesIds);
		startPosesId.splice(source.index, 1);

		const newStart = {
			...start,
			posesIds: startPosesId,
		};

		// FINISH
		const finishPosesIds = Array.from(finish.posesIds);
		finishPosesIds.splice(destination.index, 0, draggableId);

		const newFinish = {
			...finish,
			posesIds: finishPosesIds,
		};

		// update state with new columns
		const newState = {
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};

		setState(newState);
	};

	const posesFromCol1 = state.columns['column-1'].posesIds.map(poseIds => data.filter(item => item.id === poseIds)[0]);

	return (
		<div className='container-fluid'>
			{/*************************************** row 1 *****************************/}
			{/* SEARCH */}
			<div className='row'>
				<div className='col'>
					<Search setData={setData} posesToSearch={posesFromCol1} initialData={asanaData} />
				</div>

				{/* PRINT */}
				<div className='col d-flex'>
					<button style={{ marginBottom: '20px' }}>
						<i className='fas fa-print'></i> print
					</button>
					<p>Drop here</p>
				</div>
			</div>

			{/*************************************** row 2 *****************************/}
			<DragDropContext onDragEnd={onDragEnd}>
				<div className='row'>
					{state.columnOrder.map(columnId => {
						const column = state.columns[columnId];
						const poses = column.posesIds.map(posesIds => data.filter(item => item.id === posesIds)[0]);
						// console.log('POSES XXXXXXXS=>>', poses);
						console.log('COLUMN XXXXXs ==>>', column);
						// console.log('STATE XXXX==>>', data);

						return (
							<Column className='col' key={columnId} column={column} poses={poses}>
								a
							</Column>
						);
					})}
				</div>
			</DragDropContext>
		</div>
	);
}

export default Design;
