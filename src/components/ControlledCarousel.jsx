import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/15460829/pexels-photo-15460829.jpeg?_gl=1*pqpom0*_ga*MTkxNDUwNDU2MS4xNzYwODQyOTMy*_ga_8JE65Q40S6*czE3Njk0MTIyOTYkbzE3JGcxJHQxNzY5NDEzNDkwJGo1OCRsMCRoMA.."
          alt="Colosseum, Rome"
          style={{ maxHeight: '600px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Day 1: Explore Colosseum and Roman Forum 🏛️</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4863938/pexels-photo-4863938.jpeg?_gl=1*toexff*_ga*MTkxNDUwNDU2MS4xNzYwODQyOTMy*_ga_8JE65Q40S6*czE3Njk0MTIyOTYkbzE3JGcxJHQxNzY5NDEzMTUxJGoyNyRsMCRoMA.."
          alt="Gondola Ride, Venice"
          style={{ maxHeight: '600px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Day 2: Gondola ride in Venice 🚤</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/20821732/pexels-photo-20821732.jpeg?_gl=1*za6pab*_ga*MTkxNDUwNDU2MS4xNzYwODQyOTMy*_ga_8JE65Q40S6*czE3Njk0MTIyOTYkbzE3JGcxJHQxNzY5NDEyODgzJGo4JGwwJGgw"
          alt="Wine Tasting, Tuscany"
          style={{ maxHeight: '600px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Day 3: Wine tasting in Tuscany 🍷</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
