import Post from '../../components/post/post.component';
import './complete-post.styles.scss';


const CompletePost = () => {
	return(
		<>
			<Post />
			<div className='all-comments-container'>
				All comments will display here
			</div>
		</>
	)
}

export default CompletePost;