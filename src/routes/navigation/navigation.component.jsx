import React, { Fragment, useState, useContext } from 'react'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import profilePic from '../../assets/default-profile-pic.png';

import { ReactComponent as MazeLogo } from '../../assets/Maze.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
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
			setIsLoggedIn(false);
		}
	}

	return (
		<>
			<div className='users-home-container'>
				<div className='navigation-container'>
					<div className='top-section'>
						<Link className='logo-container' to='/users/feeds'>
							<MazeLogo className='logo' />
							<span className='logo-text'> Maze</span>
						</Link>
					</div>
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
					<div className='menu-item' onClick={HandleLogoutClick}>
						<LogoutIcon />
						<span>Logout</span>
					</div>
				</div>
				<div className='top-nav-bar'>
					<div className='search-box'>
						<SearchIcon className='search-icon' />
						<input type="text" className="search-input" placeholder='Search for something here' />
					</div>
					<div className='user-info-dp'>
						<span>{  currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : '' }</span>
						<img src={profilePic} alt='user dp' />
					</div>
				</div>
			</div>
			<Outlet />
		</>


	)
}

export default Navigation;