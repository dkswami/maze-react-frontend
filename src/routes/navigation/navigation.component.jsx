import React, { Fragment, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom';

import { ReactComponent as MazeLogo } from '../../assets/Maze.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import './navigation.styles.scss';

const Profile = () => {
	return (
		<div>
			This is Profile page
		</div>
	)
}

const Navigation = () => {

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
					<div className='menu-item'>
						<LogoutIcon />
						<span>Logout</span>
					</div>
				</div>
				<div className='search-box'>
					<SearchIcon className='search-icon' />
					<input type="text" className="search-input" placeholder='Search for something here' />
				</div>
			</div>
			<Outlet />
		</>


	)
}

export default Navigation;