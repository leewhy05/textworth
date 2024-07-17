import React from 'react'
import "../styles/primaryfive.css"
import Witty from "../assets/itty seki.jpg"
import Sheer from "../assets/sheer stupidity.jpg"
import Tricks from "../assets/bag of tricks.jpg"
import Night from "../assets/so long a night.jpg"
import { Link } from 'react-router-dom'

const PrimarySix = () => {
  return (
    <>
    <div className='container'>
    <div className='row'>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Witty} alt="" className='img-fluid lat'/>
    </div>
    <h1 className='pt-4 fw-bold'>Witty Seki
    </h1>
    <hr  className='fw-bold'/>
    <h4 className=' pt-'>This is a story about a lazy and foolish boy called Sheki. He does so many foolish things that most times put him in trouble. Find out how he gets out of his many troubles in this hilarious book.
</h4>
<div className=''>
<Link to="">
   <button className='btn btn-primary fw-bold mt-4'>Get Book</button>
  </Link>
    </div>
    </div>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Sheer} alt="" className='img-fluid lat'/>
    </div>
    <h3 className='pt-4 fw-bold'>      SHEER STUPIDITY
    </h3>
    <hr />
    <h5>Kokogi was a cunning man, but expert at barbing at barbing and he was too proud of it that he started to misbehave. He also sold firewood to villagers at very high price and even cheated on them. But Kokogi must be taught a lesson. “How did he learn his lesson?” “What was his reward?” Read this interesting story of the dishonest barber.</h5>
    <div>
    <Link to="">
   <button className='btn btn-primary fw-bold mt-3'>Get Book</button>
  </Link>
    </div>
    </div>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Tricks} alt="" className='img-fluid lat'/>
    </div>
    <h4 className='pt-3 fw-bold'> Nduka's Bag of Tricks
    </h4>
    <hr />
    <h4 className='mt-4'>
      Nduka is an unserious fellow who misuses opportunities. that come his way. He soon becomes the court jester, keeping the king and the other chiefs happy with his numerous. mischiefs.

    </h4>
    <div>
    <Link to="">
   <button className='btn btn-primary fw-bold mt-5'>Get Book</button>
  </Link>
    </div>
    </div>
    </div>
    <div className='row justify-content-between'>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Night} alt="" className='img-fluid lat'/>
    </div>
    <h2 className='pt-4 fw-bold'>  So Long A Night
    </h2>
    <hr />
    <p className='fw-bold fs-4'>King Adeolu is angry with women in general.
    Find out why and if he ever has a change of mind towards them in this exciting story.
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

export default PrimarySix