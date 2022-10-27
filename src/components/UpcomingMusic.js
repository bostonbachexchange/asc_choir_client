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
			<h2 style={{fontSize: 40}}>Upcoming Music <br></br><em>Samhain</em></h2>
			<h5 className='pt-2'><strong>October 30, 2022</strong></h5>
			<div style={musicBorder} ><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/635a03326de76c4c72db1622" className='pt-2'>#11 Chalice Song</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/635a03326de76c4c72db162a"> #57 How Beautiful the March of Days</Link></div>
			<div style={musicBorder}><strong>Calling the Directions </strong> 
			<br></br>
			<Link to="songs/635a03326de76c4c72db161c"> #389  Gathered Here</Link></div>
			<div style={musicBorder}><strong>Ritual </strong> 
			<br></br>
			<Link to="songs/635a03326de76c4c72db162b"> # 387 The Earth, Water, Fire, Air</Link></div>
			<div style={musicBorder}><strong>Centering Hymn </strong> 
			<br></br>
			<Link to="songs/635a03326de76c4c72db162c"> #1051 We Are</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>TBD<a href=""></a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/635a03326de76c4c72db162d">#1024  Do When the Spirit Says Do</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
			<hr></hr>
		</div>
		</>
	)
}

export default UpcomingMusic