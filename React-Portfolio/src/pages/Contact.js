import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';

const Contact = () => {
    return (
    <div className='gray'>
        <div>
            <Header /> 
        </div> 
        <div>
            <ContactForm />          
        </div>
        <div className='center'>
            <Footer />
        </div>
    </div>
    )
}

export default Contact;