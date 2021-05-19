import React from 'react';
import './ContactForm.css';
import logo from '../Home/components/Image/logo.png'
import { Form, Button, Container, Col, Row, Image, Badge } from 'react-bootstrap';

function App() {
	return (
		<div>
			
			
					<Row>
						<Col lg={6} className='contact-form-img-container'>
							<Image className='contact-form-img' src={logo} rounded />
						</Col>
					</Row>
			
				<Container className='contact-form-container'>
					<h1>
						Contact Us <Badge variant='secondary'></Badge>
					</h1>
					
						<Row>
							<Col lg={6}>
								<Form className='contact-form'>
									<Row>
										<Col lg={6}>
											<Form.Group className='input' controlId='formBasicFirstName'>
												{/* <Form.Label>First Name</Form.Label> */}
												<Form.Control required size='lg' type='text' placeholder='First Name' />
											</Form.Group>
										</Col>

										<Col lg={6}>
											<Form.Group className='input' controlId='formBasicLastName'>
												{/* <Form.Label>Last Name</Form.Label> */}
												<Form.Control required size='lg' type='text' placeholder='Last Name' />
											</Form.Group>
										</Col>
									</Row>

									<Form.Group className='input' controlId='formEmail'>
										{/* <Form.Label>Email Address</Form.Label> */}
										<Form.Control required type='email' placeholder='Your Email' />
									</Form.Group>

									<Form.Group className='input' controlId='formBasicPhone'>
										{/* <Form.Label>Phone Number (optional)</Form.Label> */}
										<Form.Control type='text' placeholder='Phone Number (optional)' />
									</Form.Group>

									<Form.Group className='input' style={{ marginBottom: 0 }} controlId='formBasicWhatAreYouLookingForr'>
										{/* <Form.Label>How can we help you online?</Form.Label> */}
										<Form.Control required as='textarea' rows='3' placeholder='How can we help you online?' />
									</Form.Group>

									<Form.Text className='text-muted' style={{ display: 'block', marginBottom: '20px' }}>
										We'll never share your email address, trust us!
									</Form.Text>
									<Button className='contact-form-button' type='submit'>
										Submit
									</Button>
								</Form>
							</Col>
							<Col lg={6} className='contact-form-text-container'>
								<h4>Have questions about our services?</h4>
								<Row>
									<p>
										From basic questions to complex compliance inquiries, we're here to help! Interested in learning more about our services? Our Account
										Executives take the time to discuss your existing background screening program and help you make smart decisions that best meet your needs.
									</p>
									<p>
										The time to discuss your existing background screening program and help you make smart decisions that best meet your needs. Interested in
										learning more about our services? Our Account Executives take Interested in learning more about our services? 	
									</p>
								</Row>
							</Col>
						</Row>
					</Container>
			
		
		
		</div>
	);
}

export default App;
