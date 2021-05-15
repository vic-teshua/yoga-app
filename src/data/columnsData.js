import poses from './data';

const columnsData = {
	// poses: poses,
	columns: {
		'column-1': {
			id: 'column-1',
			posesIds: poses.map(item => item.id),
		},

		'column-2': {
			id: 'column-2',
			posesIds: [],
		},
	},
	columnOrder: ['column-1', 'column-2'],
};

export default columnsData;
