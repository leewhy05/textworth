import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <> 
    <div className='container'>
    <footer className='footer'>
    <footer className=" container">
  <div className="footer-content">
    <div className="footer-section">
      <h3>About Us</h3>
      <p>Its makes Us connect more to people and know who they are</p>
    </div>
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Email: odutayoayomide85@gmail.com</p>
      <p>Phone: +234 8132259126</p>
    </div>
    <div className="footer-section">
      <h3>Follow Us</h3>
      <p>Stay connected with us on social media.</p>
    
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Create Your Bio</p>
    <p className='fw-bold'>website created by leewhy</p>
  </div>
</footer>
</footer>
    </div>
</>
  )
}

export default Footer