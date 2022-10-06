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
            <h1 className='t-5 text-center'>Enter Code</h1>
            <p className='text-center'>To create an account, enter the access code given to you by your music director.</p>
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