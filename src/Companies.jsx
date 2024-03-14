import './Companies.css'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

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
// Images
import comapnie_logo_def from './image/default_companies_img.png'

// json test for api
import sliderdata from './slidersdata.json'
import { useState, useEffect } from 'react'
const Companies = () => {
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
        const newIndex = Math.min(startIndex2 + windowWidth <= 1024 ? 3 : 4, sliderdata.length - windowWidth <= 1024 ? 3 : 4);
        setStartIndex2(newIndex);
    };

    const prevSlide = () => {
        const newIndex = Math.max(startIndex2 - windowWidth <= 1024 ? 3 : 4, 0);
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
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search');

    useEffect(() => {
        if (searchTerm) {
            setSearchTermInput(searchTerm);
            fetchData(searchTerm);
        }
    }, [searchTerm]); // Fetch data when searchTerm changes

    const fetchData = async (searchTerm) => {
        setLoading(true);
        try {
            const token = 'your_api_token_here';
            const response = await axios.post(
                'https://api.sobotdadeh.com/v1/company',
                { title: searchTerm },
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

    const handleSubmit = async (event) => {
        event.preventDefault();
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
                          <select name="status" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="default">وضعیت</option>
                            <option value="active">فعال</option>
                            <option value="notactive">غیر فعال</option>
                          </select>
                          <img src={pageicon} alt="Search icon" />
                          <select name="activity">
                          <option value="سابقه فعالیت">سابقه فعالیت</option>
                          <option value="مازندران">مازندران</option>
                          <option value="خوزستان">خوزستان</option>
                          <option value="کرمان">کرمان</option>
                          </select>
                          <img src={searchicon2} alt="Search icon" className='searchicon2'/>
                          <button type="submit">جستجو</button>
                      </div>
                  </form>
               
            </div>
            </div>
            <div className="Madrese-slider">
                    <div className='slider'>
                    <h1>برترین شرکت‌ها</h1>
                    <div className='card-box'>
                        {sliderdata.slice(startIndex2, startIndex2 + windowWidth <= 1024 ? 3 : 4).map((key, index) => (
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
            <div className="Companies-center">
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
        </div>
     );
}
 
export default Companies;