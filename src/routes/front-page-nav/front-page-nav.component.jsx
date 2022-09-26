import './front-page-nav.styles.scss';
import { ReactComponent as FrontMazeIcon } from '../../assets/frontpage-maze-icon.svg';
import { Link, Outlet } from 'react-router-dom';

const FrontPageNav = () => {
	return(
		<div className='front-page-container'>
			<Link to='/'>
				<div className='front-page-title'>
					<FrontMazeIcon/> 
					<span>Maze</span>				
				</div>
			</Link>			
			<hr />
			<Outlet />
		</div>
	)
}


export default FrontPageNav;