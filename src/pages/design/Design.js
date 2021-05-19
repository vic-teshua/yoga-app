import React, { useState, useEffect } from 'react';
import './Design.css';
import { DragDropContext } from 'react-beautiful-dnd';

// components
import Column from './column/Column';

// data
import asanaData from '../../data/data';
import columnsData from '../../data/columnsData';

function Design() {
	const [data, setData] = useState(asanaData);
	const [state, setState] = useState(columnsData);

	// search
	const [searchedWord, setSearchedWord] = useState('');

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

		// FINISH (destination)
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

	// SUBMIT SEARCH
	const handleSubmit = e => {
		e.preventDefault();

		// get data from column 1 as at a given period of time
		const column1 = state.columns['column-1'];
		const posesFromCol1 = column1.posesIds.map(poseIds => data.filter(item => item.id === poseIds)[0]);

		// filter this data by the searched word
		const searchedWordToCheck = searchedWord.trim().toLowerCase();
		let searchLevel = posesFromCol1.filter(item => item.difficultyLevel === searchedWordToCheck);
		let searchName = posesFromCol1.filter(item => item.nameTranslated.includes(searchedWordToCheck));
		let newData = [...searchLevel, ...searchName];

		if (newData.length <= 0) {
			console.log('No Matches');
		}

		// update state with filtered array
		const filteredPosesId = newData.map(item => item.id);

		const newFilteredCol = {
			...column1,
			posesIds: filteredPosesId,
		};

		const newState = {
			...state,
			columns: {
				...state.columns,
				'column-1': newFilteredCol,
			},
		};

		console.log(newState);

		//update state with new data
		setState(newState);
		setSearchedWord('');
	};

	//RESET
	const handleReset = () => {
		const initialPoses = asanaData.map(item => item.id);

		const newState = {
			...state,
			columns: {
				...state.columns,
				'column-1': { id: 'column-1', posesIds: initialPoses },
				'column-2': { id: 'column-2', posesIds: [] },
			},
		};

		setState(newState);
	};
	// handleCLick to fix Search bar
	const handleClick = e => {
		const initialPoses = asanaData.map(item => item.id);
		const newState = {
			...state,
			columns: {
				...state.columns,
				'column-1': { id: 'column-1', posesIds: initialPoses },
			},
		};
		setState(newState);
	};

	const column1 = state.columns['column-1'];
	const posesFromCol1 = column1.posesIds.map(poseIds => data.filter(item => item.id === poseIds)[0]);

	const column2 = state.columns['column-2'];
	const posesFromCol2 = column2.posesIds.map(poseIds => data.filter(item => item.id === poseIds)[0]);

	//LOGIN

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			window.location.replace('/login');
		}
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};
	return (
		<div className='container-fluid'>
			{/*************************************** row 1 *****************************/}
			{/* SEARCH */}
			<div className='row btn-row'>
				<div className='col-4' onClick={handleClick}>
					<form className='search-form' onSubmit={handleSubmit}>
						<input type='text' placeholder='Search' value={searchedWord} onChange={e => setSearchedWord(e.target.value)} />
						{/* <button type='submit' className='btn3'>
							Search
						</button> */}
					</form>
				</div>

				{/* PRINT */}
				<div className='col-8 service-buttons-container'>
					<button onClick={() => window.print()} className='btn3'>
						<i className='fas fa-print'></i> Print
					</button>

					{/* RESET */}
					<button type='reset' onClick={handleReset} className='btn3'>
						Remove Cards
					</button>
				</div>
			</div>

			{/*************************************** row 2 *****************************/}
			<DragDropContext onDragEnd={onDragEnd}>
				<div className='row'>
					<Column key={column1.id} column={column1} poses={posesFromCol1} />

					<Column key={column2.id} column={column2} poses={posesFromCol2} />
				</div>
			</DragDropContext>

			{/* LOGOUT */}
			<div className='logout-container'>
				<button onClick={logout} className='btn3'>
					<i class='fas fa-sign-out-alt'></i> Sign Out
				</button>
			</div>
		</div>
	);
}

export default Design;
