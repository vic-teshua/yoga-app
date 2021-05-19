import React, { useEffect, useState } from 'react';
import './Login.css';
import Users from '../../data/users';


function Login() {
	const [isVisible, setIsVisible] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			window.location.replace('/design');
		}
	}, []);

	// Functions
	const validator = param => {
		let isValid = false;
		Users.forEach(user => {
			if (param === 'email' && user.email === email) {
				isValid = true;
				setIsValidEmail(true);
			}

			if (param === 'password' && user.password === password) {
				isValid = true;
				setIsValidPassword(true);
			}
		});
		return isValid;
	};
	// onChange - update state
	const onEmailHandler = e => {
		let value = e.target.value.trim().toLowerCase();
		setEmail(value);
	};

	// onBlur - check / validate input
	const onCheckEmailHandler = e => {
		const isValid = validator('email');
		if (isValid) return;

		// if email is not valid
		setIsValidEmail(false);
	};

	const onPasswordHandler = e => {
		let value = e.target.value.trim().toLowerCase();
		setPassword(value);
	};

	const onPasswordCheckHandler = e => {
		const isValid = validator('password');
		if (isValid) return;

		setIsValidPassword(false);
	};

	const onSignHandler = e => {
		if (!isValidEmail) {
			console.log('Password wrong');
		} else if (!isValidPassword) {
			console.log('Email wrong!');
		} else {
			localStorage.setItem('token', true);
			window.location.reload();
		}
	};

	return (
		<div className='text-center fix'>
			<main className='form-login'>
				<form>
				<i class="fas fa-sign-in-alt fa-2x"></i>

					<h1 className='h3 mb-3'>Please sign in</h1>

					<div className='form-floating'>
						<input onChange={onEmailHandler} onBlur={onCheckEmailHandler} type='email' className='form-control' id='email' placeholder='name@example.com' />
						<label htmlFor='email'>Email address</label>
					</div>
					<div className='form-floating'>
						<input
							onChange={onPasswordHandler}
							onBlur={onPasswordCheckHandler}
							type={isVisible ? 'text' : 'password'}
							className='form-control'
							id='password'
							placeholder='Password'
						/>

						<span className='ShowPassword'>
							<i className='far fa-eye' onClick={() => setIsVisible(!isVisible)}></i>
						</span>

						<label htmlFor='password'>Password</label>
					</div>

					<button onClick={onSignHandler} className='w-100 btn btn-lg btn-primary' type='button'>
						Sign in
					</button>
					<p className='mt-5 mb-3 text-muted'>&copy; 2021</p>
				</form>
			</main>
			
		</div>
	);
}

export default Login;
