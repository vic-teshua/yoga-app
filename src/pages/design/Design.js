import React, { useState, useRef } from 'react';
import asanaData from '../../data/data';
import AsanaCard from './card/Card';
import Search from './search/Search';
import './Design.css';

function Design() {
	const [data, setData] = useState(asanaData);
	const [isFound, setIsFound] = useState(true);

	const toPrint = useRef();
	function printMe(elem) {
		let openWindow = window.open('', 'title', 'attributes');
		openWindow.document.write(elem.current.innerHTML);
		openWindow.document.close();
		openWindow.focus();
		openWindow.print();
		openWindow.close();
	}

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
					<button onClick={() => printMe(toPrint)} style={{ marginBottom: '20px' }}>
						<i class='fas fa-print'></i> print
					</button>

					<div ref={toPrint} style={{ borderTop: 'solid' }}>
						<h1>Drop here</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Design;
