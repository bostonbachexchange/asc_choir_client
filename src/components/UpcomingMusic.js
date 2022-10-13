// import { Form, Button, Spinner } from 'react-bootstrap'
// import { useState } from 'react'
// import axios from 'axios'
// import apiUrl from '../apiConfig'
import { Link } from 'react-router-dom'
const UpcomingMusic = () => {
	const musicBorder = {
		border: '1px solid rgba(180, 180, 180)',
		backgroundColor: 'white',
		fontSize: 23, 
	};
	return (
		<>
		<div className='text-center'>
			<h2 style={{fontSize: 40}}>Upcoming Music</h2>
			<h5 className='pt-2'><strong>October 12, 2022</strong></h5>
			<div style={musicBorder}><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/6347903bf24279cee6b85853">#11 Chalice Song</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/6347903bf24279cee6b85858"> #1023 Building Bridges</Link></div>
			<div style={musicBorder}><strong>Centering Music </strong> 
			<br></br>
			<Link to="songs/6347903bf24279cee6b8585a"> #1019  Everything Possible</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>TBD<a href=""></a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/6347903bf24279cee6b85859">#1014  Answering the Call of Love</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
			<hr></hr>
		</div>
		</>
	)
}

export default UpcomingMusic