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
				<Link to='songs/6398f71d966ec532bd94ad3a'>Sing with Joy, Sing Noel!</Link>
			</li>
			<li style={rehearsalItems}>
				<Link to='songs/'>Let There Be Peace on Earth</Link>
			</li>
		</div>
		<hr></hr>			
		<div className='text-center pt-5'>
			<h2 style={{fontSize: 40}}><em>Christmas Eve</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>December 24, 2022</strong></h5>
			<div style={musicBorder} ><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Hymn </strong> 
			<br></br>
			<Link to="songs/"> #253 O Come All Ye Faithful</Link></div>
			<div style={musicBorder}><strong>Solstice </strong> 
			<br></br>
			<Link to="songs/"> #235 Deck the Halls</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<Link to='songs/6398f71d966ec532bd94ad3a'>Sing with Joy, Sing Noel!</Link></div>			
			<div style={musicBorder}><strong>Kwanzaa </strong> 
			<br></br>
			<Link to="songs/">Let There Be Peace on Earth</Link></div>
			<div style={musicBorder}><strong>Christmas</strong> 
			<br></br>
			<Link to="songs/">#231 Angels We Have Heard on High</Link></div>
			<div style={musicBorder}><strong>Hanukkah</strong> 
			<br></br>
			<Link to="songs/">#221 Light One Candle</Link></div>
			<div style={musicBorder}><strong>UU</strong> 
			<br></br>
			<Link to="songs/">#1051 We Are</Link></div>
			<div style={musicBorder}><strong>UU</strong> 
			<br></br>
			<Link to="songs/">#251 Silent Night</Link></div>
		</div>
		</>
	)
}

export default UpcomingMusic