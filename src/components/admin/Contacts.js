import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import messages from '../shared/AutoDismissAlert/messages'
import dateFormat, { masks } from "dateformat";
import { getUserAccounts } from "../../api/admin"

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

    const useraccounts = accounts.map(account =>
        <>
        {console.log('account', account)}

            <Card key={account._id} className='text-center m-auto playFont' style={{width: "75%", backgroundColor: "rgba(255, 255, 255, 0.95)"}}>
                {/* <Card.Header style={{fontSize: '1.5em'}}><strong>{useraccounts.title}</strong></Card.Header> */}
                {/* <Card.Footer> 
                    from <em>{messagepost.owner.email}</em>
                </Card.Footer> */}

                <Card.Body className='p-1'>
                    <Card.Text>
                        <div className='text-center'><span> {account.email}</span></div>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </>
    )
    
    return (
        <>
            <Card className='bg-light'>

                <h1 className='playFont text-center mb-0 pt-0' style={{padding: 15}}>Email</h1>  
            </Card>
            <div className='m-3 playFont'>{useraccounts}</div>
            <br></br>
        </>
    )
}

export default Contacts