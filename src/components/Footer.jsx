import '../assets/styles/header.scss'
import Github from '../assets/images/github.png'
import Linkedin from '../assets/images/linkedin.png'
import Twitter from '../assets/images/twitter.png'
import Whatsapp from '../assets/images/whatsapp.png'


const Footer = () => {


  return (  
    <>
      <footer>
        <h1> Chidera Ezenwekwe </h1>
        <div className="social-links">
          <a target='_blank' href="https://www.twitter.com/EraOrd" title='Twitter Account'>
            <img src={Twitter} alt="Twitter Account" />
          </a>
          <a target='_blank' href="https://wa.me/+2347025207795" title='Whatsapp Phone Number'>
            <img src={Whatsapp} alt="Whatsapp Phone Number" />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/chidera-ezenwekwe-a3738721b" title='LinkedIn Account'>
            <img src={Linkedin} alt="LinkedIn Account" />
          </a>
          <a target='_blank' href="https://www.github.com/Charvine-300" title='GitHub Portfolio'>
            <img src={Github} alt="Github Portfolio" />
          </a>
        </div>
      </footer> 
    </>
  );
}
 
export default Footer;