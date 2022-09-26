import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as MazeLogo } from '../../assets/Maze.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation-container'>
				<Link className='logo-container' to='/users/'>
					<MazeLogo className='logo' />
					<span className='logo-text'> Maze</span>
				</Link>
				<div className='search-box'>
					<SearchIcon className='search-icon' />
					<input type="text" className="search-input" placeholder='Search for something here' />		
				</div>				
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;