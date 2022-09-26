import './front-page-home.styles.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FrontPageHome = () => {
	return (
		<div className='front-home-container'>
				<div className='front-home-content'>
					Social media shared today, tomorrow or by location
				
				<span>Discover with Maze</span>	
				</div>		
			<div className='front-home-actions'>
				<Link to='/signup'>
					<Button variant="primary" size="lg">
						Create Account
					</Button>
				</Link>
				<span>OR</span>
				<Link to='/login'>
					<Button variant="light" size="lg">
						Login
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default FrontPageHome;