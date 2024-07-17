import React from 'react'
import "../styles/list.css"
import ugly from "../assets/ugly.jpg"
import honest from "../assets/dishonnest.jpg"
import magic from "../assets/magic.jpg"
import riding from "../assets/ridding hood.jpg"
import animal from "../assets/animal.jpg"
import rap from "../assets/rapun.jpg"
import { Link } from 'react-router-dom'

const Lists = () => {
  const handleWhatsAppClick = (bookTitle) => {
    const companyWhatsAppNumber = 'http://wa.me/2348091822114'; // Replace with the actual WhatsApp number
    const message = `I'm interested in the book "${bookTitle}".`; // Customize the message with the book title

    const url = `https://wa.me/${companyWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
     <div className='container'>
      <div className='row'>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={ugly} alt="" className='img-fluid w-100'/>
      </div>
      <h2 className='pt-4'>The Ugly Duckling
      </h2>
      <hr />
      <h5>An ugly duckling was born by the pond of Zeta 
in a beautiful animal kingdom.
He was rejected by his siblings and other 
animals because he was different from other 
ducklings. But nature played a part in the ugly 
duckling's life. 
“What was it?” You will find out in this 
wonderful story what became of the ugly 
duckling as you read on.</h5>
<div className=''>
              <button className='btn btn-primary fw-bold mt-4' onClick={() => handleWhatsAppClick("The Ugly Duckling")}>Get Book</button>
            </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={honest} alt="" className='img-fluid w-100'/>
      </div>
      <h2 className='pt-4'>      The Dishnonest Barber
      </h2>
      <hr />
      <h5>Kokogi was a cunning man, but expert at barbing at barbing and he was too proud of it that he started to misbehave. He also sold firewood to villagers at very high price and even cheated on them. But Kokogi must be taught a lesson. “How did he learn his lesson?” “What was his reward?” Read this interesting story of the dishonest barber.</h5>
      <div>
      <Link to="http://wa.me/2348091822114" target='blank'>
   <button className='btn btn-primary fw-bold mt-4'>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={magic} alt="" className='img-fluid w-100'/>
      </div>
      <h2 className='pt-4'>     The magical Button
      </h2>
      <hr />
      <h5>Textsworth ‘story books’ are enchanting collections of indigenous African stories and popular English Classics, beautifully illustrated to make reading exciting. This book is basically designed to introduce school pupils to the world of Literature and arts. The African Delight and English Classics stories have been simplified too...
      </h5>
      <div>
      <Link to="http://wa.me/2348091822114" target='blank'>
   <button className='btn btn-primary fw-bold mt-4'>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
      <div className='row justify-content-between'>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={riding} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>      Little Red Riding Hood
      </h3>
      <hr />
      <p className='fw-bold'>Little red riding hood was a girl who loves to play.
She was called little red riding hood because she
wore a beautiful red cloak that her grandmother made for her.
On her way to visit her grandmother to collect her doll
that she had forgotten, she met a big wolf and she never
knew that wolves are dangerous animals.
What do you think must have happened to the
little gilr? Did the wolf hurt her?
read for yoursefl this exciting story.</p>
<div>
<Link to="http://wa.me/2348091822114" target='blank'>
   <button className='btn btn-primary fw-bold mt-4'>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={animal} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>      The Animal Musician
      </h3>
      <hr />
      <h5>The journey to Anatte is about four brave animals; the donkey, the dog, the cat and the hawk, who travelled to the village of Anatte to become great musicians.
But on getting there, something else happened. They saw a gang of robbers.
Are they going to be attacked? What hope of rewards could this bring Find out how things turned out in this adventure of the Animal Musicians.</h5>
      <div>
      <Link to="http://wa.me/2348091822114" target='blank'>
   <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={rap} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>     Rapunzel
      </h3>
      <hr />
      <h5 className='mt-5'>Rapunzel is about a beautiful girl with a very long golden braided hair, born by an ordinary parent; but bred by a witch. She lives in a high tower with the witch; in a thick wood as a child until... Discover for yourself what happened to Rapunzel in this story.
      </h5>
      <div>
      <Link to="http://wa.me/2348091822114" target='blank'>
   <button className='btn btn-primary fw-bold mt-5'>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default Lists