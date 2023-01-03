// import logo from '../assets/load.gif'
import UpcomingMusic from './UpcomingMusic'
import Contacts from './admin/Contacts'

import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import ChaliceImage from '../images/ChaliceImage'

import headphones from '../images/headphones.jpg'
import messageboard from '../images/messageboard.jpg'
import messageboardphoto from '../images/pexels-pixabay-206447.jpg'
const docRoot = document.getElementById('root')
docRoot.style.backgroundImage = "url(" + messageboardphoto + ")";
docRoot.style.backgroundSize = "cover";

const Home = (props) => {
	console.log('props in home', props)
	const { msgAlert, user} = props
	return (
		<>
			<Container  className="playFont text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}} >
				<ChaliceImage></ChaliceImage>
				<h1 style={{marginTop: 15}}>All Souls Choir</h1>
				<h3>Braintree</h3>
				<iframe src={"https://content.123cards.com/ecards/98775/hls/christmas-classic-sweet-christmas-ecards-98775-video-master-1671136335.m3u8"}></iframe>
				<hr></hr>
				<UpcomingMusic/> 
				{!user?
					<>
						<p style={{fontSize: "1.5em"}}><Link to="/sign-up">Create an account</Link> and <Link to="/sign-in">Login</Link> to enjoy all our resources</p>
						<hr></hr>
					</>
				: 	<>
						<h2 ><Link to="messageboard"><strong>Message Board</strong></Link></h2>
						<div className='pb-3' style={{display: 'flex'}}>		
							<p className='m-4' style={{display: "inline-block", textAlign: 'left', fontSize: 23}}>Share a post with our community. Tell us what songs you are working on or what inspires you. Leave a comment on other posts to encourge and support your fellow choir members.</p>
							<img style={{height: 130, display: "inline-block"}} src={messageboard}></img>
							<hr></hr>
						</div>
						<h2><Link to="/songs"><strong>Songs</strong></Link></h2>
						<div className='pb-3' style={{display: 'flex'}}>
							<img style={{height: 100, display: "inline-block"}} src={headphones}></img>
							<p className='ms-4' style={{display: "inline-block", textAlign: 'left', fontSize: 23}}>Browse through a large array of diverse repertoire located in our <Link to="/songs">song index</Link>. Choose a song from the index to see the composer, authors, lyrics, recordings, or see a video from youtoube. 
							</p>
						</div>
					</>
				}
			</Container>
			{user?
			<>
			<Card.Footer style={{backgroundColor: "white", marginTop: 70,}}>
			<small>
				<p>Update your personal account information under the <strong>My Account</strong> tab. <Link to="change-password">Change your password</Link> and keep it in a secure place. Keep your account secure. Don't share your password with anyone.</p> 
			</small>
		</Card.Footer>
		</>
		: null }
		</>
	)
}

export default Home
