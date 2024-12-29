import './Footer.css'
import {FaYoutube,FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <FaFacebook className='fa'/>
        <FaInstagram className='fa'/>
        <FaTwitter className='fa'/>
        <FaYoutube className='fa'/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@ 2003-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer