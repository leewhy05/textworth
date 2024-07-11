import React from 'react'
import "../styles/primaryfive.css"
import Witty from "../assets/itty seki.jpg"
import Sheer from "../assets/sheer stupidity.jpg"
import Tricks from "../assets/bag of tricks.jpg"
import Night from "../assets/so long a night.jpg"

const PrimarySix = () => {
  return (
    <>
    <div className='container'>
    <div className='row'>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Witty} alt="" className='img-fluid lat'/>
    </div>
    <h5 className='pt-4 fw-bold'>Witty Seki
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
    <img src={Sheer} alt="" className='img-fluid lat'/>
    </div>
    <h3 className='pt-4 fw-bold'>      SHEER STUPIDITY
    </h3>
    <hr />
    <h5>Kokogi was a cunning man, but expert at barbing at barbing and he was too proud of it that he started to misbehave. He also sold firewood to villagers at very high price and even cheated on them. But Kokogi must be taught a lesson. “How did he learn his lesson?” “What was his reward?” Read this interesting story of the dishonest barber.</h5>
    <div>
      <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
    </div>
    </div>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Tricks} alt="" className='img-fluid lat'/>
    </div>
    <h4 className='pt-3 fw-bold'> Nduka's Bag of Tricks
    </h4>
    <hr />
    <h5>Tango was the god of thunder and lightning. He came to rule the earth with aa staffin his hands He ruled the earthh peacefúlly until one day, his staff was nowhere to be found.
    Tango must find his staff but how and where? No one knows Read this and find outt what happens in thiss interesting story.

    </h5>
    <div>
      <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
    </div>
    </div>
    </div>
    <div className='row justify-content-between'>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Night} alt="" className='img-fluid lat'/>
    </div>
    <h4 className='pt-4 fw-bold'>  So Long A Night
    </h4>
    <hr />
    <p className='fw-bold'>Ariel is the youngest and favorite mermaid, daughter of the merking Triton, and with the most beautiful voice.She saves a human prince, fell in love and suddenly wanted to be with him.
With the help of the sea witch, she was able to achieve her goal but lost something very precious to her and almost lost everything she dreamt
Find out in this exciting story what Beegme of Area, witcherking and the sea witch
</p>
<div>
      <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
    </div>
    </div>
    </div>
   </div>
  </>
    )
}

export default PrimarySix