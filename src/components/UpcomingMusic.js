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
			<h5 className='pt-2'><strong>October 9, 2022</strong></h5>
			<div style={musicBorder}><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/63379bfad6d1a05912c1355f">#11 Chalice Song</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/6341090a9a5e621cb286fd30"> #347 Gather the Spirit</Link></div>
			<div style={musicBorder}><strong>Centering Music </strong> 
			<br></br>
			<Link to="songs/6341090a9a5e621cb286fd32"> #1069  Ancient Mother</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>Music Video <a href="https://www.youtube.com/watch?v=YhcgX1VHsgk">https://www.youtube.com/watch?v=YhcgX1VHsgk</a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/6341090a9a5e621cb286fd31">#121  We’ll Build a Land</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
			<hr></hr>
		</div>
		</>
	)
}

export default UpcomingMusic