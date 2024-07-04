import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css'

function IndividualIntervalsExample() {
    return (
        <Carousel controls={false}>
            <Carousel.Item interval={2000} className='cr2'>
                <img src='https://wallpapercave.com/wp/wp9388475.jpg' alt="First slide" />
                <Carousel.Caption>
                    <h3>Explore the World with US.</h3>
                    <h1>“Life is either a daring adventure or nothing at all”</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className='cr2'>
                <img src='https://images.pexels.com/photos/3061217/pexels-photo-3061217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="First slide" />
                <Carousel.Caption>
                    <h3>Explore the World with US.</h3>
                    <h1>“Life is either a daring adventure or nothing at all”</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className='cr2'>
                <img src='https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg' alt="First slide" />
                <Carousel.Caption>
                    <h3>Explore the World with US.</h3>
                    <h1> “A good traveler has no fixed plans, and is not intent on arriving.”                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;