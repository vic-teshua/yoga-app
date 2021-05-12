import React, { useState } from 'react';

import asanaData from '../../data/data';
import AsanaCard from './card/Card';
import Search from './search/Search';

function Design() {
	const [data, setData] = useState(asanaData);

	return (
		<div className='container-fluid'>
			<div className='row' style={{ height: '90vh' }}>
				<div className='col' style={{ border: 'solid red' }}>
					<Search data={data} setData={setData} />

					<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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
