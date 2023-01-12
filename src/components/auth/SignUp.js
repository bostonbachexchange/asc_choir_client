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
    const [codeDisplay, setCodeDisplay] = useState('block')
    const [access, setAccess] = useState('none')

    const navigate = useNavigate()

    const onCheckAccess = (event) => {
        event.preventDefault()

        const checkAccess = (access) => {
            console.log('checkAccess ran. access:', access)
            if (access === 'BeethovenIsAwesome') {
                setAccess('block')
                setCodeDisplay('none')
            }
        }

        checkAccess(accessCode, access, setAccess, setAccessCode)
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
        <div className='row pt-4 pb-4 playFont' style={{display: codeDisplay, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
            <div className='col-sm-10 col-md-8 mx-auto'>
            <h1 className='t-5 text-center'>Create an Account</h1>
            <hr></hr>
            <p className='text-center m-3 p-2 fs-5'>Welcome to the All Souls Church Choir website! We're so glad you're interested in singing with us. To ensure the safety and security of our choir members, we have a simple signup process that verifies your identity through an <strong>access code</strong>. If you haven't received an access code yet, please reach out to our Music Director, <strong>Jacob Clapper</strong>, at <a href='mailto:clapperpianist@gmail.com'>clapperpianist@gmail.com</a>. Once you have your access code, simply enter it in the space provided and follow the prompts to create your account. Once you have an account, you can log in with your email and password. If you have any problems or questions, please don't hesitate to reach out to us for help. We're here to make the experience as smooth and enjoyable as possible</p>
            <hr></hr>
                <Form onSubmit={onCheckAccess}>
                    <Form.Group controlId='accessCode' className='m-2' >
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
        </div>
        <div className='row playFont' style={{display: access, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
            <div className='col-sm-10 col-md-8 mx-auto mt-0'>
                <h1 className='pt-3 text-center'>Sign Up</h1>
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
                    <div className='text-center pb-3'>
                        <Button className="m-2" variant='primary' type='submit'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
        </>
    )

}

export default SignUp