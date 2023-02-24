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
			{/* <div className='text-center'>
				<h1>Music For Next rehearsal</h1>
				<li style={rehearsalItems}>
					<a href='https://www.youtube.com/watch?v=FcBdkOX1nnA'>The Gift of Love</a>
				</li>
				<li style={rehearsalItems}>
					<Link to='songs/'>There is a Love</Link>
				</li>
			</div>
			<hr></hr>			 */}
			<div className='text-center pt-5'>
				<h2 style={{fontSize: 40}}>
					<em>Sunday Service</em>
				</h2>
				<h5 className='pt-2' style={dateHeading}>
					<strong>February 26, 2023</strong>
				</h5>
				<div style={musicBorder} >
					<strong>Prelude: Jacob</strong>
					<br></br>
					<>#149 Lift Every Voice and Sing</>
				</div>
				<div style={musicBorder}>
					<strong>Chalice Song: Choir</strong> 
					<br></br>
					<Link to="songs/">#12 May We Be Open to This Light</Link>
					</div>
				<div style={musicBorder}>
					<strong>Opening Hymn: Choir</strong> 
					<br></br>
					<Link to="songs/">#108 My Life Flows On</Link>
				</div>
				<div style={musicBorder}>
					<strong>Centering Music: Choir</strong> 
					<br></br>
					<a href="https://www.uua.org/worship/words/music/there-love">There is a Love</a>
				</div>
				<div style={musicBorder}>
					<strong>Offertory: Video </strong> 
					<br></br>
					<Link to='songs/'>Sweet Honey and the Rock</Link>
				</div>			
				<div style={musicBorder}>
					<strong>Closing Hymn: Choir</strong> 
					<br></br>
					<Link to="songs/">#1018 Come and Go With Me </Link></div>
				<div style={musicBorder}>
					<strong>Postlude: Jacob</strong> 
					<br></br>
					<>Organ Grinder Blues</>
				</div>
			</div>
		</>
	)
}

export default UpcomingMusic