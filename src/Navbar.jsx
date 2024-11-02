import './Navbar.css'
import isAuthenticated from './PrivateRoute'; // Import the isAuthenticated function
import {Link, useLocation , useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Searchicon from './Icons/search-13-512.png'
import Searchicon_nothome from './Icons/search_nothome.svg'
import logo from './Icons/logo.svg'
import locationicon from './Icons/languageiconsefid.svg'
import loc_nothome from './Icons/languageicon.svg'
import expandmoreicon from './Icons/expandmoreicon.svg'
import expandmore_nothome from './Icons/expandmore_nothome.svg'
import loginicon_nothome from './Icons/loginicon_nothome.svg'
import loginicon_login from './Icons/logedin.svg'
import loginicon_login_nothome from './Icons/logedin_nothome.svg'
import loginicon from './Icons/loginicon.svg'
import burgericon from './Icons/hamburger-menu.svg'
import burgericonclose from './Icons/hamburger-menu-close.svg'
import expandmore_mobile from './Icons/expandmore_mobile.svg'
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/fa'; // Import Persian locale for moment
import jalaliMoment from 'jalali-moment';
import closeicon from './Icons/closeicon.svg'
// translate 
export const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  // Get today's date
  const today = moment(); // Lunar Hijri date
  const solarDate = jalaliMoment().format('jD / jM / jYYYY'); // Persian (Jalali) date

  // Format the date based on the selected language
  const formattedDate = i18n.language === 'fa'
    ? solarDate // Display Persian Solar Hijri date if the language is Persian
    : today.format('YYYY-MM-DD'); // Display Lunar Hijri date or any other format for different languages

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
  // search bar 
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [isHomepage, setIsHomepage] = useState(true);
  const [searchResults, setSearchResults] = useState({
    pages: [],
    blogs: [],
  });
  const [pageContents, setPageContents] = useState({
    'درباره ما': "هدف از ثبات‌داده لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
    'طرف قرارداد تو بشناس': "طرف قرارداد تو بشناس لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
    'استعلام شرکت‌ها': "جستجوی شرکت ها استعلام شرکت‌ها لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
    'شرکت‌های خارجی': "شرکت‌های خارجی استعلام شرکت‌ها ایران عراق امارات ترکیه کشور مورد نظر...",
    'کسب و کار تو': "کسب و کار تو اهمیت کسب و کار تو از نگاه ثبات‌داده در عصر هوش مصنوعی و داده محور شدن تمامی کسب و کارها...",
    // Add more page contents here
  });
  const [blogMapping, setBlogMapping] = useState({}); // To store blog title to ID mapping

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [location.pathname]);

  // Fetch blog titles and IDs from the API and update state
  useEffect(() => {
    const fetchBlogTitles = async () => {
      try {
        const apiKey = Cookies.get('api_key');
        const token = Cookies.get('token');
        const imei = Cookies.get('IMEI');
        const response = await axios.post(
          'https://api.sobotdadeh.com/v1/article',
          {},
          {
            headers: {
              'Api-Token': apiKey,
              'Authorization': `Bearer ${token}`,
              'IMEI': imei,
            },
          }
        );

        const blogMap = {};
        response.data.data.forEach(blog => {
          blogMap[blog.title] = blog.id; // Store the ID with the title
        });

        setBlogMapping(blogMap); // Update the blogMapping state

      } catch (error) {
        console.error("Error fetching blog titles:", error);
      }
    };

    fetchBlogTitles();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const searchPagesAndBlogs = (searchTerm) => {
    const pagesResults = [];
    const blogsResults = [];

    for (const [page, content] of Object.entries(pageContents)) {
      if (content.toLowerCase().includes(searchTerm.toLowerCase())) {
        pagesResults.push(page);
      }
    }

    for (const [blogTitle, blogId] of Object.entries(blogMapping)) {
      if (blogTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
        blogsResults.push(blogTitle);
      }
    }

    return { pages: pagesResults, blogs: blogsResults };
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.trim() !== '') {
      const results = searchPagesAndBlogs(searchInput);
      setSearchResults(results);
    } else {
      setSearchResults({ pages: [], blogs: [] });
    }
  }, [searchInput, pageContents, blogMapping]);

  const handleResultClick = (result, type) => {
    if (type === 'blog') {
      const blogId = blogMapping[result];
      navigate(`/blog/${blogId}`);
    } else {
      switch (result) {
        case 'درباره ما':
          navigate('/درباره-ما');
          break;
        case 'طرف قرارداد تو بشناس':
          navigate('/طرف-قرارداد-تو-بشناس');
          break;
        case 'استعلام شرکت‌ها':
          navigate('/استعلام-شرکت');
          break;
        case 'شرکت‌های خارجی':
          navigate('/استعلام-شرکت-خارجی');
          break;
        case 'کسب و کار تو':
          navigate('/کسب-و-کار');
          break;
        // Add more cases as needed
        default:
          console.log('Page not found');
      }
    }
  };
  // search bar 
  // show language in mobile 
  const [isLanguageListOpen, setIsLanguageListOpen] = useState(false);

  const toggleLanguageList = () => {
    setIsLanguageListOpen(!isLanguageListOpen);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsLanguageListOpen(false); // Optionally close the list after selection
  };
  // show language in mobile 
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
                          <Link to='/کسب-و-کار' onClick={navmobileclick}>{t('کسب و کار تو')}</Link>
                          <Link to='/استعلام-شرکت' onClick={navmobileclick}>{t('استعلام شرکت‌ها')}</Link>
                          <Link to='/طرف-قرارداد-تو-بشناس' onClick={navmobileclick}>{t('طرف قرارداد تو بشناس')}</Link>
                        </div>
                      ) : null
                    }
                  <span onClick={navdarbareclick} className={mobiledarbare ? 'Nav-mobile-khadamat-a' : ''}>{t('درباره ثبات‌داده')}<img src={expandmoreicon} alt="expand more"/></span>
                  {
                    mobiledarbare ? (
                      <div className="Nav-mobile-khadamat-items">
                          <Link to='/قوانین-و-مقررات' onClick={navmobileclick}>{t('قوانین و مقررات')}</Link>
                          <Link to='/blog' onClick={navmobileclick}>{t('مجله ثبات‌داده')}</Link>
                          <Link to='/سوالات-متداول' onClick={navmobileclick}>{t('سوالات متداول')}</Link>
                          <Link to='/درباره-ما' onClick={navmobileclick}>{t('درباره ما')}</Link>
                          <Link to='/تماس-با-ما' onClick={navmobileclick}>{t('تماس با ما')}</Link>
                        </div>
                    ) : null
                  }
                  <Link onClick={navmobileclick} to={'/استعلام-شرکت-خارجی'}>{t('شرکت‌های خارجی')}</Link>
                  <hr />
                  <div className="Nav-mobile-login">
                    <Link onClick={navmobileclick} to={'/login'}>{isAuthenticated() ? t('پروفایل') : t('ورود/ثبت نام')}<img src={loginicon_nothome} alt="login icon" /></Link>
                  </div>
                  {/* select language */}
                  
                  <span onClick={toggleLanguageList} className='Nav-mobile-language-head'>
                  {i18n.language === 'fa' ? 'فارسی' : i18n.language === 'ar' ? 'العربية' : 'English'}
                    <img src={expandmore_mobile} alt="Logo" width="24px" height="24px" />
                  </span>
                  {isLanguageListOpen && (
                    <ul className="Nav-mobile-language-items">
                      <a href="#" onClick={() => handleLanguageChange('fa')}>فارسی</a>
                      <a href="#" onClick={() => handleLanguageChange('ar')}>العربية</a>
                    </ul>
                  )}
                  {/* select language */}
                </div>
              ) : (null)
            }
            </>) : (<>
              <div className="Navbar-items1">
        <a href="#" className={isHomepage ? 'loc-a1' : 'loc-a2'}>Fa<img src={isHomepage ? locationicon : loc_nothome} alt="Logo" width="24px" height="24px"/></a>
        <Link to={'/Login'}>{isAuthenticated() ? t('پروفایل') : t('ورود/ثبت نام')}<img src={isHomepage ? isAuthenticated() ? loginicon_login : loginicon : isAuthenticated() ? loginicon_login_nothome : loginicon_nothome} alt="Logo" width="24px" height="24px"/></Link>
      </div>
      <div className="Navbar-items2">
          {
            windowWidth >= 1450 ? (<Link to='استعلام-شرکت-خارجی'>
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
            <li><Link to='/قوانین-و-مقررات' onClick={handleItemClick2}>{t('قوانین و مقررات')}</Link></li>
            <li><Link to='/blog' onClick={handleItemClick2}>{t('مجله ثبات‌داده')}</Link></li>
            <li><Link to='/سوالات-متداول' onClick={handleItemClick2}>{t('سوالات متداول')}</Link></li>
            <li><Link to='/درباره-ما' onClick={handleItemClick2}>{t('درباره ما')}</Link></li>
            <li><Link to='/تماس-با-ما' onClick={handleItemClick2}>{t('تماس با ما')}</Link></li>
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
          <li><Link to='/کسب-و-کار' onClick={handleItemClick2}>{t('کسب و کار تو')}</Link></li>
          <li><Link to='/استعلام-شرکت' onClick={handleItemClick2}>{t('استعلام شرکت‌ها')}</Link></li>
          {
            windowWidth <= 1450 ? (<li><Link to='/استعلام-شرکت-خارجی' onClick={handleItemClick2}>{t('شرکت‌های خارجی')}</Link></li>) : null
          }
          </ul>
        )}
        <Link to='/'>
        {t('صفحه اصلی')}
        </Link>
        <div className='Search-nav'>
        <img src={isHomepage ? Searchicon : Searchicon_nothome} alt="Search icon" />
            <input
                type="text"
                placeholder={t('جست‌وجو در ثبات‌داده....')}
                value={searchInput}
                onChange={handleSearch}
            />
        {searchInput.trim() !== '' && (
  <div className='search-results'>
    <img src={closeicon} alt="close icon" onClick={() => setSearchInput('')} />
    {searchInput.trim() !== '' && (
        <div className='search-results'>
          <img src={closeicon} alt="close icon" onClick={() => setSearchInput('')} />
          {searchResults.pages.length > 0 && (
            <div>
              <h1>{t('صفحات')}</h1>
              {searchResults.pages.map((result) => (
                <div key={result} onClick={() => handleResultClick(result, 'page')} className='search-results-show'>
                  <p>{t('اگر به دنبال ')}<span className='search-results-show-text'>{searchInput}</span>{t(' هستید، در صفحه ')}
                  <span className='search-results-show-page' onClick={() => setSearchInput('')}>{result.replace(/([A-Z])/g, ' $1').trim()}</span>
                  {` است.`}
                  </p>
                </div>
              ))}
            </div>
          )}

          {searchResults.blogs.length > 0 && (
            <div>
              <h1>{t('مقالات')}</h1>
              {searchResults.blogs.map((result) => (
                <div key={result} onClick={() => handleResultClick(result, 'blog')} className='search-results-show'>
                  <p>{t('اگر به دنبال ')}<span className='search-results-show-text'>{searchInput}</span>{t(' هستید، در صفحه ')}
                  <span className='search-results-show-page' onClick={() => setSearchInput('')}>{result.replace(/([A-Z])/g, ' $1').trim()}</span>
                  {` است.`}
                  </p>
                </div>
              ))}
            </div>
          )}

          {searchResults.pages.length === 0 && searchResults.blogs.length === 0 && (
            <div className='search-results-show'>
              <p>{`هیچ نتیجه‌ای برای `}<span className='search-results-show-text'>{searchInput}</span>{` یافت نشد.`}</p>
            </div>
          )}
        </div>
      )}
  </div>
)}

        </div>
      </div>
      {
        windowWidth <= 1200 ? null : (<Link to={'/'}><img className='Nav-logo' src="https://sobotdadeh.com/bestco/logost.png" alt="Logo" width="140px" height="152px"/></Link>)
      }
            </>)
          }
        </>) : (<>
        <div className="Navbar-items1">
          
           {/* select language */}
          <span className='today-date'>{formattedDate}</span>
            <span
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              {i18n.language === 'fa' ? 'فارسی' : i18n.language === 'ar' ? 'العربية' : 'English'}
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
                <li><a href="#" onClick={() => handleItemClick3('en')}>English</a></li>
              </ul>
            )}
          {/* select language */}
        <Link to={'/Login'}>{isAuthenticated() ? t('پروفایل') : t('ورود/ثبت نام')}<img src={isHomepage ? isAuthenticated() ? loginicon_login : loginicon : isAuthenticated() ? loginicon_login_nothome : loginicon_nothome} alt="Logo" width="24px" height="24px"/></Link>
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
            windowWidth >= 1450 ? (<Link to='استعلام-شرکت-خارجی'>
            {t('شرکت‌های خارجی')}
            </Link>) : null
          }
        {(isHovered2 || isListHovered2) && (
          <ul
            className="nav-list-hover2"
            onMouseEnter={handleListMouseEnter2}
            onMouseLeave={handleListMouseLeave2}
          >
            <li><Link to='/قوانین-و-مقررات' onClick={handleItemClick2}>{t('قوانین و مقررات')}</Link></li>
            <li><Link to='/blog' onClick={handleItemClick2}>{t('مجله ثبات‌داده')}</Link></li>
            <li><Link to='/سوالات-متداول' onClick={handleItemClick2}>{t('سوالات متداول')}</Link></li>
            <li><Link to='/درباره-ما' onClick={handleItemClick2}>{t('درباره ما')}</Link></li>
            <li><Link to='/تماس-با-ما' onClick={handleItemClick2}>{t('تماس با ما')}</Link></li>
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
          <li><Link to='/کسب-و-کار' onClick={handleItemClick2}>{t('کسب و کار تو')}</Link></li>
          <li><Link to='/استعلام-شرکت' onClick={handleItemClick2}>{t('استعلام شرکت‌ها')}</Link></li>
          {
            windowWidth <= 1450 ? (<li><Link to='/استعلام-شرکت-خارجی' onClick={handleItemClick2}>{t('شرکت‌های خارجی')}</Link></li>) : null
          }
          <li><Link to='/طرف-قرارداد-تو-بشناس' onClick={navmobileclick}>{t('طرف قرارداد تو بشناس')}</Link></li>
          </ul>
        )}
        <Link to='/'>
        {t('صفحه اصلی')}
        </Link>
        <div className='Search-nav'>
        <img src={isHomepage ? Searchicon : Searchicon_nothome} alt="Search icon" />
            <input
                type="text"
                placeholder={t('جست‌وجو در ثبات‌داده....')}
                value={searchInput}
                onChange={handleSearch}
            />
          {searchInput.trim() !== '' && (
        <div className='search-results'>
          <img src={closeicon} alt="close icon" onClick={() => setSearchInput('')} />
          {searchResults.pages.length > 0 && (
            <div>
              <h1>{t('صفحات')}</h1>
              {searchResults.pages.map((result) => (
                <div key={result} onClick={() => handleResultClick(result, 'page')} className='search-results-show'>
                  <p>{t('اگر به دنبال ')}<span className='search-results-show-text'>{searchInput}</span>{t(' هستید، در صفحه ')}
                  <span className='search-results-show-page' onClick={() => setSearchInput('')}>{result.replace(/([A-Z])/g, ' $1').trim()}</span>
                  {` است.`}
                  </p>
                </div>
              ))}
            </div>
          )}

          {searchResults.blogs.length > 0 && (
            <div>
              <h1>{t('مقالات')}</h1>
              {searchResults.blogs.map((result) => (
                <div key={result} onClick={() => handleResultClick(result, 'blog')} className='search-results-show'>
                  <p>{t('اگر به دنبال ')}<span className='search-results-show-text'>{searchInput}</span>{t(' هستید، در صفحه ')}
                  <span className='search-results-show-page' onClick={() => setSearchInput('')}>{result.replace(/([A-Z])/g, ' $1').trim()}</span>
                  {` است.`}
                  </p>
                </div>
              ))}
            </div>
          )}

          {searchResults.pages.length === 0 && searchResults.blogs.length === 0 && (
            <div className='search-results-show'>
              <p>{`هیچ نتیجه‌ای برای `}<span className='search-results-show-text'>{searchInput}</span>{` یافت نشد.`}</p>
            </div>
          )}
        </div>
      )}
        </div>
      </div>
      {
        windowWidth <= 1200 ? null : (<Link to={'/'}><img className='Nav-logo' src="https://sobotdadeh.com/bestco/logost.png" alt="Logo" width="151px" height="92px"/></Link>)
      }
        </>)
      }
    </nav>
  );
};


export default Navbar;
