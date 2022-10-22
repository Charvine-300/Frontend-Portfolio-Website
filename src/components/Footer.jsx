import '../assets/styles/header.scss'
import Github from '../assets/images/github.png'
import Linkedin from '../assets/images/linkedin.png'
import Twitter from '../assets/images/twitter.png'


const Footer = () => {


  return (  
    <>
      <footer>
        <h1> Chidera Ezenwekwe </h1>
        <div className="social-links">
          <a target='_blank' href="https://www.twitter.com/EraOrd">
            <img src={Twitter} alt="Twitter Account" />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/chidera-ezenwekwe-a3738721b">
            <img src={Linkedin} alt="LinkedIn Account" />
          </a>
          <a target='_blank' href="https://www.github.com/Charvine-300">
            <img src={Github} alt="Github Portfolio" />
          </a>
        </div>
      </footer> 
    </>
  );
}
 
export default Footer;