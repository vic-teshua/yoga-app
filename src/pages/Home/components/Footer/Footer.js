import React from 'react';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer'>
			<h2>
				{' '}
				Created by <br></br> Project-XxX Team
			</h2>
			<h3>
				Connect:<br></br>{' '}
				<a href='https://twitter.com' target='_blank' rel='noreferrer'>
					<i className='fab fa-twitter-square'></i>
				</a>
				<a href='https://facebook.com' target='_blank' rel='noreferrer'>
					<i className='fab fa-facebook-square'></i>
				</a>
				<a href='https://instagram.com' target='_blank' rel='noreferrer'>
					<i className='fab fa-instagram-square'></i>
				</a>
			</h3>
		</div>
	);
};

export default Footer;
