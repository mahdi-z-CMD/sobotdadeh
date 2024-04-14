import './Khareji.css'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
// icons
import searchicon2 from './Icons/searchicon2.svg'
import leftarrowslider from './Icons/leftarrowslider.svg'
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
import closeicon from './Icons/closeicon.svg'

// images
import curusimg from './image/khareji_cursur.png'
import iranflag from './image/khareji_iran.png'
import iraqflag from './image/khareji_iraq.png'
import turkeyflag from './image/khareji_turkey.png'
import aueflag from './image/khareji_aue.png'
import milad from './image/khareji_milad.jpg'
import comapnie_logo_def from './image/default_companies_img.webp'

const Khareji = () => {
    const [country, setCountry] = useState(1)
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
                        <Link to={`/companie/${props.url}`}>
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
    // Search from homepage 
    const [searchInput, setSearchInput] = useState('');
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [statusFilter, setStatusFilter] = useState('default');
    const [companietypeFilter, setCompanietypeFilter] = useState('default');
    const [afterYearFilter, setAfterYearFilter] = useState('default');
    const [beforeYearFilter, setBeforeYearFilter] = useState('default');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search');

    useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          try {
              const token = 'your_api_token_here';
              const response = await axios.post(country === 1 ? 'https://api.sobotdadeh.com/v1/iraq_company' : 'https://api.sobotdadeh.com/v1/company',
                  { title: searchInput },
                  {
                      headers: {
                          'Api-Token': token,
                          'Content-Type': 'application/json'
                      }
                  }
              );
              if (response.status === 200) {
                  setApiData(response.data.data);
              } else {
                  console.error('Failed to fetch data');
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          } finally {
              setLoading(false);
          }
      };

      const debounceTimer = setTimeout(() => {
          if (searchInput) {
              fetchData();
          }
      }, 500); // Delay API call by 500ms

      return () => clearTimeout(debounceTimer); // Cleanup on unmount or input change
  }, [searchInput]);

  const handleInputChange = (e) => {
      setSearchInput(e.target.value);
  };
    // api to get data
    return ( 
        <div className="Khareji">
            <div className="Khareji-header">
                <h1>تجربه ارتباطی جهانی و بدون مرز با ثبات‌داده ...</h1>
                <img src={curusimg} alt="scroll down image" width="52px" height="60px"/>
            </div>
            <div className="Khareji-select-country">
                <h1>کشور مورد نظر را انتخاب نمائید ...</h1>
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
            <div className="Khareji-country-bg">
                <div className="Khareji-country-bg-overlay">
                     <h1>ایــــــــران</h1>
                </div>
            </div>
            <div className='Khareji-country-about'>
                <div className="Khareji-country-about-1">
                    <img src={milad} alt="milad tower" />
                </div>
                <div className="Khareji-country-about-2">
                    <h1>درباره ایران</h1>
                    <p>ایران به تعبیری یکی از قدرت‌های خاورمیانه است که از نظر اقتصادی و تکنولوژی و همچنین صنایع مختلف درحال رقابت با ابرقدرت‌های جهانی است. شرکت های مختلفی در زمینه های گوناگون در ایران مشغول به فعالیت میباشند که در ادامه با آنها آشنا خواهید شد.</p>
                </div>
            </div>
            <div className="Companies-header Companies-header-khareji">
            <div className="Companies-center" id='Companies-center-result'>
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
                              url={item.code}
                              bookmark="" // Assuming you want to pass this as a prop
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
         </div>   
        </div>        
     );
}
 
export default Khareji;