import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FirstImg from "../assets/Texsworth pic.png"
import SecImg from "../assets/image1.jpg"
import ThirdImg from "../assets/img 2.jpg"
import Button from './Button';

const Home = () => {
  return (
    <>
   <div className='container'>
   <section className='Home'>
     <Carousel>
    <Carousel.Item>
      <img src={FirstImg} alt="" className='img-fluid' />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={SecImg} alt="" className='img-fluid' />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={ThirdImg} alt="" className='img-fluid'/>
      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   </section>
    <section className='container'>
      <div className='text-center mt-5'>
      <h1 className='fw-bold text-info pt-5'>TEXTSWORTH PUBLISHING LIMITED</h1>
      <p className='text-secondary pt-5'>Textsworth is known for standard and modern textsbooks, instuctional materials and e-books targeted to help learners from nursery to secondary school level acquire quality education and training for teachers. we are proud topartner with schools</p>
      </div>
     <div className=''>
     <div className='row gap justify-content-center align-items-center'>
     <div className="flip-image mt-5 col-lg-4">
      <img src={FirstImg} alt="Flipping-image" />
    </div>
      <div className="flip-image mt-5 col-lg-4">
      <img src={SecImg} alt="Flipping-image" />
    </div>
      <div className="flip-image mt-5 col-lg-4">
      <img src={ThirdImg} alt="Flipping-image" />
    </div>
     </div>
     </div>
    </section>
   </div>
   <div>
    <Button/>
   </div>
   </>
  )
}

export default Home