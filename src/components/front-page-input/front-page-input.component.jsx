import './front-page-input.styles.scss';


const FrontPageInput = ({ labelText, ...allOtherProps }) => {
	return (
		<div className='frontpage-input-field' >
			<span>{ labelText }</span>
			<input {...allOtherProps} />
		</div>
	)
}

export default FrontPageInput;