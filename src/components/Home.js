// import logo from '../assets/load.gif'
import UpcomingMusic from './UpcomingMusic'
import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const Home = (props) => {
	console.log('props in home', props)
	const { msgAlert, user, background} = props
	return (
		<>
			<Container  className="playFont text-center">
				{/* <img src="https://images.app.goo.gl/88xePH5PCEGWkfhh7"/> */}
				<h1 style={{marginTop: 15}}>All Souls Choir</h1>
				<h3>Braintree</h3>
				<hr></hr>
				{!user?
					<>
						<p>Sign up for a free account to enjoy all our free resources</p>
						<hr></hr>
					</>
				: <UpcomingMusic/> }
				<h3 ><Link to="messageboard">Message Board</Link></h3>
				<p>Share a post with our community. Tell us what songs you are working on or what inspires you. Leave a comment on other posts to encourge and support your fellow choir members.</p>
				<h3><Link to="/songs">Songs</Link></h3>
				<p>Browse through a large array of diverse repertoire located in our <Link to="/songs">song index</Link>. Choose a song from the index to see the composer, authors, lyrics, recordings, or see a video from youtoube. 
				
				{/* If you are learning a song add it to <Link to="/mysongs">My Song List</Link> so you can keep track of what songs you are learning.  */}
				
				{/* <Link to="/create-song">Add a song</Link> to help us grow our resources and share the music that inspires you the most.  */}
				</p>
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
