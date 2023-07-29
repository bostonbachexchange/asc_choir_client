// import logo from '../assets/load.gif'
import ServicesIndex from './service/ServicesIndex'
import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import ChaliceImage from '../images/ChaliceImage'
import headphones from '../images/headphones.jpg'
import messageboard from '../images/messageboard.jpg'
import messageboardphoto from '../images/pexels-pixabay-206447.jpg'
import NewsApp from './tesla'
const docRoot = document.getElementById('root')
docRoot.style.backgroundImage = "url(" + messageboardphoto + ")";
docRoot.style.backgroundSize = "cover";

const Home = (props) => {
	const {user} = props
	return (
		<>
			<Container  className="playFont text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}} >
				{/* <NewsApp></NewsApp> */}
				<ChaliceImage></ChaliceImage>
				<h1 style={{marginTop: 15}}>Music for Sunday Services</h1>
				<p className='fs-4'>Take a look at the music for our upcoming and past services</p>
				<hr></hr>
				<ServicesIndex/>
				{!user?
					<>
						<p style={{fontSize: "1.5em"}}><Link to="/sign-up">Create an account</Link> and <Link to="/sign-in">Login</Link> to enjoy all our resources</p>
						<hr></hr>
					</>
				: 	<>
						<h2 ><Link to="messageboard"><strong>Choir Blog</strong></Link></h2>
						<div className='pb-3' style={{display: 'flex'}}>		
							<p className='m-4' style={{display: "inline-block", textAlign: 'left', fontSize: 23}}>Share a post with our community. Tell us what songs you are working on or what inspires you. Leave a comment on other posts to encourge and support your fellow choir members.</p>
							<img style={{height: 130, display: "inline-block"}} src={messageboard}></img>
							<hr></hr>
						</div>
						<h2><Link to="/songs"><strong>Music</strong></Link></h2>
						<div className='pb-3' style={{display: 'flex'}}>
							<img style={{height: 100, display: "inline-block"}} src={headphones}></img>
							<p className='ms-4' style={{display: "inline-block", textAlign: 'left', fontSize: 23}}>Browse through a large array of diverse repertoire located in our <Link to="/songs">music database</Link>. Choose a song from the index to see the composer, authors, lyrics, recordings, or see a video from youtoube. 
							</p>
						</div>
					</>
				}
			</Container>
			{user?
				<Card.Footer style={{backgroundColor: "white", marginTop: 70,}}>
					<small>
						<p>Update your personal account information under the <strong>My Account</strong> tab. <Link to="change-password">Change your password</Link> and keep it in a secure place. Keep your account secure. Don't share your password with anyone.</p> 
					</small>
				</Card.Footer>
			: null }
		</>
	)
}

export default Home
