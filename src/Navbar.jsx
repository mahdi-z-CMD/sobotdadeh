import './Navbar.css'
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react'
import Searchicon from './Icons/search-13-512.png'
import Searchicon_nothome from './Icons/search_nothome.svg'
import logo from './Icons/logo.svg'
import locationicon from './Icons/locationicon.svg'
import loc_nothome from './Icons/loc_nothome.svg'
import expandmoreicon from './Icons/expandmoreicon.svg'
import expandmore_nothome from './Icons/expandmore_nothome.svg'
import loginicon_nothome from './Icons/loginicon_nothome.svg'
import loginicon from './Icons/loginicon.svg'

export const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/sobotdadeh';
  const [isHovered, setHovered] = useState(false);
  const [isListHovered, setListHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleListMouseEnter = () => {
    setListHovered(true);
  };

  const handleListMouseLeave = () => {
    setListHovered(false);
  };

  const handleItemClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the parent link
  };

  return (
    <nav className={isHomepage ? '' : 'nav-not-home'}>
      <div className="Navbar-items1">
        <a href="#" className={isHomepage ? 'loc-a1' : 'loc-a2'}>تهران<img src={isHomepage ? locationicon : loc_nothome} alt="Logo" width="24px" height="24px"/></a>
        <a href="#">ورود/ثبت نام<img src={isHomepage ? loginicon : loginicon_nothome} alt="Logo" width="24px" height="24px"/></a>
      </div>
      <div className="Navbar-items2">
        <Link to={'sobotdadeh/aboutus'}><a>درباره ثبات‌داده<img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px"/></a></Link>
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          خدمات ما
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </a>
        {(isHovered || isListHovered) && (
          <ul
            className="nav-list-hover"
            onMouseEnter={handleListMouseEnter}
            onMouseLeave={handleListMouseLeave}
          >
            <li><a href="#" onClick={handleItemClick}>ویژه</a></li>
            <li><a href="#" onClick={handleItemClick}>تعرفه</a></li>
            <li><a href="#" onClick={handleItemClick}>شرکت ها</a></li>
          </ul>
        )}
        <div className='Search-nav'>
          <img src={isHomepage ? Searchicon : Searchicon_nothome} alt="Search icon" />
          <input type="text" placeholder='جست‌وجو در ثبات‌داده....'/>
        </div>
      </div>
      <Link to={'sobotdadeh'}><img src={logo} alt="Logo" width="61px" height="62px"/></Link>
    </nav>
  );
};


export default Navbar;
