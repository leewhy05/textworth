import React from 'react'
import Alibaba from "../assets/Alibaba brothers.jpg"
import Aladin from "../assets/Aladin.jpg"
import Tango from "../assets/Tango staff.jpg"
import Marmaid from "../assets/the little manmaid.jpg"
import Chainago from "../assets/chinagorom.jpg"
import Beautybeast from "../assets/eautybeast.jpg"
import Dreamer from "../assets/saharatu.jpg"
import Magicalguilt from "../assets/magical guilt.jpg"
import Cinderella from "../assets/cindarela.jpg"
import { Link } from 'react-router-dom'

const PrimaryThree = () => {
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
      <img src={Alibaba} alt="" className='img-fluid w-100'/>
      </div>
      <h5 className='pt-4 fw-bold'>ALI BABA AND HIS GREEDY BROTHERS
      </h5>
      <hr />
      <p className='fw-bold'>Ali Baba was a poor woodcutter, who later acquired a lot of riches by luck from a cave and became rich.
Getting home, he told his brother Rasaq about how he got the riches.
After Ali warned his brother not to go there, his brother later set out to the same cave with the aim of becoming richer than his brother, Ali Baba.
On getting to the cave, something else happened. "Was he able to find his way out?" Read and find out, what later happened to his greedy brother.
</p>
<div className=''>
<Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("ALI BABA AND HIS GREEDY BROTHERS")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Aladin} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>      Aladin and the magical lamp
      </h3>
      <hr />
      <p className='fw-bold'>Aladdin was a handsome poor boy,
who begged on the streets to eat. But he always dreamt of becoming very rich one day. In a palace, is a princess, who must marry a prince before her next birthday but, who wanted to marry someone she loves. In the same palace, is the Sultan's chief adviser, Jaffar, who wants to overthrow the Sultan.
Something brought the princess, Aladdin and Jaffar together.
"What was it?" You are going to enjoy this wonderful adventure of
as you read on.</p>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-3'onClick={() => handleWhatsAppClick("Aladin and the magical lamp")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Tango} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-3 fw-bold'> TANGO AND THE MAGICAL STAFF
      </h4>
      <hr />
      <h5 className='mt-5'>Tango was the god of thunder and lightning. He came to rule the earth with aa staffin his hands He ruled the earthh peacefúlly until one day, his staff was nowhere to be found.
      Tango must find his staff but how and where? No one knows Read this and find outt what happens in thiss interesting story.

      </h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-5'onClick={() => handleWhatsAppClick("TANGO AND THE MAGICAL STAFF")}>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
      <div className='row justify-content-between'>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Marmaid} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>      THE LITTLE MERMAID 
      </h3>
      <hr />
      <p className='fw-bold'>Ariel is the youngest and favorite mermaid, daughter of the merking Triton, and with the most beautiful voice.She saves a human prince, fell in love and suddenly wanted to be with him.
With the help of the sea witch, she was able to achieve her goal but lost something very precious to her and almost lost everything she dreamt
Find out in this exciting story what Beegme of Area, witcherking and the sea witch
</p>
<div>
<Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("THE LITTLE MERMAID")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Chainago} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-4'>      CHINAGOROM AND THE BLACK POT
      </h4>
      <hr />
      <h5 className='mt-4'>Chinagorom was sent into the evil forest by her wicked stepmother to borrow a pot from Agadi, the witch.
She encountered some difficulty on the journey to visit the witch. Did she survive in the evil Was she able to get the black pot from the witch?
Read and find out about the exciting adventure, of Chinagorom in this interesting story.</h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("CHINAGOROM AND THE BLACK POT")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Beautybeast} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-4'>    BEAUTY  AND THE BEAST 
      </h4>
      <hr />
      <p className='fw-bold'>A merchant, who had three daughters embarked on a long business trip and asked his daughters what they each wanted.
The first two daughters said what they wanted and the last and favourite said she only wanted a red rose; a red rose changed the life of the merchant and his precious daughter forever. Was it for good or for bad?
You will find out in this exciting and interesting story what the red rose did as you read on.
      </p>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("BEAUTY  AND THE BEAST")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Dreamer} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'> Sa'haratu The Dreamer
      </h3>
      <hr />
      <h5>Sa'haratu is a woman who
dreams a lot and she believes that her dreams are usually real. But, not everyone takes her serious all the time, even the king. "But does her dream come in positive or negative form?" or "Do they really come true?"
You will know, as you read this wonderfu story of Sa'haratu and her dreams.
      </h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("Sa'haratu The Dreamer")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Magicalguilt} alt="" className='img-fluid w-100'/>
      </div>
      <h4 className='pt-4'>    THE MAGICAL QUITY
      </h4>
      <hr />
      <h6 className='fw-bold'>Prince Efosa lived with his parents in a big castle in a deep ancient forest, and they were a set of lovely family.Something strange happened to Prince Efosa on his way home and, all of a sudden, he was nowhere to be found.Ejiro a brave girl, who lives in the same village, saw what happened and took it upon herself to find the Prince. Where would Prince Efosa have gone to?" "Was Ejiro able to accomplish her mission?" Read and enjoy this wonderful and exciting adventure of Ejiro.
      </h6>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("THE MAGICAL QUITY")}>Get Book</button>
  </Link>
      </div>
      </div>
      <div className='big shadow mt-4 col-lg-4'>
      <div className=''>
      <img src={Cinderella} alt="" className='img-fluid w-100'/>
      </div>
      <h3 className='pt-4'>   CINDERELLA 
      </h3>
      <hr />
      <h5>The king of the land gave a ball to all young ladies, for his son to
get a suitable wife. We don't know, if Cinderella was able to go to the ball or even if she went, was it with her tattered clothes and shoes?
"Who did the prince marry?"
Find out in this interesting and exciting story book what happened to Cinderella.
      </h5>
      <div>
      <Link to="">
   <button className='btn btn-primary fw-bold mt-4'onClick={() => handleWhatsAppClick("CINDERELLA ")}>Get Book</button>
  </Link>
      </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default PrimaryThree