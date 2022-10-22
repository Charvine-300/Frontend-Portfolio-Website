import { useState } from 'react';
import '../assets/styles/header.scss'
import Menu from '../assets/images/menu.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState('desktop');
  const [active, setActive] = useState(0);

  const ToggleMenu = () => {
    if (menuToggle === 'mobile') {
      setMenuToggle('desktop');
    }

    else {
      setMenuToggle('mobile');
    }
  }


  return (  
    <>
      <div className="header-wrapper">
        <header>
          <h1> Chidera Ezenwekwe </h1>
          <ul className='desktop'>
            <Link to='/'>
              <li  
                onClick={() => setActive(0)}
                style={{'color': active === 0 ? '#fff' : '#9e9a9a'}}
              > Home </li>
            </Link>
            <Link to='/projects'> 
              <li
                onClick={() => setActive(1)}
                style={{'color': active === 1 ? '#fff' : '#9e9a9a'}}
              > Projects </li>
            </Link>
          </ul>
          <img 
            src={Menu} 
            alt="Hamburger Menu Icon" 
            className='mobile'  
            onClick={ToggleMenu}
          />
          <a href="mailto:marvinezenwekwe@gmail.com" className='desktop'>
            <button className="in-touch"> Get in Touch </button>
          </a>
          <div id="mobile-navbar" className={`${menuToggle}`}>
            <ul>
              <Link to='/'>
                <li  
                  onClick={() => setActive(0)}
                  style={{'color': active === 0 ? '#fff' : '#9e9a9a'}}
                > Home </li>
              </Link>
              <Link to='/projects'> 
                <li
                  onClick={() => setActive(1)}
                  style={{'color': active === 1 ? '#fff' : '#9e9a9a'}}
                > Projects </li>
              </Link>
              <a href="mailto:marvinezenwekwe@gmail.com">
                <li style={{'color': '#ffdf75'}}> Get in Touch </li>
              </a>
            </ul>
          </div>
        </header>
      </div>
    
    </>
  );
}
 
export default Header;