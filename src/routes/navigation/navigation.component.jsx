import React, { Fragment, useState, useContext } from 'react'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import profilePic from '../../assets/default-profile-pic.png';

import { ReactComponent as MazeLogo } from '../../assets/Maze.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from '../../contexts/user.context';

import './navigation.styles.scss';

const Navigation = () => {
	const Navigate = useNavigate();
	const { currentUser, setIsLoggedIn } = useContext(UserContext);
	const HandleLogoutClick = () => {
		if (window.confirm("Are you sure to logout?")) {
			localStorage.removeItem('access_token');
			Navigate('/login');
			/* setIsLoggedIn(false); */
		}
	}

	return (
		<>
			<div className='top-nav-bar'>
				<div className='logo-section'>
					<Link className='logo-container' to='/users/feeds'>
						<MazeLogo className='logo' />
						<span className='logo-text'> Maze</span>
					</Link>
				</div>
				<div className='search-box'>
					<SearchIcon className='search-icon' />
					<input type="text" className="search-input" placeholder='Search for something here' />
				</div>
				<Link to='/users/profile'>
					<div className='user-info-dp'>
						<img src={profilePic} alt='user dp' />
						<div className='user-info'>
							<span className='user-name'>{currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : ''}</span>
							<span className='user-role'>{currentUser ? currentUser.role : ''}</span>
						</div>
					</div>
				</Link>
			</div>
			<div className='nav-left-container'>
				<NavLink to='/users/feeds' className={({ isActive }) => isActive ? `active` : undefined}>
					<div className='menu-item'>
						<GridViewIcon />
						<span>Feeds</span>
					</div>
				</NavLink>
				<NavLink to='/users/profile' className={({ isActive }) => isActive ? `active` : undefined}>
					<div className='menu-item'>
						<PersonIcon />
						<span>Profile</span>
					</div>
				</NavLink>
				{currentUser.role === 'admin' ? (
					<NavLink to='/users/manageusers' className={({ isActive }) => isActive ? `active` : undefined}>
						<div className='menu-item' style={{ height: '90px', paddingBottom: '25px' }}>
							<ManageAccountsIcon />
							<span>Manage Users</span>
						</div>
					</NavLink>
				) : null}
				<div className='menu-item' onClick={HandleLogoutClick}>
					<LogoutIcon />
					<span>Logout</span>
				</div>
			</div>
			<Outlet />

		</>
	)
}

export default Navigation;