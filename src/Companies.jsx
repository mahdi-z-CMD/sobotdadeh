import './Companies.css'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
// icons
import Searchiconblack from './Icons/Searchiconblack.svg'
import locicon from './Icons/locicon.svg'
import pageicon from './Icons/pageinfoicon.svg'
import searchicon2 from './Icons/searchicon2.svg'
import leftarrowslider from './Icons/leftarrowslider.svg'
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
import expandleft from './Icons/expandleft.svg'
import expandright from './Icons/expandright.svg'
import closeicon from './Icons/closeicon.svg'
import leftarrow from './Icons/leftarrowslider.svg'
import rightkey from './Icons/expandright.svg'
import profile_mark from './Icons/Shenkhat_kharid_mark.svg'
// Images
import comapnie_logo_def from './image/default_companies_img.webp'

// json test for api
import sliderdata from './slidersdata.json'
import { useState, useEffect } from 'react'
const Companies = () => {
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
      console.log(windowWidth)
    };
  }, []);
  // get window width

    const [startIndex2, setStartIndex2] = useState(0);

    const nextSlide = () => {
      const newIndex = Math.min(startIndex2 + (windowWidth <= 500 ? 1 : windowWidth <= 1024 ? 3 : 4), sliderdata.length - (windowWidth <= 500 ? 1 : windowWidth <= 1024 ? 3 : 4));
      setStartIndex2(newIndex);
    };
    
    const prevSlide = () => {
      const newIndex = Math.max(startIndex2 - (windowWidth <= 500 ? 1 : windowWidth <= 1024 ? 3 : 4), 0);
      setStartIndex2(newIndex);
    };
      // Components -----------------
      const Card = ((props)=>{
        return(
            <div key={props.key} className='cards2'>
                    <img src={props.bookmark === "true" ? bookmarkfillicon : bookmarkicon} alt="bookmark icon" className='bookmarkicon'/>
                    <div className='cards-info2'>
                      <img src={props.img} alt="profile companie"/>
                      <h1>{props.name}</h1>
                      <h2>{props.namecompanie}</h2>
                      <div className='cards-info-row2'>
                        <h3>{props.timerelease}</h3>
                        <Link to={`/companie/${props.url}/0`}>
                            <div className='cards-info-row-more2'>
                                <h3>نمایش بیشتر</h3>
                                <img src={leftarrowslider} alt="left icon"/>
                            </div>
                        </Link>
                      </div>
                    </div>
                </div>
        )
    })
    // bartarin 
    // Components -----------------
    const Card2 = ((props)=>{
        return(
            <div key={props.key} className='cards'>
                    <img src={props.bookmark === "true" ? bookmarkfillicon : bookmarkicon} alt="bookmark icon" className='bookmarkicon'/>
                    <div className='cards-info'>
                      <img src={props.img} alt="profile companie"/>
                      <h1>{props.name}</h1>
                      <h2>{props.namecompanie}</h2>
                      <div className='cards-info-row'>
                        <h3>{props.timerelease}</h3>
                        <div className='cards-info-row-more'>
                          <h3>نمایش بیشتر</h3>
                          <img src={leftarrowslider} alt="left icon"/>
                        </div>
                      </div>
                    </div>
                </div>
        )
    })
    // Search from homepage 
    const [searchInput, setSearchInput] = useState('');
    const [searchTermInput, setSearchTermInput] = useState('');
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [statusFilter, setStatusFilter] = useState('default');
    const [companietypeFilter, setCompanietypeFilter] = useState('default');
    const [afterYearFilter, setAfterYearFilter] = useState('default');
    const [beforeYearFilter, setBeforeYearFilter] = useState('default');

    const fetchData = async (searchTerm) => {
      setLoading(true);
      try {
          const apiKey = Cookies.get('api_key');
          const token = Cookies.get('token');
          const imei = Cookies.get('IMEI');
  
          const response = await axios.post(
              'https://api.sobotdadeh.com/v1/company',
              { title: searchTerm },
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
          } else {
              console.error('Failed to fetch data');
          }
      } catch (error) {
        if (error.response && error.response.status === 401) {
            changeusertoken()
        } else {
            console.error('Error changing user password:', error); // Handle other errors
        }
    } finally {
          setLoading(false);
      }
  };
  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const targetElement = document.getElementById('Companies-center-result');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        fetchData(searchInput);
    };
    // api to get data

    return ( 
        <div>
            <div className="Companies-header">
                <div className='Searchbox-main2'>
                  <form onSubmit={handleSubmit}>
                    <h1>جستجوی شرکت ها</h1>
                    <div className='Searchbox-items2'>
                          <img src={Searchiconblack} alt="Search icon" />
                          <input type="text" name="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='عنوان شرکت....'/>
                          <img src={locicon} alt="Search icon" placeholder="شهر"/>
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
                          <img src={pageicon} alt="Search icon" />
                          <select name="activity">
                          <option value="سابقه فعالیت">سابقه فعالیت</option>
                          <option value="مازندران">مازندران</option>
                          <option value="خوزستان">خوزستان</option>
                          <option value="کرمان">کرمان</option>
                          </select>
                          <button type="submit">جستجو<img src={searchicon2} alt="Search icon" className='searchicon2'/></button>
                      </div>
                  </form>
               
            </div>
            </div>
            <div className="Madrese-slider">
                    <div className='slider'>
                    <h1>برترین شرکت‌ها</h1>
                    <div className='card-box'>
                      <div className="Blog-Cards-arrows2">
                                <img src={rightkey} alt="left key" className='Blog-Cards-arrows-right2' onClick={nextSlide}/>
                                <img src={leftarrow} alt="left key" className='Blog-Cards-arrows-left2' onClick={prevSlide}/>
                        </div>
                      {sliderdata.slice(startIndex2, startIndex2 + (windowWidth <= 500 ? 1 : windowWidth <= 1500 ? 3 : 4)).map((key, index) => (
                        <Card2 name={key.name} namecompanie={key.description} img={key.imageUrl} timerelease="لحظاتی پیش، تهران" bookmark="" key={index}></Card2>
                      ))}
                      <div className='arrow-card'>
                        <img src={expandright} alt="right icon" className='arrow-card-right' onClick={nextSlide}/>
                        <img src={expandleft} alt="left icon" className='arrow-card-left' onClick={prevSlide}/>
                      </div>
                    </div>
                    <div className='slider-showmore'>
                </div>
                </div>
            </div>
            <div className="Companies-filter-header">
                <h1>استعلام شرکت‌ها در ثبات‌داده</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </div>
            <a href="#Companies-center-result"></a>
            <div className="Companies-center" id='Companies-center-result'>
                <div className='Searchbox-main-companies'>
                    <div className='Searchbox-items22'>
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
                        <button type="submit">فیلتر</button>
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
                              url={item.code}
                              bookmark="" // Assuming you want to pass this as a prop
                            />
                          ))
                        }
                        

                        </div>
                    </div>
                </div>
            )}
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
 
export default Companies;