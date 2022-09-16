// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const SignUp = (props) => {   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [accessCode, setAccessCode] = useState('')
    const [access, setAccess] = useState('none')

    const navigate = useNavigate()

    const onCheckAccess = (event) => {
        event.preventDefault()

        const checkAccess = (access) => {
            console.log('checkAccess ran. access:', access)
            if (access === 'BeethovenIsAwesome') {
                setAccess('block')
            }
        }

        checkAccess(accessCode, access, setAccess)
    }

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props
        const credentials = {email, password, passwordConfirmation}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <>
        <div className='m-2'>
        <h1>Enter Code</h1>
        <p>To create an account, enter the access code given to you by your music director.</p>
            <Form onSubmit={onCheckAccess}>
                <Form.Group controlId='accessCode' className='m-2'>
                    <Form.Label>Access Code</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        name='accessCode'
                        value={accessCode}
                        placeholder='Enter Access Code'
                        onChange={e => setAccessCode(e.target.value)}
                    />
                </Form.Group>
                <Button className="m-2" variant='primary' type='submit'>
                        Submit
                    </Button>
            </Form>
        </div>
        <div className='row playFont' style={{display: access}}>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign Up</h3>
                <hr></hr>
                <Form onSubmit={onSignUp}>
                    <Form.Group controlId='email' className="m-2">
                        <Form.Label>Email address</Form.Label>
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
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation' className="m-2">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Group>
                    <Button className="m-2" variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        </>
    )

}

export default SignUp