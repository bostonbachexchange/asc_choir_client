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
				<Link to='songs/63b71f9270bb4f80c8b7a41c'>Like a Mighty Stream</Link>
			</li>
		</div>
		<hr></hr>			
		<div className='text-center pt-5'>
			<h2 style={{fontSize: 40}}><em>Sunday Service</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>January 8, 2023</strong></h5>
			<div style={musicBorder} ><strong>Prelude: Jacob </strong>
			<br></br>
			<>Blue in Green</></div>
			<div style={musicBorder}><strong>Chalice Song: Choir</strong> 
			<br></br>
			<Link to="songs/63b71f9270bb4f80c8b7a41b">Flame Welcome All</Link></div>
			<div style={musicBorder}><strong>Opening Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/63b71f9270bb4f80c8b7a42b"> # 325 Love Makes a Bridge</Link></div>
			<div style={musicBorder}><strong>Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/63b71f9270bb4f80c8b7a409"> # 95 There Is More Love Somewhere</Link></div>
			<div style={musicBorder}><strong>Offertory: Choir </strong> 
			<br></br>
			<Link to='songs/63b71f9270bb4f80c8b7a41c'>Like a Mighty Stream</Link></div>			
			<div style={musicBorder}><strong>Closing Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/63b71f9270bb4f80c8b7a40a"># 151 I Wish I Knew How</Link></div>
			<div style={musicBorder}><strong>Postlude: Jacob</strong> 
			<br></br>
			<>Con Alma</></div>
		</div>
		</>
	)
}

export default UpcomingMusic