import './front-page-nav.styles.scss';
import { ReactComponent as FrontMazeIcon } from '../../assets/frontpage-maze-icon.svg';
import { Outlet } from 'react-router-dom';

const FrontPageNav = () => {
	return(
		<div className='front-page-container'>
			<div className='front-page-title'>
				<FrontMazeIcon/> 
				<span>Maze</span>				
			</div>
			<hr />
			<Outlet />
		</div>
	)
}


export default FrontPageNav;