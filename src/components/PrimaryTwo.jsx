import React from 'react'
import Golden from "../assets/golden glove.jpg"
import Talking from "../assets/talking fish.jpg"
import Wrong from "../assets/wrong person.jpg"
import Boxing from "../assets/boxing day.jpg"
import flute from "../assets/musa flute player.jpg"
import Snow from "../assets/snow white.jpg"
import Alice from "../assets/alice in wonder.jpg"
import { Link } from 'react-router-dom'


const PrimaryTwo = () => {
  return (
    <>
      <div className='container'>
      <div className='row'>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Golden} alt="" className='img-fluid w-100'/>
      </div>
      <h2 className='pt-4'>The Golden Stove
      </h2>
      <hr />
      <h5>Pa Amechi was a rich man, who loved to tell stories to his grandchildren when they visit him during the holidays.
On one of their visits to him he told them a story of how he journeyed from Owuze to Etiti in pursue of a very valuable possession, and he and his family were moved from grass to grace.
Read and enjoy this interesting story of the golden stove.</h5>
<div className=''>
  <Link to="">
   <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Talking} alt="" className='img-fluid w-100'/>
      </div>
      <h2 className='pt-4'>      The Talking Fish
      </h2>
      <hr />
      <h5>Eringa is a poor but a hardworking fisherman, who is married to a lazy and nagging wife. But one day, while fishing in the river, he caught a strange fish and things changed for Eringa and his
ungrateful wife... Read on, as you will find out in this wonderful story what
happened to this strange fish and</h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-5'>Get Book</button>
  </Link>
        </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Wrong} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className=' fw-bold'> A Wrong Decision
      </h4>
      <hr />
      <p  className='fw-bold'>Aderin, the king of Owoderin ruled
his kingdom with peace and love. He wanted to entrust his kingdom to someone, so he called his three sons and asked each of them how much they loved him.
The first two sons gave similar answers and the king gave one-third of his kingdom to each of them.
But when the third son gave his answer, the king became furious and banished him.
"What must have made the king so angry? Did the king later regret his actions?" Read this wonderful and interesting story.
      </p>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold '>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
      <div className='row justify-content-between'>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Boxing} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>      Its Boxing Day
      </h3>
      <hr />
      <p className='fw-bold'>Kelechukwu and Adaugo have been looking for
a child since they got married, and each time Adaugo gets pregnant, she delivers a stillbirth. After the fifth stillbirth, Elechi became seriously ill and was taken to a faraway village for a cure.
One day, three men who were on a journey visited Adaugo. They asked her for a place to rest. "Did Adaugo offer to help these men and who are they ?"</p>
<div>
<Link to="">
   <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={flute} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>  Musa The Flute Player
      </h3>
      <hr />
      <h5>The people of Bakinruwa lived peacefully and happily and had enough to eat.
One night, thousands of mice invaded their town and everything changed for the villagers, until one day...
"What must have happened to them?"
"Where could the mice have vanished to?"
Find out what happened in this interesting story of Musa and his flute.</h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-4'>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Snow} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>    Snow White
      </h3>
      <hr />
      <h5>Snow White is a very beautiful girl, born of a nice king and a queen but the queen died and the king had to remarry. The new queen hated Snow White because she was the most beautiful girl in the kingdom and tried every means to kill her. 'Did the wicked Queen succeed in killing Snow White?"
      anything happen to her?" Let's find out, as we read this interesting classic story of Snow White.
      </h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-2'>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Alice} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>    Alice In Wonderland
      </h3>
      <hr />
      <h5>This wonderful adventure is about a curious girl, Alice who followed a white bunny with a waistcoat
down to a large rabbit hole and found herself in an entirely strange land, where she kept growing to different sizes. Find out in this wonderful adventure, what Alice encountered and what wonderful experiences she had

      </h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-3'>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default PrimaryTwo