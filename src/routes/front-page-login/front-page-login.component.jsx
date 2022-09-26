import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Button } from 'react-bootstrap';
import FrontPageInput from '../../components/front-page-input/front-page-input.component';

import './front-page-login.styles.scss';


const defaultFormFields = {
	email: '',
	password: '',
}

const FrontPageLogin = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(value);
		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = () => {

	}

	return(
		<div className='login-container'>
			<div className='login-content'>
				<div className='login-heading'>
					<h2>Create Account</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='login-fields-container'>						
						<FrontPageInput labelText="Email" type="email" name="email" value={email} onChange={handleChange} required />
						<FrontPageInput labelText="password" type="password" name="password" value={password} onChange={handleChange} required />					</div>
					<div className='login-checkbox'>
						<FormControlLabel control={<Checkbox color="success" />} label="Remember me"  />					
					</div>
					<Button type='submit' variant="primary" size="lg">
						Login
					</Button>
					<span className='new-login'>
						Don't have an account?  
						<Link to='/signup'> Sign Up </Link>
					</span>
				</form>
			</div>

		</div>
	)
}

export default FrontPageLogin;