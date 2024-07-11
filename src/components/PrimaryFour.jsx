import React from 'react'
import Brave from "../assets/brave princess.jpg"
import Zinab from "../assets/Zinab.jpg"
import Bracelet from "../assets/dainty bracelet.jpg"
import Auwalu from "../assets/healing gift.jpg"
import Sleeping from "../assets/sleeping beauty.jpg"



const PrimaryFour = () => {
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
      <p className='fw-bold'>Ali Baba was a poor woodcutter, who later acquired a lot of riches by luck from a cave and became rich.
Getting home, he told his brother Rasaq about how he got the riches.
After Ali warned his brother not to go there, his brother later set out to the same cave with the aim of becoming richer than his brother, Ali Baba.
On getting to the cave, something else happened. "Was he able to find his way out?" Read and find out, what later happened to his greedy brother.
</p>
<div className=''>
        <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Zinab} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>      Zainab
      </h3>
      <hr />
      <h5>Zainab was an intelligent little girl whose father gave all she wanted. She wished to live in luxury but her hope was cut short as she lost her father when she needed him the most. Zainab must find a means of survival and becoming the woman of her dreams.
      Read and enjoy this wonderful story and find out how Zainab survived.</h5>
      <div>
        <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Bracelet} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-3 fw-bold'> The Dainty Bracelet
      </h4>
      <hr />
      <h5>Amarachi was a very pretty woman who had almost every thing she wanted but, was never contented. One day, she was passing by and heard the sound of metals clashing under a cave and something attracted her. "What was it?" Read and enjoy this interesting story of Amarachi.

      </h5>
      <div>
        <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
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
        <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Sleeping} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-4 fw-bold'>      Sleeping Beauty
      </h4>
      <hr />
      <h5>Chinagorom was sent into the evil forest by her wicked stepmother to borrow a pot from Agadi, the witch.
She encountered some difficulty on the journey to visit the witch. Did she survive in the evil Was she able to get the black pot from the witch?
Read and find out about the exciting adventure, of Chinagorom in this interesting story.</h5>
      <div>
        <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
      </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default PrimaryFour