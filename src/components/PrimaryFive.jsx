import React from 'react'
import "../styles/primaryfive.css"
import Granny from "../assets/grannys tales.jpg"
import Clever from "../assets/Antics ofofia.jpg"
import Native from "../assets/native animal tales.jpg"
import Prince from "../assets/loyal price.jpg"
import { Link } from 'react-router-dom'


const PrimaryFive = () => {
  return (
    <>
    <div className='container'>
    <div className='row'>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Granny} alt="" className='img-fluid lat'/>
    </div>
    <h5 className='pt-4 fs-3 fw-bold'>Granny's African Tales
    </h5>
    <hr />
    <p className='fw-bold fs-5'>These are tales based on the rich culture of Africa. This book comprises both animal and human tales based on morals and relationship with the people around us. It is a book you would not want to drop till you get to the very last page.
</p>
<div className=''>
<Link to="">
   <button className='btn btn-primary fw-bold mt-4'>Get Book</button>
  </Link>
    </div>
    </div>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Clever} alt="" className='img-fluid lat'/>
    </div>
    <h3 className='pt-4 fw-bold'>      The Clever Antics of Osofia
    </h3>
    <hr />
    <h5 className='fs-4 fw-bold pt-3'>Being a chief is not an easy task. Osafia soon finds out. Learn about the different tricks he uses to overcome these tasks in this wonderful and hilarious story.</h5>
    <div>
    <Link to="">
   <button className='btn btn-primary fw-bold mt-5'>Get Book</button>
  </Link>
    </div>
    </div>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Prince} alt="" className='img-fluid lat'/>
    </div>
    <h4 className='pt-3 fw-bold'> The Loyal Prince And Other Stories
    </h4>
    <hr />
    <p className='fw-bold'>"The Loyal Prince and Other Stories" is a collection of inspiring tales that showcase courage, loyalty, and wisdom. The title story follows a prince who remains faithful to his king despite facing severe trials. Other stories in the collection feature themes of perseverance, honor, and selflessness, highlighting the triumph of good over evil. These uplifting stories aim to motivate readers to emulate the virtues of the characters, making the world a better place.
    </p>
    <div>
    <Link to="">
   <button className='btn btn-primary fw-bold mt-'>Get Book</button>
  </Link>
    </div>
    </div>
    </div>
    <div className='row justify-content-between'>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Native} alt="" className='img-fluid lat'/>
    </div>
    <h4 className='pt-4 fw-bold'>  Native Animal Tales
    </h4>
    <hr />
    <p className='fw-bold fs-5 pt-3'>This is a book containing series of short but very interesting stories on morals such as the power of unity and others. Each story is so full of suspense that you would not leave any page unturned till you get to the end.
</p>
<div>
<Link to="">
   <button className='btn btn-primary fw-bold mt-4'>Get Book</button>
  </Link>
    </div>
    </div>
    </div>
   </div>
  </>
  )
}

export default PrimaryFive