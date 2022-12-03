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
				<Link to='songs/638aa63f4b20cd06ee1fd04e'>Sing with Joy, Sing Noel!</Link>
			</li>
		</div>
		<hr></hr>
		<div className='text-center'>
			<h2 style={{fontSize: 40}}><em>Sunday Service</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>December 11, 2022</strong></h5>
			<div style={musicBorder} ><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/" className='pt-2'>Joy Introit</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/"> #TBD</Link></div>
			<div style={musicBorder}><strong>Centering Hymn </strong> 
			<br></br>
			<Link to="songs/63786f9608d576294cc6d5de"> TBD</Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>piano<a href=""></a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/63786f9608d576294cc6d5e2"></Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
		</div>
		<div className='text-center m-5'>
			<h2 style={{fontSize: 40}}><em>Guest Minister</em></h2>
			<h5 className='pt-2' style={dateHeading}><strong>December 18, 2022</strong></h5>
			<div style={musicBorder} ><strong>Prelude </strong>
			<br></br>
			<>piano</></div>
			<div style={musicBorder}><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/" className='pt-2'>Joy Introit</Link></div>
			<div style={musicBorder}><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/">TBD</Link></div>
			<div style={musicBorder}><strong>Centering Hymn </strong> 
			<br></br>
			<Link to="songs/63786f9608d576294cc6d5dd">TBD </Link></div>
			<div style={musicBorder}><strong>Offertory </strong> 
			<br></br>
			<div>piano<a href=""></a></div></div>
			<div style={musicBorder}><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/63786f9608d576294cc6d5e3">TBD</Link></div>
			<div style={musicBorder}><strong>Postlude </strong>
			<br></br>
			<>piano</></div>			
			<hr></hr>
		</div>
		</>
	)
}

export default UpcomingMusic