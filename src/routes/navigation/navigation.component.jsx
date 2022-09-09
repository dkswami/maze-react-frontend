import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as MazeLogo } from '../../assets/Maze.svg';

import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation-container'>
				<Link className='logo-container' to='/'>
					<MazeLogo className='logo' />
					<span className='logo-text'> Maze</span>
				</Link>
				<input type="text" className="search-box" placeholder='Search for something here' />		
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;