import React, { useState } from 'react';
import asanaData from '../../data/data';
import AsanaCard from './card/Card';
import Search from './search/Search';
import './Design.css';

function Design() {
	const [data, setData] = useState(asanaData);
	const [isFound, setIsFound] = useState(true);

	return (
		<div className='container-fluid'>
			<div className='row' style={{ marginTop: '20px' }}>
				<div className='col'>
					<Search setData={setData} initialData={asanaData} setIsFound={setIsFound} />

					{isFound ? (
						<div className='flex'>
							{data.map(item => (
								<AsanaCard key={item.id} {...item} />
							))}
						</div>
					) : (
						<p>Not found</p>
					)}
				</div>
				<div className='col' style={{ border: 'solid green' }}>
					Drag here
				</div>
			</div>
		</div>
	);
}

export default Design;
