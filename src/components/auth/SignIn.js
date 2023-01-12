import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = (props) => {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		email: '',
	// 		password: '',
	// 	}
	// }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

	// handleChange = (event) =>
	// 	this.setState({
	// 		[event.target.name]: event.target.value,
	// 	})

	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props

        const credentials = {email, password}

		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/messageboard'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <div className='row pt-0 pb-2' style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}} >
            <div className='col-sm-10 col-md-8 mx-auto mt-4 playFont'>
                <h1 className='text-center' style={{fontSize: 40}}>Login</h1>
                <hr></hr>
                <p className='m-2 p-2 text-center fs-5'>Welcome back to the All Souls Church Choir website! We're glad you're here. Please enter your <strong>email</strong> and <strong>password</strong> in the fields provided to access all the features of the site. If you've forgotten your password or experience any problems logging in, please don't hesitate to contact our <strong>Jacob Clapper</strong>, at <a href='mailto:clapperpianist@gmail.com'>clapperpianist@gmail.com</a> for assistance.</p>
                <hr></hr>

                <Form onSubmit={onSignIn}>
                    <Form.Group controlId='email' className="m-2">
                        <Form.Label><strong>Email address</strong></Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password' className="m-2">
                        <Form.Label><strong>Password</strong></Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button className='m-2' variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn
