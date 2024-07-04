import './ContactForm.css'


const ContactForm = () => {

    const hoye = () => {
        alert("Contact Mat Kar, Abhi Busy Hu");
    }

    return (
        <>
            <div className="frm1">
                <h3>Contact Us</h3>
                <form onSubmit={hoye} className="frm2">
                    <input placeholder='Enter Your Name' />
                    <input placeholder='Enter Your Email' />
                    <input placeholder='Enter Your Contact Number' />
                    <textarea placeholder='Message' />
                    <button>Submit</button>
                </form>




            </div>


        </>
    )
}

export default ContactForm