import React from 'react'
import '../components/SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import { Tooltip } from '@material-ui/core'


function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage__filter'>
				<Tooltip title='Open search filters'>
				<TuneOutlinedIcon/>
				</Tooltip>
				<h2>FILTER</h2>




			</div>
			<hr/>
		</div>
	)
}

export default SearchPage
