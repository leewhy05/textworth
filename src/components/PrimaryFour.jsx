import React from 'react'
import Brave from "../assets/brave princess.jpg"
import Zinab from "../assets/Zinab.jpg"
import Bracelet from "../assets/dainty bracelet.jpg"
import Auwalu from "../assets/healing gift.jpg"
import Sleeping from "../assets/sleeping beauty.jpg"
import { Link } from 'react-router-dom'



const PrimaryFour = () => {
  const handleWhatsAppClick = (bookTitle) => {
    const companyWhatsAppNumber = 'http://wa.me/2348091822114'; // Replace with the actual WhatsApp number
    const message =`I'm interested in the book "${bookTitle}".`; // Customize the message with the book title

    const url = `${companyWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <>
      <div className='container'>
      <div className='row'>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Brave} alt="" className='img-fluid w-100'/>
      </div>
      <h5 className='pt-4 fw-bold'>The Brave Princess
      </h5>
      <hr />
      <p className='fw-bold fs-5'>Prince Edet was married to
princess Uyai and they had a son, called Odudu.
The king was very sick and sent for the prince to give
him his final blessings. The prince set out with his princess and son and on the way something terrible happened to the princess.
Read and enjoy, this wonderful story.
</p>
<div className=''>
<Link to="">
   <button className='btn btn-primary fw-bold mt-'onClick={() => handleWhatsAppClick("The Brave Princess")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Zinab} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>      Zainab
      </h3>
      <hr />
      <h5 className='fw-bold mt-4'>Zainab was an intelligent little girl whose father gave all she wanted. She wished to live in luxury but her hope was cut short as she lost her father when she needed him the most. Zainab must find a means of survival and becoming the woman of her dreams.
      Read and enjoy this wonderful story and find out how Zainab survived.</h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("Zainab")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>  
      <div className=''>
      <img src={Bracelet} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-3 fw-bold'> The Dainty Bracelet
      </h4>
      <hr />
      <h5 className='fw-bold mt-5'>Amarachi was a very pretty woman who had almost every thing she wanted but, was never contented. One day, she was passing by and heard the sound of metals clashing under a cave and something attracted her. "What was it?" Read and enjoy this interesting story of Amarachi.

      </h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-5'onClick={() => handleWhatsAppClick("The Dainty Bracelet")}>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
      <div className='row justify-content-between'>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Auwalu} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-4 fw-bold'>  AUWALU and the HEALING GIFT
      </h4>
      <hr />
      <p className='fw-bold'>In the olden days, there is a village called Sabogona they had a god called Lawan, who was just. Lawan, the god came to earth and disguised himself as a man and had a family. Something went wrong and Lawan had to vanish, but his fatherly love could not let him abandon his son whom he made famous by giving him special healing powers with a certain condition that can affect the life of the dying princess. Read and find out the twists in this exciting story.
</p>
<div>
<Link to="">
   <button className='btn btn-primary fw-bold mt-3'onClick={() => handleWhatsAppClick("AUWALU and the HEALING GIFT")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Sleeping} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-4 fs-3 fw-bold'>      Sleeping Beauty
      </h4>
      <hr />
      <h5 className='fw-bold mt-4'>The story is narrated in the first person as an
      autobiographical memoir told by the titular horse named Black Beauty-beginning with his carefree days as a colt on an English farm with his mother, to his difficult life pulling cabs in London, to his happy retirement in the country.</h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-5'onClick={() => handleWhatsAppClick("Sleeping Beauty")}>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default PrimaryFour