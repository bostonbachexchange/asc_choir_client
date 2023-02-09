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
	const rehearsalItems = {
		fontSize: '1.7em',
	};

	return (
		<>
		<div className='text-center'>
			<h1>Music For Next rehearsal</h1>
			<li style={rehearsalItems}>
				<a href='https://www.youtube.com/watch?v=FcBdkOX1nnA'>The Gift of Love</a>
			</li>
			<li style={rehearsalItems}>
				<Link to='songs/'>Like a Bridge Over Troubled Waters</Link>
			</li>
		</div>
		<hr></hr>			
		<div className='text-center pt-5'>
			<h2 style={{fontSize: 40}}><em>Sunday Service</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>February 9, 2023</strong></h5>
			<div style={musicBorder} ><strong>Prelude: Jacob </strong>
			<br></br>
			<>The Man I Love, Gerswhin</></div>
			<div style={musicBorder}><strong>Chalice Song: Choir</strong> 
			<br></br>
			<Link to="songs/">#12 May We Be Open to This Light</Link></div>
			<div style={musicBorder}><strong>Opening Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/"> #21 For the Beauty of the Earth</Link></div>
			<div style={musicBorder}><strong>Centering Music: Beau</strong> 
			<br></br>
			<a href="https://vimeo.com/489421828"> Pipa Language || Lifted in Love by Lea Morris</a></div>
			<div style={musicBorder}><strong>Offertory: Choir </strong> 
			<br></br>
			<Link to='songs/'>The Gift of Love, arr Hal H. Hopson</Link></div>			
			<div style={musicBorder}><strong>Closing Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/">#1067 Mother Earth, Beloved Garden</Link></div>
			<div style={musicBorder}><strong>Postlude: Jacob</strong> 
			<br></br>
			<>Somebody Loves Me, Gershwin</></div>
		</div>
		</>
	)
}

export default UpcomingMusic