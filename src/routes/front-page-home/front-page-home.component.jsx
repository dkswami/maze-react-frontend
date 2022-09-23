import './front-page-home.styles.scss';
import { Button } from 'react-bootstrap';

const FrontPageHome = () => {
	return (
		<>
			<div className='front-home-container'>
				<div className='front-home-content'>
					Social media shared today, tomorrow or by location
				</div>
				<span>Discover with Maze</span>
			</div>
			<div className='front-home-actions'>
				<Button variant="primary" size="lg">
					Create Account
				</Button>
				<span>OR</span>
				<Button variant="outline-light" size="lg">
					Login
				</Button>
			</div>
		</>

	)
}

export default FrontPageHome;