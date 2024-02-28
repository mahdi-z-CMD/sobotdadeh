import './Companies.css'
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
// Images


// json test for api
import sliderdata from './slidersdata.json'
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react'
const Companies = () => {
    const location = useLocation();
    const isHomepages = location.pathname === '/companies';

    // SLIDER BETARIN 
    let i = 1;
    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = Math.min(startIndex + 4, sliderdata.length - 4);
        setStartIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = Math.max(startIndex - 4, 0);
        setStartIndex(newIndex);
    };
      // Components -----------------
      const Card = ((props)=>{
        return(
            <div key={props.key} className='cards'>
                    <img src={props.bookmark == "true" ? bookmarkfillicon : bookmarkicon} alt="bookmark icon" className='bookmarkicon'/>
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
    return ( 
        <div>
            <div className="Companies-header">
                <div className='Searchbox-main2'>
                <h1>جستجوی شرکت ها</h1>
                    <div className='Searchbox-items2'>
                        <img src={Searchiconblack} alt="Search icon" />
                        <input type="text" name="Search" placeholder='عنوان شرکت....'/>
                        <img src={locicon} alt="Search icon" placeholder="شهر"/>
                        <select name="city">
                        <option value="تهران">تهران</option>
                        <option value="مازندران">مازندران</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="کرمان">کرمان</option>
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
            </div>
            </div>
            <div className="Madrese-slider">
                    <div className='slider'>
                    <h1>برترین شرکت‌ها</h1>
                    <div className='card-box'>
                        {sliderdata.slice(startIndex, startIndex + 4).map((key, index) => (
                    <Card name={key.name} namecompanie={key.description} img={key.imageUrl} timerelease="لحظاتی پیش، تهران" bookmark="" key={index}></Card>
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
                        <select name="city">
                        <option value="تهران">حوزه فعالیت شرکت</option>
                        <option value="مازندران">مازندران</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="کرمان">کرمان</option>
                        </select>
                        <select name="city">
                        <option value="تهران">سابقه فعالیت شرکت</option>
                        <option value="مازندران">مازندران</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="کرمان">کرمان</option>
                        </select>
                        <select name="city">
                        <option value="تهران">ترتیب بر اساس ...</option>
                        <option value="مازندران">مازندران</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="کرمان">کرمان</option>
                        </select>
                        <select name="activity">
                        <option value="سابقه فعالیت">کشور استقرار شرکت</option>
                        <option value="مازندران">مازندران</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="کرمان">کرمان</option>
                        </select>
                        <img src={searchicon2} alt="Search icon" className='searchicon2'/>
                        <button type="submit">فیلتر</button>
                    </div>
            </div>
            </div>
            <div className="Madrese-slider">
                    <div className='slider'>
                    <div className='card-box'>
                        {sliderdata.slice(startIndex, startIndex + 4).map((key, index) => (
                    <Card name={key.name} namecompanie={key.description} img={key.imageUrl} timerelease="لحظاتی پیش، تهران" bookmark="" key={index}></Card>
                    ))}
                        <div className='arrow-card'>
                        </div>
                    </div>
                    <div className='slider-showmore'>
                </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Companies;