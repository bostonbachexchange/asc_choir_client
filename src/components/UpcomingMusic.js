// import { Form, Button, Spinner } from 'react-bootstrap'
// import { useState } from 'react'
// import axios from 'axios'
// import apiUrl from '../apiConfig'
import { Link } from 'react-router-dom'
const UpcomingMusic = () => {
	
	const musicBorder = {
		border: '1px solid rgba(180, 180, 180)',
		backgroundColor: 'white',
		fontSize: 30, 
		padding: 20,
	};
	return (
		<>
		<div className='text-center'>
			<h2 style={{fontSize: 40}}>Upcoming Music <br></br><em>Indigenous People's History Service</em></h2>
			<h5 className='pt-2'><strong>Novemember 13, 2022</strong></h5>
			<div style={musicBorder} ><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/" className='pt-2'>#1013 Open My Heart</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/635a03326de76c4c72db162a"> #360 Here We Have Gathered</Link></div>
			<div style={musicBorder}><strong>Centering Hymn </strong> 
			<br></br>
			<Link to="songs/"> #1052 The Oneness of Everything  Gathered Here</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>piano<a href=""></a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/">#325  Love Makes A Bridge</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
			<hr></hr>
		</div>
		</>
	)
}

export default UpcomingMusic