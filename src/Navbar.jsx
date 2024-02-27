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
  const isHomepage = location.pathname === '/';
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
  // nav list 2
  const [isHovered2, setHovered2] = useState(false);
  const [isListHovered2, setListHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const handleListMouseEnter2 = () => {
    setListHovered2(true);
  };

  const handleListMouseLeave2 = () => {
    setListHovered2(false);
  };

  const handleItemClick2 = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the parent link
  };
  return (
    <nav className={isHomepage ? '' : 'nav-not-home'}>
      <div className="Navbar-items1">
        <a href="#" className={isHomepage ? 'loc-a1' : 'loc-a2'}>تهران<img src={isHomepage ? locationicon : loc_nothome} alt="Logo" width="24px" height="24px"/></a>
        <a href="#">ورود/ثبت نام<img src={isHomepage ? loginicon : loginicon_nothome} alt="Logo" width="24px" height="24px"/></a>
      </div>
      <div className="Navbar-items2">
        <a
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          درباره ثبات‌داده
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </a>
        {(isHovered2 || isListHovered2) && (
          <ul
            className="nav-list-hover2"
            onMouseEnter={handleListMouseEnter2}
            onMouseLeave={handleListMouseLeave2}
          >
            <li><Link to='/ghavanin'><a onClick={handleItemClick2}>قوانین و مقررات</a></Link></li>
            <li><Link to='/aboutus'><a onClick={handleItemClick2}>درباره ما</a></Link></li>
            <li><Link to='/soalatmotadavel'><a onClick={handleItemClick2}>سوالات متداول</a></Link></li>
            <li><Link to='/contact'><a onClick={handleItemClick2}>تماس با ما</a></Link></li>
          </ul>
        )}
        {/* next list items */}
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
      <Link to={'/'}><img src={logo} alt="Logo" width="61px" height="62px"/></Link>
    </nav>
  );
};


export default Navbar;
