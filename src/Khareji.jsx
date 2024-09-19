import './Khareji.css'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { removeCookies, changeusertoken } from './Profile.jsx';
import CryptoJS from 'crypto-js';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// icons
import searchicon2 from './Icons/searchicon2.svg'
import leftarrowslider from './Icons/leftarrowslider.svg'
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
import closeicon from './Icons/closeicon.svg'
import profile_mark from './Icons/Shenkhat_kharid_mark.svg'
// images
import curusimg from './image/khareji_cursur.png'
import iranflag from './Icons/iran.webp'
import iraqflag from './Icons/iraq.webp'
import omanflag from './Icons/oman.webp'
import saudiflag from './Icons/saudi.webp'
import qatarflag from './Icons/QATAR.webp'
import milad from './image/khareji_milad.jpg'
import comapnie_logo_def from './image/default_companies_img.webp'
import iranmap from './image/iranmap.png'
import iraqmap from './image/iragmap - Copy.jpg'
import kuwaitmap from './image/kuwaitmap.jpg'
import turkeymap from './image/turkeymap.jpg'
import iraqbg from './image/iraqbg.webp'
import iraq3 from './image/iraq3.webp'
import ghatar1 from './image/ghatar.webp'
import ghatar2 from './image/qatar3.webp'
import saudi from './image/saudibg.webp'
import omanbg from './image/omanbg2.webp'

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
    const [statusFilter, setStatusFilter] = useState(
        statusurl === "0" ? "notactive" : statusurl === "1" ? "active" : "default"
    );
    const [country, setCountry] = useState(() => {
        const parsedCountry = parseInt(countryurl, 10);
        return isNaN(parsedCountry) ? 1 : parsedCountry;
    });

    const companiesCenterResultRef = useRef(null); // Create a ref for the target element

    // Update searchInput with searchTerm from queryParams
    useEffect(() => {
        if (searchTerm) {
            setSearchInput(searchTerm);
        }
    }, [searchTerm]);

    // Fetch data when searchInput or country changes
    useEffect(() => {
        if (searchInput) { // Check if searchInput is not empty
            const fetchData = async () => {
                setLoading(true);
                try {
                    companiesCenterResultRef.current.scrollIntoView({ behavior: 'smooth' });

                    const apiKey = Cookies.get('api_key');
                    const token = Cookies.get('token');
                    const imei = Cookies.get('IMEI');
                    const response = await axios.post(
                        country === 1
                            ? 'https://api.sobotdadeh.com/v1/iraq_company'
                            : 'https://api.sobotdadeh.com/v1/company',
                        { title: searchInput },
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
                        // fetchCompanyIds(); // This function is not defined in your provided code
                    } else {
                        console.error('Failed to fetch data');
                    }
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        changeusertoken();
                    } else {
                        console.error('Error fetching data:', error);
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
    }, [searchInput, country]); // Include country in the dependencies array

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
            <Helmet>
                <title>ثبات داده - شرکت‌های خارجی</title>
            </Helmet>
            <div className="Khareji-header">
                <h1>{t('تجربه ارتباطی جهانی و بدون مرز با ثبات‌داده ...')}</h1>
                <img src={curusimg} alt="scroll down image" width="52px" height="60px"/>
            </div>
            <div className="Khareji-select-country">
                <h1>{t('کشور مورد نظر را انتخاب نمائید ...')}</h1>
                <img className='Khareji-select-country-location' src={country === 0 ? "https://sobotdadeh.com/bestco/map1.svg" : country === 1 ? "https://sobotdadeh.com/bestco/map2.svg" : country === 3 ? "https://sobotdadeh.com/bestco/map3.svg" : country === 2 ? "https://sobotdadeh.com/bestco/map4.svg" : null} alt="map image" />
                <div className="Khareji-select-map">
                    <div className="Khareji-select-map-country">
                        <img src={iranflag} alt="iran flag" width="100%" height="30%" onClick={()=>setCountry(0)}/>
                        <h1 className={country === 0 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(0)}>{t('ایران')}</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={iraqflag} alt="iraq flag" width="100%" height="30%" className='Khareji-select-map-country-iraqlogo' onClick={()=>setCountry(1)}/>
                        <h1 className={country === 1 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(1)}>{t('عراق')}</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={qatarflag} alt="AUE flag" width="100%" height="30%" onClick={()=>setCountry(2)}/>
                        <h1 className={country === 2 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(2)}>{t('قطر')}</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={saudiflag} alt="saudi flag" width="100%" height="30%" onClick={()=>setCountry(3)}/>
                        <h1 className={country === 3 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(3)}>{t('عربستان سعودی')}</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={omanflag} alt="turkey flag" width="100%" height="30%" onClick={()=>setCountry(4)}/>
                        <h1 className={country === 3 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(4)}>{t('عمان')}</h1>
                    </div>
                </div>
            </div>
            <div className={country === 0 ? 'Khareji-country-bg' : country === 1 ? 'Khareji-country-bg Khareji-country-bg-iraq' : country === 2 ? 'Khareji-country-bg Khareji-country-bg-ghatar' : country === 3 ? 'Khareji-country-bg Khareji-country-bg-arabestan' : country === 4 ? 'Khareji-country-bg Khareji-country-bg-oman' : null}>
                <div className="Khareji-country-bg-overlay">
                     <h1>{country === 0 ? "ایــــــــران" : country === 1 ? "عــــــــراق" : country === 3 ? "عـــربـســتـــان ســعــــودـی" : country === 2 ? "قــــطــــر" : country === 4 ? "عــــــمــــــان" : null}</h1>
                </div>
            </div>
            <div className='Khareji-country-about'>
                <div className="Khareji-country-about-1">
                    <img src={country === 0 ? milad : country === 1 ? iraqbg : country === 3 ? saudi : country === 2 ? ghatar2 : country === 4 ? omanbg:null} alt="milad tower" width="190%" height="100%" />
                </div>
                <div className="Khareji-country-about-2">
                    <h1>{t('درباره')} {country === 0 ? t('ایــــــــران') : country === 1 ? t('عراق') : country === 3 ? t('عربستان سعودی') : country === 2 ? t('قطر') : country === 4 ? t('عمان') : null}</h1>
                    <p>{country === 0 ? t('ایران به تعبیری یکی از قدرت‌های خاورمیانه است که از نظر اقتصادی و تکنولوژی و همچنین صنایع مختلف درحال رقابت با ابرقدرت‌های جهانی است. شرکت های مختلفی در زمینه های گوناگون در ایران مشغول به فعالیت میباشند که در ادامه با آنها آشنا خواهید شد.') : country === 1 ? t('ایران به تعبیری یکی از قدرت‌های خاورمیانه است که از نظر اقتصادی و تکنولوژی و همچنین صنایع مختلف درحال رقابت با ابرقدرت‌های جهانی است. شرکت های مختلفی در زمینه های گوناگون در ایران مشغول به فعالیت میباشند که در ادامه با آنها آشنا خواهید شد.') : country === 3 ? t('دولت پادشاهی عربستان سعودی کشوری است که در بیشتر شبه جزیره عربی قرار دارد و به دلیل وجود اماکن مقدس مذهبی برای مسلمانان شناخته می شود. پایتخت آن ریاض است و شهرهای مکه مدینه از دیگر شهره های مهم این سرزمین شناخته می شوند. این کشور تحت حکومت آل سعود قرار دارد و به دلیل ذخایر نفتی و قدرت اقتصادی، بازیگری مهم در منطقه شناخته می شود. عربستان سعودی در سال های اخیر اصلاحات اقتصادی را برای تنوع بخشیدن به اقتصاد خود به دور از نفت، بهبود زیرساخت ها و جذب سرمایه گذاری خارجی انجام داده است. اقتصاد این کشور به شدت به صادرات نفت وابسته است که بخش بزرگی از تولید ناخالص داخلی و درآمد دولت این کشور را تشکیل می دهد. با توجه به آخرین نرخ اعلامی تولید ناخالص ملی از سوی صندوق بین المللی پول، 1.119 تریلیون دلار سهم اقتصاد عربستان سعودی می شود. دولت پادشاهی سعودی به عنوان یکی از بزرگترین تولیدکنندگان نفت جهان، یکی از اعضای مهم در سازمان اوپک معرفی شده است که نقش مهمی در بازار جهانی نفت ایفا می کند. در سال‌های اخیر، دولت عربستان اصلاحات اقتصادی را به عنوان بخشی از برنامه چشم‌انداز 2030 خود برای تنوع بخشیدن به اقتصاد به دور از نفت، جذب سرمایه‌گذاری خارجی و ارتقای بخش‌هایی مانند گردشگری، سرگرمی و فناوری اجرا کرده است. این کشور همچنین بر توسعه صنایع غیرنفتی، بهبود زیرساخت ها و ایجاد فرصت های شغلی برای جمعیت رو به رشد خود تمرکز دارد.') : country === 2 ? t('قطر کشوری است واقع در شمال شبه جزیره عربی که به دلیل نقش راهبردی در منطقه و خلیج فارس به عنوان بازیگری مهم در منطقه شناخته می شود. قطر به دلیل دارا بودن ذخایر قابل توجه انرژی های فسیلی، ثروت فراوانی را کسب کرده و این کشور را به یکی از ثروتمندترین کشورهای جهان تبدیل شده است. این کشور برای تنوع بخشیدن به اقتصاد و کاهش اتکای خود به درآمدهای نفت و گاز، سرمایه گذاری زیادی در زیرساخت ها، آموزش دانشگاهی و ورزش انجام داده است. قطر همچنین به دلیل میزبانی رویدادهای بین المللی مهم مانند جام جهانی فوتبال در سال 2022 شناخته می شود. این کشور با جمعیت حدوداً 2.7 میلیون نفری یکی از بالاترین تولید ناخالص داخلی سرانه را در جهان دارد که عمدتاً به دلیل ذخایر قابل توجه نفت و گاز طبیعی است. این کشور با موفقیت فعالیت اقتصادی خود را فراتر از نفت و گاز متنوع کرده است و بخش هایی مانند سرمایه گذاری مالی، املاک و گردشگری نقش مهمی را ایفا می کنند. دولت همچنین با اصلاحات اقتصادی ریشه ای، طراح های توسعه گرایی در جذب سرمایه گذاری خارجی و ارتقای رشد بخش خصوصی را به اجرا گذاشته است. به طور کلی، اقتصاد قطر با ثروت، تلاش‌های متنوع و سرمایه‌گذاری راهبردی برای توسعه پایدار مشخص می‌شود.') : country === 4 ? t('عمان کشوری است که در ساحل جنوب شرقی شبه جزیره عربی قرار گرفته است که پایتخت آن مسقط می باشد. عمان به دلیل مناظر متنوع خود از جمله بیابان ها، کوه ها و خط ساحلی در امتداد دریای عمان شناخته شده است. این کشور دارای سابقه طولانی تجارت دریایی و تبادل فرهنگی با تأثیرات تمدن های عربی، ایرانی و شرق آفریقا است. اقتصاد عمان اساسا بر صادرات نفت و گاز و همچنین گردشگری، کشاورزی و ماهیگیری استوار است. دولت پادشاهی عمان در تلاش‌ است تا با متنوع‌سازی اقتصاد، راه را برای کاهش وابستگی به درآمدهای نفتی و ترویج توسعه پایدار انجام داده دهد. این کشور در فرهنگ سیاسی بین المللی به عنوان سوئیس خاورمیانه شناخته می شود. با بررسی گزارش اقتصادی که از سوی دولت عمان ارائه شده است، تولید ناخالص ملی این کشور به 114.7 میلیارد دلار در رسیده است که رشد قابل توجه ای را در بین کشورهای غرب آسیا تجربه کرده است.'):null}</p>
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
                              placeholder={t('عنوان شرکت....')}
                          />
                        <select name="status" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                          <option value="default">{t('وضعیت شرکت')}</option>
                          <option value="notactive">{t('غیر فعال')}</option>
                          <option value="active">{t('فعال')}</option>
                        </select>
                        <select name="companietype" value={companietypeFilter} onChange={(e) => setCompanietypeFilter(e.target.value)}>
                          <option value="default">{t('نوع شرکت')}</option>
                          <option value="سهامی خاص">{t('سهامی خاص')}</option>
                          <option value="شرکت بامسیولیت محدود">{t('شرکت بامسیولیت محدود')}</option>
                          <option value="تعاونی">{t('تعاونی')}</option>
                          <option value="بامسئولیت محدود">{t('بامسئولیت محدود')}</option>
                          <option value="موسسه">{t('موسسه')}</option>
                          <option value="نامشخص">{t('نامشخص')}</option>
                          <option value="تضامنی">{t('تضامنی')}</option>
                          <option value="شعبه شرکت خارجی">{t('شعبه شرکت خارجی')}</option>
                          <option value="نسبی">{t('نسبی')}</option>
                          <option value="سهامی عام">{t('سهامی عام')}</option>
                          <option value="مختلط سهامی">{t('مختلط سهامی')}</option>
                        </select>

                        <select name="afteryear" value={afterYearFilter} onChange={(e) => setAfterYearFilter(e.target.value)}>
                          <option value="default">{t('بعد از سال ...')}</option>
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
                        <option value="default">{t('قبل از سال ...')}</option>
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
                        <button type="submit" className='filter-khareji'>{t('فیلتر')}</button>
                    </div>
            </div>
            </div>
            {
                statusFilter !== 'default' || companietypeFilter !== 'default' || afterYearFilter !== 'default' || beforeYearFilter !== 'default' ? (
                  <div className="Companies-delete-filter">
                      <h1>{t('حذف فیلترها')} :</h1>
                      <div className="Companies-delete-filter-items">
                        {
                          statusFilter !== 'default' ? (<span onClick={()=>setStatusFilter('default')}>{t('وضعیت شرکت')}<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                         {
                          companietypeFilter !== 'default' ? (<span onClick={()=>setCompanietypeFilter('default')}>{t('نوع شرکت')}<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                         {
                          afterYearFilter !== 'default' ? (<span onClick={()=>setAfterYearFilter('default')}>{t('بعد از سال')}<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                         {
                          beforeYearFilter !== 'default' ? (<span onClick={()=>setBeforeYearFilter('default')}>{t('قبل از سال')}<img src={closeicon} alt="close icon" width="24px" height="24px"/></span>):null
                        }
                      </div>
              </div>
                ) : null
              }
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
                        <span className='slider2-notfound'>{t('موردی یافت نشد')}</span>
                      )}
                    </div>
                    <div className="Profile-eshterak">
                      <div className="Profile-eshterak-price">
                          <div className="Profile-eshterak-price-cloum Profile-eshterak-price-cloum-special">
                              <h2>استعلام شرکت‌های ایرانی</h2>
                              <h2>تعداد استعلام در روز : 5</h2>
                              <span className='Profile-eshterak-price-takhfif'>۳۲,۰۰۰ تومان</span>
                              <span className='Profile-eshterak-price-now'>۱۵,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum">
                              <h2>استعلام شرکت‌های ایرانی و منطقه</h2>
                              <h2>تعداد استعلام در روز : 11</h2>
                              <span className='Profile-eshterak-price-takhfif'>۴۲,۰۰۰ تومان</span>
                              <span className='Profile-eshterak-price-now'>۲۷,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum Profile-eshterak-price-cloum-special">
                              <h2>استعلام شرکت‌های ایرانی و منطقه</h2>
                              <h2>تعداد استعلام در روز : 17</h2>
                              <span className='Profile-eshterak-price-takhfif'>۹۲,۰۰۰ تومان</span>
                              <span className='Profile-eshterak-price-now'>۴۲,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                      </div>
                      <div className="Profile-eshterak-price">
                          <div className="Profile-eshterak-price-cloum">
                              <h1>ارائه کاربردی</h1>
                              <h2>استعلام شرکت‌های ایرانی</h2>
                              <h2>مدت زمان : 90 روز</h2>
                              <h2>تعداد استعلام در روز : 10</h2>
                              <h2>نشانه دار کردن شرکت ها</h2>
                              <h2>نمایش شرکت های پیشنهادی</h2>
                              <span className='Profile-eshterak-price-takhfif'>۱,۵۰۰,۰۰۰ تومان</span>
                              <span className='Profile-eshterak-price-now'>۵۰۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum Profile-eshterak-price-cloum-special">
                              <div className="Profile-eshterak-price-cloum-special-header">
                                  <h1>ارائه حرفه ای</h1>
                                  <h2>(محبوب کاربران)</h2>
                              </div>
                              <h2>استعلام شرکت‌های ایرانی و منطقه</h2>
                              <h2>مدت زمان : 90 روز</h2>
                              <h2>تعداد استعلام در روز : 40</h2>
                              <h2>ارائه گزارش اختصاصی شرکت ها</h2>
                              <h2>نمایش شرکت های پیشنهادی ایرانی و منطقه</h2>
                              <span className='Profile-eshterak-price-takhfif'>۳,۵۰۰,۰۰۰ تومان</span>
                              <span className='Profile-eshterak-price-now'>۱,۵۰۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum">
                                 <div className="Profile-eshterak-price-cloum-special-header">
                                    <h1>ارائه اختصاصی</h1>
                                    <h2>(پیشنهادی ثبات داده)</h2>
                                </div>
                              <h2>استعلام شرکت‌های ایرانی و منطقه</h2>
                              <h2>مدت زمان : 90 روز</h2>
                              <h2>تعداد استعلام در روز : نامحدود</h2>
                              <h2>طرف قرارداد تو بشناس</h2>
                              <h2>ارائه گزارش اختصاصی و برسی ریسک معاملاتی</h2>
                              <span className='Profile-eshterak-price-takhfif'>۷,۵۰۰,۰۰۰ تومان</span>
                              <span className='Profile-eshterak-price-now'>۵,۰۰۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                      </div>
                  </div>
         </div>
        </div>        
     );
}
 
export default Khareji;