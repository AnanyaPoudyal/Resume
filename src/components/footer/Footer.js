import './Footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='logo'>Ananya Poudyal</div>
            <div className='icons' > 
                 <a href="https://github.com/AnanyaPoudyal" target="_blank" rel="noreferrer" className="github">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/ananya-poudyal/" target="_blank" rel="noreferrer" className="linkedin">
            <FaLinkedin size={40} />
          </a>
            </div>
          </div>
    );
}
export default Footer;