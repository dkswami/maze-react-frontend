import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, FormControlLabel, Checkbox, InputAdornment, IconButton, Input } from '@mui/material';
import { Button } from 'react-bootstrap';
import FrontPageInput from '../../components/front-page-input/front-page-input.component';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UserContext } from '../../contexts/user.context';

import './front-page-login.styles.scss';
import { borderRadius } from '@mui/system';
import { loginWithEmailAndPassword } from '../../utils/axios.api';


const defaultFormFields = {
	email: '',
	password: '',
}

const FrontPageLogin = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [showPassword, setShowPassword] = useState(false);
	const { email, password } = formFields;
	const Navigate = useNavigate();
	const { setIsLoggedIn } = useContext(UserContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await loginWithEmailAndPassword(formFields);

		const access_token = localStorage.getItem('access_token')
		if (access_token) {
			Navigate('/users/feeds', { replace: true });

		}
		switch (response.error) {
			case 'invalid_grant':
				alert('Incorrect credentials ! ');
				break;
			default:
				console.log(response);
		}
	}

	return (
		<div className='login-container'>
			<div className='login-content'>
				<div className='login-heading'>
					<h2>Login into Account</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='login-fields-container'>
						<FrontPageInput labelText="Email" type="email" name="email" value={email} onChange={handleChange} required />
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
					</div>
					<div className='login-checkbox'>
						<FormControlLabel control={<Checkbox color="success" />} label="Remember me" />
					</div>
					<Button className='login-button' type='submit' variant="primary" size="lg" onClick={handleSubmit}>
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