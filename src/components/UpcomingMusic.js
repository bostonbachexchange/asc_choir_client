import { Form, Button, Spinner } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import { Link } from 'react-router-dom'

const HomeTwo = ({ msgAlert }) => {
	const [ selected, setSelected ] = useState(null)
	const [ upload, setUpload ] = useState({})
	const [ loading, setLoading ] = useState(null)

	const handleChange = (e) => {
		e.preventDefault()
		setSelected(e.target.files[0])
	}

	const handleSubmit =(e) => {
		e.preventDefault()
		setLoading(true)
		const data = new FormData()
		data.append('upload', selected)
		axios({
			url: `${apiUrl}/uploads`,
			method: 'POST',
			//short for data: data
			data
		})
			.then(res => {
				setUpload(res.data.upload)
				msgAlert('Image upload success', 'success')
			})
			.then(() => setLoading(false))
			.catch(err => {
				msgAlert('Error uploading image', 'error')
			})
	}
	return (
		<>
			<h2>Upcoming Service Music</h2>
			<ul style={{ listStyleType: "none"}}>
				<li><strong>Chalice Song </strong>
				<Link to="songs/6324cedc896a0ce487570763">389 Gathered Here</Link></li>
				<li><strong>Opening Hymn </strong> 
				<Link to="songs/6324cedc896a0ce487570760">188 Come, Come, Whoever You Are</Link></li>
				<li><strong>Centering Music </strong> 
				<Link to="songs/6324cedc896a0ce487570765">1058 Be Ours a Religion</Link></li>
				<li><strong>Offertory </strong> 
				<Link to="songs/6324cedc896a0ce487570761">318 We Would Be One</Link></li>
				<li><strong>Closing Hymn </strong> 
				<Link to="songs/6324cedc896a0ce487570764">354 We Laugh We Cry</Link></li>
			</ul>
			<hr></hr>
		</>
	)
}

export default HomeTwo