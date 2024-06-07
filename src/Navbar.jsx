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
import { useTranslation } from 'react-i18next';

// translate 
export const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
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
  // nav 3

  const [isHovered3, setHovered3] = useState(false);
  const [isListHovered3, setListHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
  };

  const handleListMouseEnter3 = () => {
    setListHovered3(true);
  };

  const handleListMouseLeave3 = () => {
    setListHovered3(false);
  };

  const handleItemClick3 = (lng) => {
    console.log(`Changing language to: ${lng}`);
    if (typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lng);
    } else {
      console.error('i18n.changeLanguage is not a function');
    }
    setHovered3(false);
    setListHovered3(false);
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
                  <Link onClick={navmobileclick} to={'/'}>{t('صفحه اصلی')}</Link>
                  <span onClick={navmobilekhadamatclick} className={mobilekhadamat ? 'Nav-mobile-khadamat-a' : ''}>{t('خدمات ما')}<img src={expandmoreicon} alt="expand more"/></span>
                    {
                      mobilekhadamat ? (
                        <div className="Nav-mobile-khadamat-items">
                          <Link to='/madreseeghtesad' onClick={navmobileclick}>{t('کسب و کار تو')}</Link>
                          <Link to='/companies' onClick={navmobileclick}>{t('استعلام شرکت‌ها')}</Link>
                          <Link to='/shenakhtrisk' onClick={navmobileclick}>{t('تخمین ریسک')}</Link>
                          <Link to='/tarafeto' onClick={navmobileclick}>{t('طرف قرارداد تو بشناس')}</Link>
                        </div>
                      ) : null
                    }
                  <span onClick={navdarbareclick} className={mobiledarbare ? 'Nav-mobile-khadamat-a' : ''}>{t('درباره ثبات‌داده')}<img src={expandmoreicon} alt="expand more"/></span>
                  {
                    mobiledarbare ? (
                      <div className="Nav-mobile-khadamat-items">
                          <Link to='/ghavanin' onClick={navmobileclick}>{t('قوانین و مقررات')}</Link>
                          <li><Link to='/blog' onClick={handleItemClick2}>{t('مجله ثبات‌داده')}</Link></li>
                          <Link to='/soalatmotadavel' onClick={navmobileclick}>{t('سوالات متداول')}</Link>
                          <Link to='/aboutus' onClick={navmobileclick}>{t('درباره ما')}</Link>
                          <Link to='/contact' onClick={navmobileclick}>{t('تماس با ما')}</Link>
                        </div>
                    ) : null
                  }
                  <Link onClick={navmobileclick} to={'/khareji'}>{t('شرکت‌های خارجی')}</Link>
                  <hr />
                  <div className="Nav-mobile-login">
                    <Link onClick={navmobileclick} to={'/login'}>{isAuthenticated() ? t('پروفایل') : t('ورود/ثبت نام')}<img src={loginicon_nothome} alt="login icon" /></Link>
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
        <Link to={'/Login'}>{isAuthenticated() ? t('پروفایل') : t('ورود/ثبت نام')}<img src={isHomepage ? loginicon : loginicon_nothome} alt="Logo" width="24px" height="24px"/></Link>
      </div>
      <div className="Navbar-items2">
          {
            windowWidth >= 1450 ? (<Link to='khareji'>
            {t('شرکت‌های خارجی')}
            </Link>) : null
          }
        <span
           onMouseEnter={handleMouseEnter2}
           onMouseLeave={handleMouseLeave2}
        >
          {t('درباره ثبات‌داده')}
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
        {(isHovered2 || isListHovered2) && (
          <ul
            className="nav-list-hover2"
            onMouseEnter={handleListMouseEnter2}
            onMouseLeave={handleListMouseLeave2}
          >
            <li><Link to='/ghavanin' onClick={handleItemClick2}>{t('قوانین و مقررات')}</Link></li>
            <li><Link to='/blog' onClick={handleItemClick2}>{t('مجله ثبات‌داده')}</Link></li>
            <li><Link to='/soalatmotadavel' onClick={handleItemClick2}>{t('سوالات متداول')}</Link></li>
            <li><Link to='/aboutus' onClick={handleItemClick2}>{t('درباره ما')}</Link></li>
            <li><Link to='/contact' onClick={handleItemClick2}>{t('تماس با ما')}</Link></li>
          </ul>
        )}
        {/* next list items */}
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {t('خدمات ما')}
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
        {(isHovered || isListHovered) && (
          <ul
            className="nav-list-hover"
            onMouseEnter={handleListMouseEnter}
            onMouseLeave={handleListMouseLeave}
          >
          <li><Link to='/madreseeghtesad' onClick={handleItemClick2}>{t('کسب و کار تو')}</Link></li>
          <li><Link to='/companies' onClick={handleItemClick2}>{t('استعلام شرکت‌ها')}</Link></li>
          {
            windowWidth <= 1450 ? (<li><Link to='/khareji' onClick={handleItemClick2}>{t('شرکت‌های خارجی')}</Link></li>) : null
          }
          <li><Link to='/shenakhtrisk' onClick={handleItemClick2}>{t('تخمین ریسک')}</Link></li>
          </ul>
        )}
        <Link to='/'>
        {t('صفحه اصلی')}
        </Link>
        <div className='Search-nav'>
          <img src={isHomepage ? Searchicon : Searchicon_nothome} alt="Search icon" />
          <input type="text" placeholder={t('جست‌وجو در ثبات‌داده....')}/>
        </div>
      </div>
      {
        windowWidth <= 1200 ? null : (<Link to={'/'}><img className='Nav-logo' src="https://sobotdadeh.com/bestco/logost.png" alt="Logo" width="101px" height="62px"/></Link>)
      }
            </>)
          }
        </>) : (<>
        <div className="Navbar-items1">
           {/* select language */}
            <span
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              {i18n.language === 'fa' ? 'فارسی' : 'العربية'}
              <img src={isHomepage ? locationicon : loc_nothome} alt="Logo" width="24px" height="24px" />
            </span>
            {(isHovered3 || isListHovered3) && (
              <ul
                className="nav-list-hover3"
                onMouseEnter={handleListMouseEnter3}
                onMouseLeave={handleListMouseLeave3}
              >
                <li><a href="#" onClick={() => handleItemClick3('fa')}>فارسی</a></li>
                <li><a href="#" onClick={() => handleItemClick3('ar')}>العربية</a></li>
              </ul>
            )}
          {/* select language */}
        <Link to={'/Login'}>{isAuthenticated() ? t('پروفایل') : t('ورود/ثبت نام')}<img src={isHomepage ? loginicon : loginicon_nothome} alt="Logo" width="24px" height="24px"/></Link>
      </div>
      <div className="Navbar-items2">
      <span
           onMouseEnter={handleMouseEnter2}
           onMouseLeave={handleMouseLeave2}
        >
          {t('درباره ثبات‌داده')}
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
          {
            windowWidth >= 1450 ? (<Link to='khareji'>
            {t('شرکت‌های خارجی')}
            </Link>) : null
          }
        {(isHovered2 || isListHovered2) && (
          <ul
            className="nav-list-hover2"
            onMouseEnter={handleListMouseEnter2}
            onMouseLeave={handleListMouseLeave2}
          >
            <li><Link to='/ghavanin' onClick={handleItemClick2}>{t('قوانین و مقررات')}</Link></li>
            <li><Link to='/blog' onClick={handleItemClick2}>{t('مجله ثبات‌داده')}</Link></li>
            <li><Link to='/soalatmotadavel' onClick={handleItemClick2}>{t('سوالات متداول')}</Link></li>
            <li><Link to='/aboutus' onClick={handleItemClick2}>{t('درباره ما')}</Link></li>
            <li><Link to='/contact' onClick={handleItemClick2}>{t('تماس با ما')}</Link></li>
          </ul>
        )}
        {/* next list items */}
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {t('خدمات ما')}
          <img src={isHomepage ? expandmoreicon : expandmore_nothome} alt="expand down" width="24px" height="24px" />
        </span>
        {(isHovered || isListHovered) && (
          <ul
            className="nav-list-hover"
            onMouseEnter={handleListMouseEnter}
            onMouseLeave={handleListMouseLeave}
          >
          <li><Link to='/madreseeghtesad' onClick={handleItemClick2}>{t('کسب و کار تو')}</Link></li>
          <li><Link to='/companies' onClick={handleItemClick2}>{t('استعلام شرکت‌ها')}</Link></li>
          {
            windowWidth <= 1450 ? (<li><Link to='/khareji' onClick={handleItemClick2}>{t('شرکت‌های خارجی')}</Link></li>) : null
          }
          <li><Link to='/shenakhtrisk' onClick={handleItemClick2}>{t('تخمین ریسک')}</Link></li>
          <li><Link to='/tarafeto' onClick={navmobileclick}>{t('طرف قرارداد تو بشناس')}</Link></li>
          </ul>
        )}
        <Link to='/'>
        {t('صفحه اصلی')}
        </Link>
        <div className='Search-nav'>
          <img src={isHomepage ? Searchicon : Searchicon_nothome} alt="Search icon" />
          <input type="text" placeholder={t('جست‌وجو در ثبات‌داده....')}/>
        </div>
      </div>
      {
        windowWidth <= 1200 ? null : (<Link to={'/'}><img className='Nav-logo' src="https://sobotdadeh.com/bestco/logost.png" alt="Logo" width="111px" height="72px"/></Link>)
      }
        </>)
      }
    </nav>
  );
};


export default Navbar;
