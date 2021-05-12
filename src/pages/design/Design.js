import React, { useState } from 'react';

import asanaData from '../../data/data';
import AsanaCard from './card/Card';
import Search from './search/Search';
import './Design.css';
function Design() {
	const [data, setData] = useState(asanaData);

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col'>
					<Search data={data} setData={setData} />

					<div className='flex'>
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
