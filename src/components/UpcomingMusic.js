// import { Form, Button, Spinner } from 'react-bootstrap'
// import { useState } from 'react'
// import axios from 'axios'
// import apiUrl from '../apiConfig'
import { Link } from 'react-router-dom'
const UpcomingMusic = () => {
	const musicBorder = {
		border: '1px solid rgba(180, 180, 180)',
		backgroundColor: 'white', 
	};
	return (
		<>
		<div className='text-center'>
			<h2>Upcoming Music</h2>
			<h5><strong>October 2, 2022</strong></h5>
			<div style={musicBorder}><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/">#11 Chalice Song</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/">336 All My Memories of Love</Link></div>
			<div style={musicBorder}><strong>Centering Music </strong> 
			<br></br>
			<Link to="songs/">1037 We Begin Again in Love</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<>Make Me a Channel of Your Peace (Video)</></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/">Let There Be Peace On Earth</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			<hr></hr>
		</div>
		</>
	)
}

export default UpcomingMusic