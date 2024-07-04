// Category.js
import React from 'react';
import './Category.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';

const handleDragStart = (e) => e.preventDefault();

const imageTexts = ["Solo Travel", "Mount Travel", "Jungle Travel", "Road Travel", "Ocean Travel", "Old City Travel", "Food Travel", "Family Travel"];

const items = [
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
  'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg',
].map((src, index) => (
  <Link to={`/category/${imageTexts[index].toLowerCase().replace(' ', '-')}`} key={index}>
    <div className="image-container">
      <img src={src} onDragStart={handleDragStart} role="presentation" alt=''/>
      <span className="image-overlay">{imageTexts[index]}</span>
    </div>
  </Link>
));

const responsive = {
  0: { items: 2 },
  601: { items: 4 },
  1023: { items: 6 }
};

const Category = () => {
  return (
    <>
      <div className="cat1">
        <h3>Choose a Category</h3>
        <div className="cat2">
          <AliceCarousel
            autoPlay={true}
            autoPlayInterval={2600}
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls={true}
            infinite={true}
            autoWidth={false}
            autoHeight={false}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
