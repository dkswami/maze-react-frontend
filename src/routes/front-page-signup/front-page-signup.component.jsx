import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Button } from 'react-bootstrap';
import FrontPageInput from '../../components/front-page-input/front-page-input.component';
import './front-page-signup.styles.scss';
import { Link } from 'react-router-dom';

const defaultFormFields = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	password: '',
	confirmPassword: ''
}

const FrontPageSignup = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(value);
		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = () => {

	}

	return (
		<div className='signup-container'>
			<div className='signup-content'>
				<div className='signup-heading'>
					<h2>Create Account</h2>
					<span>For business, band or celebrity.</span>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='signup-fields-container'>
						<FrontPageInput labelText="First name" type="text" name="firstName" value={firstName} onChange={handleChange} required />
						<FrontPageInput labelText="Last name" type="text" name="lastName" value={lastName} onChange={handleChange} required />
						<FrontPageInput labelText="Email" type="email" name="email" value={email} onChange={handleChange} required />
						<FrontPageInput labelText="Phone Number" type="number" name="phoneNumber" value={phoneNumber} onChange={handleChange} required />
						<FrontPageInput labelText="password" type="password" name="password" value={password} onChange={handleChange} required />
						<FrontPageInput labelText="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required />
					</div>
					<div className='signup-checkbox'>
						<FormControlLabel control={<Checkbox color="success" />} label="Remember me"  />
						<FormControlLabel control={<Checkbox color="success" />} label={`I agree to all the Terms and Privacy policy` }/>
					</div>
					<Button type='submit' variant="primary" size="lg">
						Login
					</Button>
					<span className='already-login'>
						Already have an account?  
						<Link to='/login'> Log In </Link>
					</span>
				</form>
			</div>

		</div>
	)
}

export default FrontPageSignup;