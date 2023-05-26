import Header from '../components/header';
import Footer from '../components/footer';
import Card from 'react-bootstrap/Card';
import Profile from "../assets/images/Profile.jpeg";
import Resume from "../components/resumeComponent"

const AboutMe = () => {
    return (
    <div className="AboutMe">
        <div>
            <Header />            
        </div>
        <div className='AboutMeCard'>
            <Card>
                <Card.Img variant="top" src={Profile} height="500px"  className="AboutMeImage" />
                <Card.Body>
                    <Card.Text className="AboutMeText">
                        Hello, I'm Joseph Baek and this is my coding Portfolio.
                        I've been studying HTML, CSS, and JavaScript for the past 3 monts
                        at UCLA's Coding Bootcamp. On the side, I've also been doing multiple projects 
                        for other clients. Click on my portfolio button to see my personal projects and 
                        click the contact button to get my contact information. Additionally, feel free 
                        to click on the resume button to see my resume and my references. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div className='center'>
            <Footer />
        </div>
    </div>
    )
};

export default AboutMe;