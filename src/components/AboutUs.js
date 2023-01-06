import { Fragment } from "react"
import { Card, Image } from "react-bootstrap"
import plaque from '../images/asc_plaque.jpg'


const AboutUs = () => {
    const aboutUsStyle = {
        fontSize: '21px',
        color: 'black',
    }
    const descriptionContainer = {
        display: 'flex',
    }
    return (
        <>
            {/* <Card style={aboutUsStyle} className='playFont'>
                <Card.Header className="text-center p-6" style={{fontSize: '32px'}}><strong>All Souls Choir</strong>
                </Card.Header>
                <div class='descriptionContainer'>
                    <div  style={{flex: '6'}}>
                        <p className="m-4">The All Souls Choir is an SATB group comprising of members of All Souls Church who are amateur singers from many different backgrounds. Directed by Jacob Clapper, the Choir meets weekly on Sunday Mornings and  afternoons in the church.We are a small, but mighty, volunteer chorus. No matter what your skill level or your experience, you are welcome to sing with us. The best way to find our rehearsal schedule is to sign up for an account on our site or contact our music director.</p>
                    </div>
                    <div  style={{flex: '3'}}>
                        <img src={plaque} style={{width: '100%'}}/>
                    </div>
                </div> 
            </Card> */}
            <Card style={aboutUsStyle} className='playFont'>
                <div className='aboutUs'>
                    <div style={{flex: '6'}}>
                        <h2 className="mt-3 ps-4" style={{fontSize: '32px'}}><strong>All Souls Choir</strong>
                        </h2>
                        <p className="m-auto p-4">The All Souls Choir is an SATB group comprising of members of All Souls Church who are amateur singers from many different backgrounds. Directed by Jacob Clapper, the Choir meets weekly on Sunday Mornings and  afternoons in the church.We are a small, but mighty, volunteer chorus. No matter what your skill level or your experience, you are welcome to sing with us. The best way to find our rehearsal schedule is to sign up for an account on our site or contact our music director.</p>
                        <br></br>
                        <p className="m-auto p-4">For more information about joining the choir, contact <a href="mailto:clapperpianist@gmail.com">Jacob Clapper</a></p>
                    </div>
                    <div className='border border-3 rounded m-3 mt-auto mb-auto' style={{flex: '4'}}>
                        <img src={plaque} style={{width: '100%'}}/>
                    </div>
                </div> 
            </Card>

            {/* <Card>
                <Card.Header><h2>Music Director</h2></Card.Header>
                <Card.Body >
                    <Card.Text>Jacob Clapper</Card.Text>
                    <Card.Text><strong>email: </strong>clapperpianist@gmail</Card.Text>
                </Card.Body>
            </Card> */}
        
        </>
    )
}

export default AboutUs