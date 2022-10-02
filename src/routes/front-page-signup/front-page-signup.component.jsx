import { useState } from 'react';
import { FormControl, FormControlLabel, Checkbox, InputAdornment, IconButton, Input } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from 'react-bootstrap';
import FrontPageInput from '../../components/front-page-input/front-page-input.component';
import './front-page-signup.styles.scss';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

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
	const [showPassword, setShowPassword] = useState(false);
	const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(value);
		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = () => {

	}

	const PasswordBox = () => {
		return (
			<></>
		)
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
						<FormControl sx={{ width: '358px', }} variant="standard">
							<span className='password-title'> Password</span>
							<Input
								className="standard-adornment-password"
								type={showPassword ? 'text' : 'password'}
								name="password"
								value={password}
								sx={{ background: 'white', height: '48px', borderRadius: '5px' }}
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={() => setShowPassword(!showPassword)}
											onMouseDown={() => setShowPassword(!showPassword)}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<FormControl sx={{ width: '358px', }} variant="standard">
							<span className='password-title'> Confirm Password</span>
							<Input
								className="standard-adornment-password"
								type={showPassword ? 'text' : 'password'}
								name="confirmPassword"
								value={confirmPassword}
								sx={{ background: 'white', height: '48px', borderRadius: '5px' }}
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={() => setShowPassword(!showPassword)}
											onMouseDown={() => setShowPassword(!showPassword)}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</div>
					<div className='signup-checkbox'>
						<FormControlLabel control={<Checkbox color="success" />} label="Remember me" />
						<FormControlLabel control={<Checkbox color="success" />} label={`I agree to all the Terms and Privacy policy`} />
					</div>
					<Button className='login-button' type='submit' variant="primary" size="lg">
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