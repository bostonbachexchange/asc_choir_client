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
		<div className='text-center'>
			<h2>Upcoming Music</h2>
			<h5>September 25, 2022</h5>
			<div><strong>Chalice Song </strong>
			<br></br>
			<Link to="songs/">389 Gathered Here</Link></div>
			<div><strong>Opening Hymn </strong> 
			<br></br>
			<Link to="songs/">216 Hashiveinu</Link></div>
			<div><strong>Centering Music </strong> 
			<br></br>
			<Link to="songs/">1037 We Begin Again in Love</Link></div>
			<div><strong>Offertory </strong> 
			<br></br>
			<Link to="songs/">TBD</Link></div>
			<div><strong>Closing Hymn </strong> 
			<br></br>
			<Link to="songs/">1011 Return Again</Link></div>
			<hr></hr>
		</div>
		</>
	)
}

export default HomeTwo