import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="ftr1">
                <div className="about">
                    <h4>About</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non porro quibusdam consectetur mollitia dolorum vitae quos
                        aliquid quidem eaque recusandae ut vero odio optio velit, incidunt,
                        aperiam quaerat enim inventore.
                    </p>
                    <span>
                        <h5>Email:info@.com</h5>
                        <h6>Phone:8787878787</h6>
                    </span>
                </div>
                <div className="ql">
                    <h5>Quick Link</h5>
                    <ul>
                        <Link to='/'> <li>Home</li></Link>
                        <Link to='/trendings'><li>Trending</li></Link>
                        <Link to='/profile'><li>Profile</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="ql">
                    <h5>Category</h5>
                    <ul>
                        <Link to='/category/solo-travel'><li>Solo Travel</li></Link>
                        <Link to='/category/family-travel'><li>Family Travel</li></Link>
                        <Link to='/category/mount-travel'> <li>Mount Travel</li></Link>
                        <Link to='/category/food-travel'><li>Food Travel</li></Link>
                        <Link to='/category/jungle-travel'><li>Jungle Travel</li></Link>
                    </ul>
                </div>
                <div className="wn">
                    <div className='wn1'>
                        <h5>Weekly Newletter</h5>
                        <p>Get blog articles and offers via email</p>
                        <input placeholder='Your Email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer