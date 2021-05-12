import React from 'react';

import data from '../../data/data';
import AsanaCard from './card/Card';

function Design() {
	console.log(data);
	return (
		<div className='container-fluid'>
			<div className='row' style={{ height: '90vh' }}>
				<div className='col' style={{ border: 'solid red' }}>
					<div>
						<input type='text' placeholder='Search' />
						<button>Search</button>
					</div>

					<div>
						{data.map(item => (
							<AsanaCard key={item.id} {...item} />
						))}
					</div>
				</div>
				<div className='col' style={{ border: 'solid green' }}>
					Column
				</div>
			</div>
		</div>
	);
}

export default Design;
