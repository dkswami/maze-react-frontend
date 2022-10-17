import './reports.styles.scss';
import { ReactComponent as ReportsIcon } from '../../assets/reports.svg'


const Reports = () => {
	return (
		<div className='reports-container'>
			<form className='report'>
				<span className='reports-icon'>
					<ReportsIcon />
				</span>
				<span className='report-title'>All Users</span>
				<span className='report-content'>Posts, comments and likes count </span>
				<div className='download-type'>
					<div>
						<input type='radio' id='excel' name="download-type-1" value='Excel' />
						<label for="excel">Excel</label>
					</div>
					<div>
						<input type='radio' id='csv' name="download-type-1" value='csv' />
						<label for="csv">.CSV</label>
					</div>
				</div>
				<button className='download-btn'>Download</button>
			</form>

			<form className='report'>
				<span className='reports-icon'>
					<ReportsIcon />
				</span>
				<span className='report-title'>All Users</span>
				<span className='report-content'>Having more than 10 posts users</span>
				<div className='download-type'>
					<div>
						<input type='radio' id='excel' name="download-type-2" value='Excel' />
						<label for="excel">Excel</label>
					</div>
					<div>
						<input type='radio' id='csv' name="download-type-2" value='csv' />
						<label for="csv">.CSV</label>
					</div>
				</div>
				<button className='download-btn'>Download</button>
			</form>

			<form className='report'>
				<span className='reports-icon'>
					<ReportsIcon />
				</span>
				<span className='report-title'>Postwise Report</span>
				<span className='report-content'>Title/description, comments, likes </span>
				<div className='download-type'>
					<div>
						<input type='radio' id='excel' name="download-type-3" value='Excel' />
						<label for="excel">Excel</label>
					</div>
					<div>
						<input type='radio' id='csv' name="download-type-3" value='csv' />
						<label for="csv">.CSV</label>
					</div>
				</div>
				<button className='download-btn'>Download</button>
			</form>
		</div>
	)
}

export default Reports