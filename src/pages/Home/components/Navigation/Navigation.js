import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
const Navigation = () => {
	return (
		<div>
			<ul className='nav'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/login'>Design</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
