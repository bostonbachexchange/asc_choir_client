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
	const dateHeading = {
		fontSize: "1.5em", 
		padding: 20,
	};
	return (
		<>
		<div className='text-center'>
			<h2 style={{fontSize: 40}}><em>Guest Minister Florence Caplow</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>Novemember 20, 2022</strong></h5>
			<div style={musicBorder} ><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/" className='pt-2'>#1013 Open My Heart</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/635a03326de76c4c72db162a"> #368 Gathered Here</Link></div>
			<div style={musicBorder}><strong>Centering Hymn </strong> 
			<br></br>
			<Link to="songs/"> #1009 Meditation on Breathing</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>piano<a href=""></a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/">#325 Love Makes A Bridge</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
		</div>
		<div className='text-center m-5'>
			<h2 style={{fontSize: 40}}><em>First Week of Advent</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>Novemember 27, 2022</strong></h5>
			<div style={musicBorder} ><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/" className='pt-2'>#1013 Open My Heart</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/"> #1020 Woyaya</Link></div>
			<div style={musicBorder}><strong>Centering Hymn </strong> 
			<br></br>
			<Link to="songs/"> #1008 When Our Heart Is in a Holy Place</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>piano<a href=""></a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/">#1028 The Fire of Commitment</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
			<hr></hr>
		</div>
		</>
	)
}

export default UpcomingMusic