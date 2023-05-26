import Header from '../components/header';
import Footer from '../components/footer';
import ResumeComponent from '../components/resumeComponent';

const Resume = () => {
    return (
    <div className="ResumeBackground">
        <div>
            <Header />            
        </div>
        <div className='resumeContainer'>
            <label className="resumeLabel">Joseph Baek's Resume</label>
        </div>
        <div>
            <ResumeComponent />
        </div>
        <div className='center'>
            <Footer />
        </div>
    </div>
    )
};

export default Resume;