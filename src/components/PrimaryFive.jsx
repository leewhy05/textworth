import React from 'react'
import "../styles/primaryfive.css"
import Granny from "../assets/grannys tales.jpg"
import Clever from "../assets/Antics ofofia.jpg"
import Native from "../assets/native animal tales.jpg"
import Prince from "../assets/loyal price.jpg"
import Sleeping from "../assets/Aladin.jpg"

const PrimaryFive = () => {
  return (
    <>
    <div className='container'>
    <div className='row'>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Granny} alt="" className='img-fluid lat'/>
    </div>
    <h5 className='pt-4 fw-bold'>Granny's African Tales
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
    <img src={Clever} alt="" className='img-fluid lat'/>
    </div>
    <h3 className='pt-4 fw-bold'>      The Clever Antics of Osofia
    </h3>
    <hr />
    <h5>Kokogi was a cunning man, but expert at barbing at barbing and he was too proud of it that he started to misbehave. He also sold firewood to villagers at very high price and even cheated on them. But Kokogi must be taught a lesson. “How did he learn his lesson?” “What was his reward?” Read this interesting story of the dishonest barber.</h5>
    <div>
      <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
    </div>
    </div>
    <div className='big shadow mt-4 col-lg-4'>
    <div className=''>
    <img src={Prince} alt="" className='img-fluid lat'/>
    </div>
    <h4 className='pt-3 fw-bold'> The Loyal Prince And Other Stories
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
    <img src={Native} alt="" className='img-fluid lat'/>
    </div>
    <h4 className='pt-4 fw-bold'>  Native Animal Tales
    </h4>
    <hr />
    <p className='fw-bold'>This is a book containing series of short but very interesting stories on morals such as the power of unity and others. Each story is so full of suspense that you would not leave any page unturned till you get to the end.
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

export default PrimaryFive