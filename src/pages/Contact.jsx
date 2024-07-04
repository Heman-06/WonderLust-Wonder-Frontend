import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import './Contact.css'
import Footer from '../components/Footer'
const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="cnt1 container">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact