import Navbar from '../components/Navbar'
// import Posts from '../components/Posts'
import Footer from '../components/Footer'
import Card from '../components/Card'
import './Trending.css'

const Trending = () => {


    return (
        <>
            <Navbar />
            <div className="trend0 container">
                <h3>Trending Posts:-</h3>
                <hr className='hr1' />
                <div className="trend1">
                    <Card/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Trending