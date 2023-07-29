import { Card } from "react-bootstrap"
import plaque from '../images/asc_plaque.jpg'

const AboutUs = () => {

    const aboutUsStyle = {
        fontSize: '21px',
        color: 'black',
    }

    return (
        <Card style={aboutUsStyle} className='playFont'>
            <h1 className="mt-3 ps-4 text-center" >
                <strong>Welcome!</strong>
            </h1>
            <div className='aboutUs'>
                <div style={{flex: '6'}}>
                    <h2 className="mt-3 ps-4" style={{textDecoration: 'underline'}}>
                        <strong>About the Website</strong>
                    </h2>
                    <p className="m-auto p-4">
                    Our website is designed to serve as a resource for choir members and visitors alike. We offer the following features:
                        <br></br>
                        <br></br>
                        <ul>
                            <li>Login and view the music that we are rehearsing for upcoming Sunday services.</li>
                            <li>Download scores for practice.</li>
                            <li>Listen to practice recordings.</li>
                            <li>Participate in the choir blog page where members can communicate with each other, ask questions and share resources.</li>
                        </ul>
                        We hope that this website will help to create a sense of community and connection among our choir members and visitors. Please feel free to explore the site and get to know us better.
                    </p>
                    <h2 className="mt-3 ps-4" style={{fontSize: '32px', textDecoration: 'underline'}}>
                        <strong>About the Choir</strong>
                    </h2>
                    <p className="m-auto p-4">
                        We are a group of dedicated volunteer singers who come together to enhance the worship experience at All Souls Church in Braintree, Massachusetts. Our choir is open to all members of the congregation, regardless of experience or skill level.
                        <br></br>
                        <br></br>
                        As a Unitarian Universalist church, <em>All Souls is a welcoming and inclusive community, and our choir reflects that diversity. We strive to create a warm and supportive environment where all voices are valued and appreciated.</em>
                        <br></br>
                        <br></br>
                        Our choir rehearses on Sunday Mornings at 9:00 AM, and occasionally Sunday afternoons around noon. We sing at the Sunday morning service each week. Whether you're an experienced singer or just starting out, we invite you to join us in making music together.
                    </p>
                    <h2 className="mt-3 ps-4" 
                        style={{fontSize: '32px', textDecoration: 'underline'}}>
                        <strong>Contact</strong>
                    </h2>
                    <p className="m-auto p-4">
                        If you're interested in joining the choir, please contact our Music Director, <strong>Jacob Clapper</strong>, at <a href="mailto:clapperpianist@gmail.com">clapperpianist@gmail.com</a>. We look forward to singing with you!
                    </p>
                </div>
                <div className='border border-3 rounded m-3 mt-auto mb-auto' 
                    style={{flex: '4'}}>
                    <img src={plaque} style={{width: '100%'}}/>
                </div>
            </div> 
        </Card>
    )
}

export default AboutUs