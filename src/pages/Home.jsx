import Carousels from "../components/Carousels"
import Category from "../components/Category"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="home1">
                <Navbar />
            </div>
            <div className="home2">
                <div className="overlayy"></div>
                <Carousels />
            </div>
            <Category />
            <Posts />
            <Footer/>
        </>
    )
}

export default Home