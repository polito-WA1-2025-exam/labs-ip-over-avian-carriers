import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Image from 'react-bootstrap/Image';


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='mx-auto' style={{width: '40%'}}>
      <Carousel.Item>
        <Image src={img1} width={50} height={300} className='d-block w-100' alt='First slide'/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img2} width={50} height={300} className='d-block w-100' alt='Second slide'/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img3} width={50} height={300} className='d-block w-100' alt='Third slide'/>
      </Carousel.Item>
    </Carousel>
  );
}
