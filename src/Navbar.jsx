import './Navbar.css'
import isAuthenticated from './PrivateRoute'; // Import the isAuthenticated function
import {Link, useLocation} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Searchicon from './Icons/search-13-512.png'
import Searchicon_nothome from './Icons/search_nothome.svg'
import logo from './Icons/logo.svg'
import locationicon from './Icons/locationicon.svg'
import loc_nothome from './Icons/loc_nothome.svg'
import expandmoreicon from './Icons/expandmoreicon.svg'
import expandmore_nothome from './Icons/expandmore_nothome.svg'
import loginicon_nothome from './Icons/loginicon_nothome.svg'
import loginicon from './Icons/loginicon.svg'
import burgericon from './Icons/hamburger-menu.svg'
import burgericonclose from './Icons/hamburger-menu-close.svg'
import expandmore_mobile from './Icons/expandmore_mobile.svg'

export const Navbar = () => {
   // get window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [mobilenavbar,setMobilenavbar] = useState(false)
  const [mobilekhadamat,setMobilekhadamat] = useState(false)
  const [mobiledarbare,setMobiledarbare] = useState(false)

  const navmobileclick = ()=>{
    if (mobilenavbar === false) {
      setMobilenavbar(true)
    }else{
      setMobilenavbar(false)
    }
  }
  const navmobilekhadamatclick = ()=>{
    if (mobilekhadamat === false) {
      setMobilekhadamat(true)
    }else{
      setMobilekhadamat(false)
    }
  }
  const navdarbareclick = ()=>{
    if (mobiledarbare === false) {
      setMobiledarbare(true)
    }else{
      setMobiledarbare(false)
    }
  }
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
   // get window width
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
      {/* <div className="accept-cookies">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum, nihil repellat recusandae fugit qui cumque dolores numquam quae quaerat!</p>
          <button>accept</button>
      </div> */}
      {
        windowWidth <= 500 ? (<>
          {
            isMobile === true ? (<>
            <img src={mobilenavbar ? burgericonclose : burgericon} alt="hamburger menu icon" width="34px" height="34px" onClick={navmobileclick}/>
            {
              mobilenavbar ? (
                <div className='Nav-mobile'>
                  <Link onClick={navmobileclick} to={'/'}>صفحه اصلی</Link>
                  <span onClick={navmobilekhadamatclick} className={mobilekhadamat ? 'Nav-mobile-khadamat-a' : ''}>خدمات ما<img src={expandmoreicon} alt="expand more"/></span>
                    {
                      mobilekhadamat ? (
                        <div className="Nav-mobile-khadamat-items">
                          <Link to='/madreseeghtesad' onClick={navmobileclick}>کسب و کار تو</Link>
                          <Link to='/companies' onClick={navmobileclick}>استعلام شرکت‌ها</Link>
                          <Link to='/shenakhtrisk' onClick={navmobileclick}>تخمین ریسک</Link>
                        </div>
                      ) : null
                    }
                  <span onClick={navdarbareclick} className={mobiledarbare ? 'Nav-mobile-khadamat-a' : ''}>درباره ثبات‌داده<img src={expandmoreicon} alt="expand more"/></span>
                  {
                    mobiledarbare ? (
                      <div className="Nav-mobile-khadamat-items">
                          <Link to='/ghavanin' onClick={navmobileclick}>قوانین و مقررات</Link>
                          <Link to='/aboutus' onClick={navmobileclick}>درباره ما</Link>
                          <Link to='/soalatmotadavel' onClick={navmobileclick}>سوالات متداول</Link>
                          <Link to='/contact' onClick={navmobileclick}>تماس با ما</Link>
                        </div>
                    ) : null
                  }
                  <Link onClick={navmobileclick} to={'/khareji'}>شرکت‌های خارجی</Link>
                  <hr />
                  <div className="Nav-mobile-login">
                    <Link onClick={navmobileclick} to={'/login'}>{isAuthenticated() ? "پروفایل" : "ورود/ثبت نام"}<img src={loginicon_nothome} alt="login icon" /></Link>
                  </div>
                  <div className="Nav-mobile-language">
                    <Link>فارسی<img src={expandmore_mobile} alt="" /></Link>
                  </div>
                </div>
              ) : (null)
            }
            </>) : (<>
              <div className="Navbar-items1">
        <a href="#" className={isHomepage ? 'loc-a1' : 'loc-a2'}>Fa<img src={isHomepage ? locationicon : loc_nothome} alt="Logo" width="24px" height="24px"/></a>
        <Link to={'/Login'}>{isAuthenticated() ? "پروفایل" : "ورود/ثبت نام"}<img src={isHomepage ? loginicon : loginicon_nothome} alt="Logo" width="24px" height="24px"/></Link>
      </div>
      <div className="Navbar-items2">
          {
            windowWidth >= 1450 ? (<Link to='khareji'>
            شرکت‌های خارجی
            </Link>) : null
          }
        <span
           onMouseEnter={handleMouseEnter2}
           onMouseLeave={handleMouseLeave2}
        >
          درباره ثبات‌داده
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
        {(isHovered2 || isListHovered2) && (
          <ul
            className="nav-list-hover2"
            onMouseEnter={handleListMouseEnter2}
            onMouseLeave={handleListMouseLeave2}
          >
            <li><Link to='/ghavanin' onClick={handleItemClick2}>قوانین و مقررات</Link></li>
            <li><Link to='/aboutus' onClick={handleItemClick2}>درباره ما</Link></li>
            <li><Link to='/soalatmotadavel' onClick={handleItemClick2}>سوالات متداول</Link></li>
            <li><Link to='/contact' onClick={handleItemClick2}>تماس با ما</Link></li>
          </ul>
        )}
        {/* next list items */}
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          خدمات ما
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
        {(isHovered || isListHovered) && (
          <ul
            className="nav-list-hover"
            onMouseEnter={handleListMouseEnter}
            onMouseLeave={handleListMouseLeave}
          >
          <li><Link to='/madreseeghtesad' onClick={handleItemClick2}>کسب و کار تو</Link></li>
          <li><Link to='/companies' onClick={handleItemClick2}>استعلام شرکت‌ها</Link></li>
          {
            windowWidth <= 1450 ? (<li><Link to='/khareji' onClick={handleItemClick2}>شرکت‌های خارجی</Link></li>) : null
          }
          <li><Link to='/shenakhtrisk' onClick={handleItemClick2}>تخمین ریسک</Link></li>
          </ul>
        )}
        <Link to='/'>
        صفحه اصلی
        </Link>
        <div className='Search-nav'>
          <img src={isHomepage ? Searchicon : Searchicon_nothome} alt="Search icon" />
          <input type="text" placeholder='جست‌وجو در ثبات‌داده....'/>
        </div>
      </div>
      {
        windowWidth <= 1200 ? null : (<Link to={'/'}><img src={logo} alt="Logo" width="61px" height="62px"/></Link>)
      }
            </>)
          }
        </>) : (<>
        <div className="Navbar-items1">
        <span className={isHomepage ? 'loc-a1' : 'loc-a2'}>Fa<img src={isHomepage ? locationicon : loc_nothome} alt="Logo" width="24px" height="24px"/></span>
        <Link to={'/Login'}>{isAuthenticated() ? "پروفایل" : "ورود/ثبت نام"}<img src={isHomepage ? loginicon : loginicon_nothome} alt="Logo" width="24px" height="24px"/></Link>
      </div>
      <div className="Navbar-items2">
          {
            windowWidth >= 1450 ? (<Link to='khareji'>
            شرکت‌های خارجی
            </Link>) : null
          }
        <span
           onMouseEnter={handleMouseEnter2}
           onMouseLeave={handleMouseLeave2}
        >
          درباره ثبات‌داده
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
        {(isHovered2 || isListHovered2) && (
          <ul
            className="nav-list-hover2"
            onMouseEnter={handleListMouseEnter2}
            onMouseLeave={handleListMouseLeave2}
          >
            <li><Link to='/ghavanin' onClick={handleItemClick2}>قوانین و مقررات</Link></li>
            <li><Link to='/aboutus' onClick={handleItemClick2}>درباره ما</Link></li>
            <li><Link to='/soalatmotadavel' onClick={handleItemClick2}>سوالات متداول</Link></li>
            <li><Link to='/contact' onClick={handleItemClick2}>تماس با ما</Link></li>
          </ul>
        )}
        {/* next list items */}
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          خدمات ما
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
        {(isHovered || isListHovered) && (
          <ul
            className="nav-list-hover"
            onMouseEnter={handleListMouseEnter}
            onMouseLeave={handleListMouseLeave}
          >
          <li><Link to='/madreseeghtesad' onClick={handleItemClick2}>کسب و کار تو</Link></li>
          <li><Link to='/companies' onClick={handleItemClick2}>استعلام شرکت‌ها</Link></li>
          {
            windowWidth <= 1450 ? (<li><Link to='/khareji' onClick={handleItemClick2}>شرکت‌های خارجی</Link></li>) : null
          }
          <li><Link to='/shenakhtrisk' onClick={handleItemClick2}>تخمین ریسک</Link></li>
          </ul>
        )}
        <Link to='/'>
        صفحه اصلی
        </Link>
        <div className='Search-nav'>
          <img src={isHomepage ? Searchicon : Searchicon_nothome} alt="Search icon" />
          <input type="text" placeholder='جست‌وجو در ثبات‌داده....'/>
        </div>
      </div>
      {
        windowWidth <= 1200 ? null : (<Link to={'/'}><img src={logo} alt="Logo" width="61px" height="62px"/></Link>)
      }
        </>)
      }
    </nav>
  );
};


export default Navbar;
