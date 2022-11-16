import { Card } from "react-bootstrap"

const AboutUs = () => {
    const aboutUsStyle = {
        fontSize: '21px',
        color: 'black'
    }
    return (
        <>
            <Card style={aboutUsStyle}>
                <Card.Header className="text-center p-6" style={{fontSize: '32px'}}><strong>Our Choir</strong></Card.Header>
                <Card.Body className="m-4">We are a small, but mighty, volunteer chorus. No matter what your skill level or your experience, you are welcome to sing with us. The best way to find our rehearsal schedule is to sign up for an account on our site or contact our music director.</Card.Body>
                <Card.Header><h2>Music Director</h2></Card.Header>
                <Card.Body style={{height: 'auto'}}>
                    <p>Jacob Clapper</p>
                    <p><strong>email: </strong>clapperpianist@gmail</p>
                    </Card.Body>

            </Card>
        </>
    )
}

export default AboutUs