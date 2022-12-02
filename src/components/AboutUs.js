import { Card } from "react-bootstrap"
import aboutUsPicture from '../images/girlwriting.jpg'


const AboutUs = () => {
    const aboutUsStyle = {
        fontSize: '21px',
        color: 'black',
    }

    return (
        <>
            <Card style={aboutUsStyle} className='playFont'>
                <Card.Header className="text-center p-6" style={{fontSize: '32px'}}><strong>All Souls Choir</strong>
                </Card.Header>
                <Card.Text className="m-4">We are a small, but mighty, volunteer chorus. No matter what your skill level or your experience, you are welcome to sing with us. The best way to find our rehearsal schedule is to sign up for an account on our site or contact our music director.</Card.Text>
            </Card>
            <Card>
                <Card.Header><h2>Music Director</h2></Card.Header>
                <Card.Body >
                    <Card.Text>Jacob Clapper</Card.Text>
                    <Card.Text><strong>email: </strong>clapperpianist@gmail</Card.Text>
                </Card.Body>
            </Card>
        
        </>
    )
}

export default AboutUs