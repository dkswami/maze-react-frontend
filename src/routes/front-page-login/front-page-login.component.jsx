import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, FormControlLabel, Checkbox, InputAdornment, IconButton, OutlinedInput, TextField, InputLabel, Input } from '@mui/material';
import { Button } from 'react-bootstrap';
import FrontPageInput from '../../components/front-page-input/front-page-input.component';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './front-page-login.styles.scss';
import { borderRadius } from '@mui/system';


const defaultFormFields = {
	email: '',
	password: '',
}

const FrontPageLogin = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [showPassword, setShowPassword] = useState(false);
	const { email, password } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(value);
		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = () => {

	}

	/* const PasswordInput = () => {
		return (
			<Input
				id="password"
				type={showPassword ? 'text' : 'password'}
				name="password"
				value={password}
				onChange={handleChange}
				required
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={() => setShowPassword(!showPassword)}
							onMouseDown={() => setShowPassword(!showPassword)}
							edge="end">
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>
		)
	} */

	return (
		<div className='login-container'>
			<div className='login-content'>
				<div className='login-heading'>
					<h2>Create Account</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='login-fields-container'>
						<FrontPageInput labelText="Email" type="email" name="email" value={email} onChange={handleChange} required />
						<FormControl  sx={{ width: '358px', }} variant="standard">
							<span className='password-title'> Password</span>
							<Input
								className="standard-adornment-password"
								type={showPassword ? 'text' : 'password'}
								name="password"
								value={password}
								sx={{ background: 'white', height: '48px', borderRadius: '5px'}}
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
					<div className='login-checkbox'>
						<FormControlLabel control={<Checkbox color="success" />} label="Remember me" />
					</div>
					<Button className='login-button' type='submit' variant="primary" size="lg">
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