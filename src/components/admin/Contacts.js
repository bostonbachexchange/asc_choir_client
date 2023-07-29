import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import messages from '../shared/AutoDismissAlert/messages'
import dateFormat, { masks } from "dateformat";
import { getUserAccounts } from "../../api/admin"
import Container from 'react-bootstrap/Container';
import { Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profPicture from '../../images/profile-default.png'
import apiUrl from '../../apiConfig';

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
}


const Contacts = (props) => {
    const [accounts, setAccounts] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    
    useEffect(() => {
        getUserAccounts()
            // .then(res => console.log('res.data.accounts', res.data.accounts))
            .then(res => setAccounts(res.data.accounts))
            .catch(err => {
                console.log('there wass an error', err)
                msgAlert({
                    heading: 'Error Getting Accounts',
                    message: messages.getMessageFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])
    if (error) {
        return <p>Error!</p>
    }
    if (!accounts) {
        return <LoadingScreen />
    } else if (accounts.length === 0) {
        return  <>  
                    <Card className='text-center m-4 w-2'>
                        <p className='m-0'><em>No Accounts Yet</em></p>
                    </Card>
                </>
    }
    const emailList = accounts.map((contact, index) => (
        <Fragment key={contact._id}>
          {contact.email}
          {index !== accounts.length - 1 ? ', ' : ''}
        </Fragment>
      ));
      
    console.log("Email List??? ", emailList)

    const useraccounts = accounts.map(account =>
        <>
{/* {const profilePictureSrc =
account.profilePicture === '/path/to/default/profile-image.png'
? profPicture
: `${apiUrl}/${account.profilePicture}`;    
} */}
        <Card>
                <img className='text-center d-flex m-auto' style={{width: '150px', height: '150px',}} src={account.profilePicture === 'default'
? profPicture
: `${apiUrl}/${account.profilePicture}`}></img>
                <h1 className='text-center d-flex m-auto'>{account.firstName} {account.lastName}</h1>
                <Container className='mt-3 p-0 rounded mb-3' style={{width: '100%', boxShadow: '3px 3px 3px grey', border: '3px solid black'}}>
                    {/* <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Name</Col>
                        <Col md={6}  style={{fontSize: '1.4em'}}>{account.firstName} {account.lastName}</Col>
                    </Row> */}
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Email</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{account.email}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Phone</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{account.phoneNumber}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Vocal Range</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{account.vocalRange}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Prefered Contact</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{account.preferredContact}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Prefered Pronouns</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{account.pronouns}</Col>
                    </Row>
                </Container>
                </Card>
        </>
    )
    
    return (
        <>
            <Card className='bg-light playFont text-center'>
                <h1 className=' mb-0 pt-1' style={{padding: 15}}>Member Database</h1>
                <p>Account information for active members of the application</p>
                <div className='p-1'>
                    <b className='p-2'>Email list: </b>{emailList}
                </div>
            </Card>
            <div className=' playFont'>
                {useraccounts}
            </div>
        </>
    )
}

export default Contacts