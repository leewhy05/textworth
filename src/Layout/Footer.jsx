import React from 'react'
import "../styles/footer.css"
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <> 
    <div className='container'>
    <footer className='footer'>
    <footer className=" container">
  <div className="footer-content">
    <div className="footer-section">
      <h3 className='fw-bold'>About Us</h3>
      <p>Textsworth is known for standard and modern textsbooks, instuctional materials and e-books targeted to help learners from nursery to secondary school level acquire quality education and training for teachers. we are proud topartner with schools</p>
    </div>
    <div className="footer-section">
      <h3 className='fw-bold'>Contact Us</h3>
      <p>Email:  textsworthpublishing@gmail.com</p>
      <p>Phone: +234 809 182 2114</p>
    </div>
    <div className="footer-section">
      <h3 className='fw-bold'>Follow Us</h3>
      <p>Stay connected with us on social media.</p>
      <div className='d-flex text-center gap-3'>
      <Link to=" https://www.facebook.com/textsworth?mibextid=LQQJ4d" target='blank'><FaFacebook size={30} color='blue'/></Link>
      <Link to=" https://www.instagram.com/textsworthpublishing?igsh=MXg4cHZtMW9oNHE0ZA%3D%3D&utm_source=qr" target='blank'><FaInstagram size={30} color='red'/></Link>
      <Link to="http://wa.me/2348091822114" target='blank'><FaWhatsapp size={30} color='green'/></Link>
      </div>
    
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Create Your Bio</p>
    <p className='fw-bold'>website created by LEEWHY</p>
  </div>
</footer>
</footer>
    </div>
</>
  )
}

export default Footer