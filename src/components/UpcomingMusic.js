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
				<Link to='songs/'>Like a Bridge Over Troubled Waters</Link>
			</li>
		</div>
		<hr></hr>			
		<div className='text-center pt-5'>
			<h2 style={{fontSize: 40}}><em>Sunday Service</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>January 29, 2023</strong></h5>
			<div style={musicBorder} ><strong>Prelude: Jacob </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song: Choir</strong> 
			<br></br>
			<Link to="songs/63b71f9270bb4f80c8b7a41b">Flame Welcome All</Link></div>
			<div style={musicBorder}><strong>Opening Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/"> # 346  Come Sing a Song With Me</Link></div>
			<div style={musicBorder}><strong>Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/63b71f9270bb4f80c8b7a415"> # 1058  Be Ours a Religion</Link></div>
			<div style={musicBorder}><strong>Offertory: Choir </strong> 
			<br></br>
			<Link to='songs/'># 1057  Go Lifted Up</Link></div>			
			<div style={musicBorder}><strong>Closing Hymn: Choir</strong> 
			<br></br>
			<Link to="songs/63b71f9270bb4f80c8b7a41f"># 121  We’ll Build a Land</Link></div>
			<div style={musicBorder}><strong>Postlude: Aarnav Tuladhar</strong> 
			<br></br>
			<>Maple Leaf Rag</></div>
		</div>
		</>
	)
}

export default UpcomingMusic