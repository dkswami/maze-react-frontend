import { useState } from 'react';
import './add-user.styles.scss';
import { TextField } from '@mui/material';
import { FormControl, InputAdornment, IconButton, OutlinedInput, InputLabel, Select, MenuItem } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { SignupWithEmailAndPassword } from '../../utils/axios.api';

const DefaultUserFormData = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	password: '',
	role: '',
}

const AddUser = () => {
	const [userFormData, setUserFormData] = useState(DefaultUserFormData);
	const [showPassword, setShowPassword] = useState(false);
	const { firstName, lastName, email, phoneNumber, password, role } = userFormData;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value })
		console.log(userFormData);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(userFormData);
		const response = await SignupWithEmailAndPassword(userFormData);
		console.log(response);
		if (response.access_token) {
			alert('User added successfully !');
		}
		switch ( response.errors && response.errors[0]) {
			case 'invalid_grant':
				alert('Incorrect credentials ! ');
				break;
			case "Email can't be blank":
				alert("Email can't be blank");
				break;
			case "Password can't be blank":
				alert("Password can't be blank");
				break;
			case "Email is invalid":
				alert("Email is invalid");
				break;
			case 'Email has already been taken':
				alert('Email has already been taken ! ');
				break;
			default:
				console.log(response);
		}
	}

	return (
		<div className='add-user-container'>
			<h3>Add User</h3>
			<form onSubmit={handleSubmit}>
				<div className='add-user-form'>
					<TextField className="add-user-field" label="First Name" type='text' name='firstName' value={firstName} onChange={handleChange} required />
					<TextField className="add-user-field" label="Last Name" type='text' name='lastName' value={lastName} onChange={handleChange} required />
					<TextField className="add-user-field" label="Email" type='email' name='email' value={email} onChange={handleChange} required />
					<TextField className="add-user-field" label="Mobile No." type='number' name='phoneNumber' value={phoneNumber} onChange={handleChange} minLength="10" maxLength="10" required />
					<FormControl sx={{ width: '358px', }} variant="outlined" required>
						<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							className="add-user-field"
							label="Password"
							type={showPassword ? 'text' : 'password'}
							name="password"
							value={password}
							/* sx={{ background: 'white', height: '48px', borderRadius: '5px' }} */
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
							required />
					</FormControl>
				</div>
				<div className='add-user-select'>
					<span>Assign Role</span>
					<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
						<InputLabel id="demo-select-small">Role</InputLabel>
						<Select labelId="demo-select-small"
							className="add-user-field"
							name='role'
							value={role}
							label="role"
							onChange={handleChange} >
							<MenuItem value={'admin'}>Admin</MenuItem>
							<MenuItem value={'user'}>User</MenuItem>
						</Select>
					</FormControl>
				</div>
				<button type='submit' className='add-user-btn' onClick={handleSubmit}>Create User</button>
			</form>
		</div>
	)
}

export default AddUser