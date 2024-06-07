import './Khareji.css'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { removeCookies, changeusertoken } from './Profile.jsx';
import CryptoJS from 'crypto-js';
import { useTranslation } from 'react-i18next';
// icons
import searchicon2 from './Icons/searchicon2.svg'
import leftarrowslider from './Icons/leftarrowslider.svg'
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
import closeicon from './Icons/closeicon.svg'
import profile_mark from './Icons/Shenkhat_kharid_mark.svg'
// images
import curusimg from './image/khareji_cursur.png'
import iranflag from './image/khareji_iran.png'
import iraqflag from './image/khareji_iraq.png'
import turkeyflag from './image/khareji_turkey.png'
import aueflag from './image/khareji_aue.png'
import milad from './image/khareji_milad.jpg'
import comapnie_logo_def from './image/default_companies_img.webp'
import iranmap from './image/iranmap.png'
import iraqmap from './image/iragmap - Copy.jpg'
import kuwaitmap from './image/kuwaitmap.jpg'
import turkeymap from './image/turkeymap.jpg'
import iraqbg from './image/iraqbg.jpg'
import turkeybg from './image/turkeybg.jpg'
import kuwaitbg from './image/kuwaitbg.jpg'

const Khareji = () => {
  const { t } = useTranslation();
  // get window width
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
     const handleResize = () => {
       setWindowWidth(window.innerWidth);
     };
 
     window.addEventListener('resize', handleResize);
 
     // Cleanup the event listener when the component unmounts
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);
   // get window width
     // Components -----------------
     const Card = ((props)=>{
        return(
            <div key={props.key} className='cards2'>
                    <img src={props.bookmark === true ? bookmarkfillicon : bookmarkicon} alt="bookmark icon" className='bookmarkicon'/>
                    <div className='cards-info2'>
                      <img src={props.img} alt="profile companie"/>
                      <h1>{props.name}</h1>
                      <h2>{props.namecompanie}</h2>
                      <div className='cards-info-row2'>
                        <h3>{props.timerelease}</h3>
                        <Link to={`/companie/${props.url}/${country === 0 ? '0' : '1'}`}>
                            <div className='cards-info-row-more2'>
                                <h3>{t('نمایش بیشتر')}</h3>
                                <img src={leftarrowslider} alt="left icon"/>
                            </div>
                        </Link>
                      </div>
                    </div>
                </div>
        )
    })
    const removeCookies = async () => {
      try {
          // Make a logout request to invalidate the user's session on the server
          await axios.post('https://api.sobotdadeh.com/v1/auth/logout', {
              // Include any necessary data for the logout request, if required
          });
  
          // Remove the cookies from the client side
          Cookies.remove('api_key');
          Cookies.remove('token');
          Cookies.remove('IMEI');
          Cookies.remove('user');
  
          // Reload the page or redirect the user to the login page
          window.location.reload(); // You can replace this with any other desired action
      } catch (error) {
          Cookies.remove('api_key');
          Cookies.remove('token');
          Cookies.remove('IMEI');
          Cookies.remove('user');
  
          // Reload the page or redirect the user to the login page
          window.location.reload(); // You can replace this with any other desired action
      }
  };
  
  // CHANGE TOKEN
  const changeusertoken = async () => {
      try {
          const apiKey = Cookies.get('api_key');
          const token = Cookies.get('token');
          const imei = Cookies.get('IMEI');
          const decryptedValue = CryptoJS.AES.decrypt(Cookies.get('pn'), 'f2af0b0c9a27d7c893fa5d0ee2887c64').toString(CryptoJS.enc.Utf8);
          // Send the POST request with custom headers
          const response = await axios.post('https://api.sobotdadeh.com/v1/auth/check', {
              phone: decryptedValue,
              api_key: apiKey
          }, {
              headers: {
                  'Api-Token': apiKey,
                  'Authorization': `Bearer ${token}`,
                  'IMEI': imei
              }
          });
          if (response.data.status === true) {
              Cookies.set('api_key', response.data.data.api_key, { expires: 7 });
              Cookies.set('token', response.data.data.token, { expires: 7 });
              Cookies.set('user', 'true', { expires: 7 });
              window.location.reload();
          }
      } catch (error) {
          removeCookies()
          window.location.href = '/sobotdadeh/#/login';
      }
  };
  // CHANGE TOKEN
    // Search from homepage 
    const [searchInput, setSearchInput] = useState('');
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [companietypeFilter, setCompanietypeFilter] = useState('default');
    const [afterYearFilter, setAfterYearFilter] = useState('default');
    const [beforeYearFilter, setBeforeYearFilter] = useState('default');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search');
    const countryurl = queryParams.get('country');
    const statusurl = queryParams.get('status');
    const [statusFilter, setStatusFilter] = useState(statusurl === "0" ? "notactive" : statusurl === "1" ? "active" : "default");
    const [country, setCountry] = useState(parseInt(countryurl, 10)); // Convert countryurl to an integer
    const companiesCenterResultRef = useRef(null); // Create a ref for the target element

    useEffect(() => {
        if (searchTerm) { // Check if searchTerm is not empty
            const fetchData = async () => {
                setLoading(true);
                try {
                    companiesCenterResultRef.current.scrollIntoView({ behavior: 'smooth' });

                    const apiKey = Cookies.get('api_key');
                    const token = Cookies.get('token');
                    const imei = Cookies.get('IMEI');
                    const response = await axios.post(country === 1 ? 'https://api.sobotdadeh.com/v1/iraq_company' : 'https://api.sobotdadeh.com/v1/company',
                        { title: searchTerm }, // Use searchTerm instead of searchInput
                        {
                            headers: {
                                'Api-Token': apiKey,
                                'Authorization': `Bearer ${token}`,
                                'IMEI': imei
                            }
                        }
                    );
                    if (response.status === 200) {
                        setApiData(response.data.data);
                        fetchCompanyIds();
                        // Scroll to the target element after data is loaded
                    } else {
                        console.error('Failed to fetch data');
                    }
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        changeusertoken();
                    } else {
                        console.error('Error changing user password:', error); // Handle other errors
                    }
                } finally {
                    setLoading(false);
                }
            };

            const debounceTimer = setTimeout(() => {
                fetchData();
            }, 500); // Delay API call by 500ms

            return () => clearTimeout(debounceTimer); // Cleanup on unmount or input change
        }
    }, [searchTerm, country]); // Include country in the dependencies array
    
  const handleInputChange = (e) => {
      setSearchInput(e.target.value);
  };
    // api to get data
    // GRAB LIST OF BOOKMARKS
    const [companyIds, setCompanyIds] = useState([]);

    // Fetch the list of company IDs from the API
    const fetchCompanyIds = async () => {
        try {
            const apiKey = Cookies.get('api_key');
            const token = Cookies.get('token');
            const imei = Cookies.get('IMEI');
            
            const response = await axios.post('https://api.sobotdadeh.com/v1/bookmark', {
                type: country === 1 ? 'iraq' : 'iran'
            },{
                headers: {
                    'Api-Token': apiKey,
                    'Authorization': `Bearer ${token}`,
                    'IMEI': imei
                }
            });
            // Extract the company IDs from the response data
            let ids;
            if (country === 1) {
                ids = response.data.data.map(company => company.id);
            } else {
              ids = response.data.data.map(company => company.id);
            }
            setCompanyIds(ids);
        } catch (error) {
          if (error.response && error.response.status === 401) {
              changeusertoken()
          } else {
              console.error('Error changing user password:', error); // Handle other errors
          }
      }
    };
    const isCompanyIdAvailable = (companyId) => {
      return companyIds.includes(companyId);
    };
    // GRAB LIST OF BOOKMARKS
    return ( 
        <div className="Khareji">
            <div className="Khareji-header">
                <h1>تجربه ارتباطی جهانی و بدون مرز با ثبات‌داده ...</h1>
                <img src={curusimg} alt="scroll down image" width="52px" height="60px"/>
            </div>
            <div className="Khareji-select-country">
                <h1>کشور مورد نظر را انتخاب نمائید ...</h1>
                <img className='Khareji-select-country-location' src={country === 0 ? iranmap : country === 1 ? iraqmap : country === 3 ? turkeymap : country === 2 ? kuwaitmap : null} alt="map image" />
                <div className="Khareji-select-map">
                    <div className="Khareji-select-map-country">
                        <img src={iranflag} alt="iran flag" width="100%" height="30%" onClick={()=>setCountry(0)}/>
                        <h1 className={country === 0 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(0)}>ایران</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={iraqflag} alt="iraq flag" width="100%" height="30%" className='Khareji-select-map-country-iraqlogo' onClick={()=>setCountry(1)}/>
                        <h1 className={country === 1 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(1)}>عراق</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={aueflag} alt="AUE flag" width="100%" height="30%" onClick={()=>setCountry(2)}/>
                        <h1 className={country === 2 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(2)}>امارات</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={turkeyflag} alt="turkey flag" width="100%" height="30%" onClick={()=>setCountry(3)}/>
                        <h1 className={country === 3 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(3)}>ترکیه</h1>
                    </div>
                </div>
            </div>
            <div className={country === 0 ? 'Khareji-country-bg' : country === 1 ? 'Khareji-country-bg Khareji-country-bg-iraq' : country === 2 ? 'Khareji-country-bg Khareji-country-bg-turkey' : country === 3 ? 'Khareji-country-bg Khareji-country-bg-kuwait' : null}>
                <div className="Khareji-country-bg-overlay">
                     <h1>{country === 0 ? "ایــــــــران" : country === 1 ? "عــــــــراق" : country === 3 ? "تـــــرکیه" : country === 2 ? "كـــــویت" : null}</h1>
                </div>
            </div>
            <div className='Khareji-country-about'>
                <div className="Khareji-country-about-1">
                    <img src={country === 0 ? milad : country === 1 ? iraqbg : country === 3 ? kuwaitbg : country === 2 ? turkeybg : null} alt="milad tower" />
                </div>
                <div className="Khareji-country-about-2">
                    <h1>درباره ایران</h1>
                    <p>ایران به تعبیری یکی از قدرت‌های خاورمیانه است که از نظر اقتصادی و تکنولوژی و همچنین صنایع مختلف درحال رقابت با ابرقدرت‌های جهانی است. شرکت های مختلفی در زمینه های گوناگون در ایران مشغول به فعالیت میباشند که در ادامه با آنها آشنا خواهید شد.</p>
                </div>
            </div>
            <div className="Companies-header Companies-header-khareji">
            <div className="Companies-center" id='Companies-center-result' ref={companiesCenterResultRef}>
                <div className='Searchbox-main-companies'>
                    <div className='Searchbox-items22'>
                          <input
                              type="text"
                              name="Search"
                              value={searchInput}
                              onChange={handleInputChange}
                              placeholder="عنوان شرکت...."
                          />
                        <select name="status" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                          <option value="default">وضعیت شرکت</option>
                          <option value="notactive">غیر فعال</option>
                          <option value="active">فعال</option>
                        </select>
                        <select name="companietype" value={companietypeFilter} onChange={(e) => setCompanietypeFilter(e.target.value)}>
                          <option value="default">نوع شرکت</option>
                          <option value="سهامی خاص">سهامی خاص</option>
                          <option value="شرکت بامسیولیت محدود">شرکت بامسیولیت محدود</option>
                          <option value="تعاونی">تعاونی</option>
                          <option value="بامسئولیت محدود">بامسئولیت محدود</option>
                          <option value="موسسه">موسسه</option>
                          <option value="نامشخص">نامشخص</option>
                          <option value="تضامنی">تضامنی</option>
                          <option value="شعبه شرکت خارجی">شعبه شرکت خارجی</option>
                          <option value="نسبی">نسبی</option>
                          <option value="سهامی عام">سهامی عام</option>
                          <option value="مختلط سهامی">مختلط سهامی</option>
                        </select>

                        <select name="afteryear" value={afterYearFilter} onChange={(e) => setAfterYearFilter(e.target.value)}>
                          <option value="default">بعد از سال ...</option>
                          <option value="1400">1400</option>
                          <option value="1395">1395</option>
                          <option value="1390">1390</option>
                          <option value="1385">1385</option>
                          <option value="1380">1380</option>
                          <option value="1375">1375</option>
                          <option value="1370">1370</option>
                          <option value="1365">1365</option>
                          <option value="1360">1360</option>
                          <option value="1355">1355</option>
                          <option value="1350">1350</option>
                          <option value="1345">1345</option>
                          <option value="1340">1340</option>
                          <option value="1335">1335</option>
                          <option value="1330">1330</option>
                      </select>
                        <select name="beforeyear" value={beforeYearFilter} onChange={(e) => setBeforeYearFilter(e.target.value)}>
                        <option value="default">قبل از سال ...</option>
                          <option value="1400">1400</option>
                          <option value="1395">1395</option>
                          <option value="1390">1390</option>
                          <option value="1385">1385</option>
                          <option value="1380">1380</option>
                          <option value="1375">1375</option>
                          <option value="1370">1370</option>
                          <option value="1365">1365</option>
                          <option value="1360">1360</option>
                          <option value="1355">1355</option>
                          <option value="1350">1350</option>
                          <option value="1345">1345</option>
                          <option value="1340">1340</option>
                          <option value="1335">1335</option>
                          <option value="1330">1330</option>
                        </select>
                        <img src={searchicon2} alt="Search icon" className='searchicon2'/>
                        <button type="submit" className='filter-khareji'>فیلتر</button>
                    </div>
            </div>
            </div>
            {loading && <div className='Companies-slider'>
              <div className="slider2">
                <div className="card-box2">
                <Card
                                    name="در حال جستجو..."
                                    namecompanie="در حال جستجو..."
                                    img={comapnie_logo_def}
                                    timerelease="در حال جستجو..."
                                    url="در حال جستجو..."
                                    bookmark="" // Assuming you want to pass this as a prop
                                />
                <Card
                                    name="در حال جستجو..."
                                    namecompanie="در حال جستجو..."
                                    img={comapnie_logo_def}
                                    timerelease="در حال جستجو..."
                                    url="در حال جستجو..."
                                    bookmark="" // Assuming you want to pass this as a prop
                                />
                <Card
                                    name="در حال جستجو..."
                                    namecompanie="در حال جستجو..."
                                    img={comapnie_logo_def}
                                    timerelease="در حال جستجو..."
                                    url="در حال جستجو..."
                                    bookmark="" // Assuming you want to pass this as a prop
                                />
                <Card
                                    name="در حال جستجو..."
                                    namecompanie="در حال جستجو..."
                                    img={comapnie_logo_def}
                                    timerelease="در حال جستجو..."
                                    url="در حال جستجو..."
                                    bookmark="" // Assuming you want to pass this as a prop
                                />
                </div>
              </div>
              </div>}
              {
                statusFilter !== 'default' || companietypeFilter !== 'default' || afterYearFilter !== 'default' || beforeYearFilter !== 'default' ? (
                  <div className="Companies-delete-filter">
                      <h1>حذف فیلترها :</h1>
                      <div className="Companies-delete-filter-items">
                        {
                          statusFilter !== 'default' ? (<span onClick={()=>setStatusFilter('default')}>وضعیت شرکت<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                         {
                          companietypeFilter !== 'default' ? (<span onClick={()=>setCompanietypeFilter('default')}>نوع شرکت<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                         {
                          afterYearFilter !== 'default' ? (<span onClick={()=>setAfterYearFilter('default')}>بعد از سال<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                         {
                          beforeYearFilter !== 'default' ? (<span onClick={()=>setBeforeYearFilter('default')}>قبل از سال<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                      </div>
              </div>
                ) : null
              }
              {!loading && apiData.length > 0 && (
                  <div className="Companies-slider">
                    <div className='slider2'>
                      <div className='card-box2'>
                      {apiData
                          .filter(item => {
                            if (statusFilter === 'active') {
                              return item.status === 1; // Assuming active status is 'active'
                            } else if (statusFilter === 'notactive') {
                              return item.status !== 1; // Assuming not active status is 'notactive'
                            }
                            return true; // Return true if no status filter is applied
                          })
                          .filter(item => {
                            if (companietypeFilter !== 'default') {
                              return item.registrationTypeTitle === companietypeFilter; // Filter by company type
                            }
                            return true; // Return true if no company type filter is applied
                          })
                          .filter(item => {
                            if (afterYearFilter !== 'default') {
                              const year = parseInt(afterYearFilter);
                              const registrationYear = parseInt(item.registrationDate.substring(0, 4)); // Assuming registrationDate is in format 'YYYY-MM-DD'
                              return registrationYear > year; // Filter companies registered after the selected year
                            }
                            return true; // Return true if no afterYear filter is applied
                          })
                          .filter(item => {
                            if (beforeYearFilter !== 'default') {
                              const year = parseInt(beforeYearFilter);
                              const registrationYear = parseInt(item.registrationDate.substring(0, 4)); // Assuming registrationDate is in format 'YYYY-MM-DD'
                              return registrationYear < year; // Filter companies registered before the selected year
                            }
                            return true; // Return true if no beforeYear filter is applied
                          })
                          .map((item, index) => (
                            <Card
                              key={index}
                              name={item.title}
                              namecompanie={item.type.title}
                              img={comapnie_logo_def}
                              timerelease={item.registrationDate}
                              url={country === 0 ? item.code : item.id}
                              bookmark={isCompanyIdAvailable(country === 0 ? item.id : item.id)} // Assuming you want to pass this as a prop
                            />
                          ))
                        }

                        </div>
                    </div>
                </div>
            )}
            </div>
            <div className="Companies-slider">
                    <div className='slider2'>
                   {!loading && apiData.length === 0 && searchInput.trim() !== '' && (
                        <span className='slider2-notfound'>موردی یافت نشد</span>
                      )}
                    </div>
                   {
                    windowWidth <= 500 ? (
                      <div className='Profile-mobile'>
                        <div className="Profile-mobile-sub">
                            <h1>اشتراک ثبات داده</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                        </div>
                        {/* tarefe 1 */}
                        <div className="Profile-mobile-sub-tarefe">
                            <h1>اشتراک سطح ۱</h1>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۱</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۱</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۱</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۱</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۱</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۱</h1>
                            </div>
                            <span>۵۰,۰۰۰ تومان</span>
                            <button>خرید اشتراک</button>
                        </div>
                        {/* tarefe 2 */}
                        <div className="Profile-mobile-sub-tarefe tarefe-special">
                            <div className="tarefe-special-mahbob">
                                <h1>اشتراک سطح ۲</h1>
                                <h2>(محبوب کاربران)</h2>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۲</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۲</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۲</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۲</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۲</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۲</h1>
                            </div>
                            <span>۸۰,۰۰۰ تومان</span>
                            <button>خرید اشتراک</button>
                        </div>
                        {/* tarefe 3 */}
                        <div className="Profile-mobile-sub-tarefe">
                            <h1>اشتراک سطح ۳</h1>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۳</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۳</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۳</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۳</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۳</h1>
                            </div>
                            <div className="Profile-mobile-sub-tarefe-row">
                                <img src={profile_mark} alt="mark icon" />
                                <h1>امکانات سطح ۳</h1>
                            </div>
                            <span>۱۲۰,۰۰۰ تومان</span>
                            <button>خرید اشتراک</button>
                        </div>
                    </div>
                    ) : (
                      <div className="Profile-eshterak">
                      <div className="Profile-eshterak-header">
                          <h1>اشتراک ثبات‌داده</h1>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                      </div>
                      <div className="Profile-eshterak-price">
                          <div className="Profile-eshterak-price-cloum">
                              <h1>اشتراک سطح ۱</h1>
                              <h2>اشتراک سطح ۱</h2>
                              <h2>اشتراک سطح ۱</h2>
                              <h2>اشتراک سطح ۱</h2>
                              <h2>اشتراک سطح ۱</h2>
                              <span>۵۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum Profile-eshterak-price-cloum-special">
                              <div className="Profile-eshterak-price-cloum-special-header">
                                  <h1>امکانات سطح ۲</h1>
                                  <h2>(محبوب کاربران)</h2>
                              </div>
                              <h2>امکانات سطح ۲</h2>
                              <h2>امکانات سطح ۲</h2>
                              <h2>امکانات سطح ۲</h2>
                              <h2>امکانات سطح ۲</h2>
                              <span>۸۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum">
                              <h1>امکانات سطح ۳</h1>
                              <h2>امکانات سطح ۳</h2>
                              <h2>امکانات سطح ۳</h2>
                              <h2>امکانات سطح ۳</h2>
                              <h2>امکانات سطح ۳</h2>
                              <span>۱۲۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                      </div>
                  </div>
                    )
                   }
         </div>
        </div>        
     );
}
 
export default Khareji;