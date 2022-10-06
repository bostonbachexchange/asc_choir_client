// import logo from '../assets/load.gif'
import UpcomingMusic from './UpcomingMusic'
import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import ChaliceImage from '../images/ChaliceImage'
import headphones from '../images/headphones.jpg'
import messageboard from '../images/messageboard.jpg'

const Home = (props) => {
	console.log('props in home', props)
	const { msgAlert, user, background} = props
	return (
		<>
			<Container  className="playFont text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}} >
				<ChaliceImage></ChaliceImage>
				<h1 style={{marginTop: 15}}>All Souls Choir</h1>
				<h3>Braintree</h3>
				<hr></hr>
				<UpcomingMusic/> 
				{!user?
					<>
						<p><Link to="/sign-up">Create an account</Link> and <Link to="/sign-in">Login</Link> to enjoy all our resources</p>
						<hr></hr>
					</>
				: 	<>
						<img style={{width: 130}} src={messageboard}></img>
						<h3 ><Link to="messageboard"><strong>Message Board</strong></Link></h3>
						<p>Share a post with our community. Tell us what songs you are working on or what inspires you. Leave a comment on other posts to encourge and support your fellow choir members.</p>
						<hr></hr>
						<img style={{height: 100}} src={headphones}></img>
						<h3><Link to="/songs"><strong>Songs</strong></Link></h3>
						<p>Browse through a large array of diverse repertoire located in our <Link to="/songs">song index</Link>. Choose a song from the index to see the composer, authors, lyrics, recordings, or see a video from youtoube. 
						
						{/* If you are learning a song add it to <Link to="/mysongs">My Song List</Link> so you can keep track of what songs you are learning.  */}
						
						{/* <Link to="/create-song">Add a song</Link> to help us grow our resources and share the music that inspires you the most.  */}
						</p>
					</>
				}
			</Container>
			{user?
			<>
			<Card.Footer style={{backgroundColor: "white", marginTop: 70}}>
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
