import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="nav1">
                <nav className='nav p-4 px-5 align-items-center justify-content-between'>
                    <ul className='nav3 list-unstyled'>
                        <span><li><h1><Link to='/' className="text-decoration-none" style={{ color: "rgb(73, 66, 66)" }}>Wanderlust Wonders</Link></h1></li></span>
                        <span><li>Keep it Memorable....</li></span>
                    </ul>
                    <ul className='nav2 d-flex'>
                        <Link to='/' style={{ color: "rgb(73, 66, 66)" }} className="text-decoration-none"><li>Home</li></Link>
                        <Link to='/trendings' style={{ color: "rgb(73, 66, 66)" }} className="text-decoration-none"><li>Trending</li></Link>
                        <Link to='/contact' style={{ color: "rgb(73, 66, 66)" }} className="text-decoration-none"><li>Contact</li></Link>
                        <Link to='/profile' style={{ color: "rgb(73, 66, 66)" }} className="text-decoration-none"><li>Profile</li></Link>
                    </ul>
                </nav>

            </div >
        </>
    )
}

export default Navbar