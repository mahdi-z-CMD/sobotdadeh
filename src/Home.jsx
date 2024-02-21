import './Home.css'
import Navbar from './Navbar';
import React, { useState } from 'react';
// icons
import mostatil from './Icons/mostatil.svg'
import Searchiconblack from './Icons/Searchiconblack.svg'
import locicon from './Icons/locicon.svg'
import pageicon from './Icons/pageinfoicon.svg'
import searchicon2 from './Icons/searchicon2.svg'
import expandleft from './Icons/expandleft.svg'
import expandright from './Icons/expandright.svg'
import leftarrowslider from './Icons/leftarrowslider.svg'
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
// images 
import sliderdata from './slidersdata.json'
export const Homepage = () => {
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
      <Navbar></Navbar>
      <header>
      <div className="overlay">
        <div className='overlaynotrow'>
            <h1>با ما به دنبال فرصت های مشارکتی جدید باشید</h1>
            <h2>فقط <span>۳</span> مرحله تا پیدا کردن شرکت فاصله دارید</h2>      
        </div>
        <div className='overlaym'>
                <h1>ثبات‌داده</h1>
                <h2>پلتفرمی برای همه شرکت‌ها</h2>
        </div>
        <img src={mostatil} alt='nothing'/>
      </div>
      </header>
      <main>
        <div className='Searchbox-main'>
            <h1>جستجوی شرکت ها</h1>
            <div className='Searchbox-items'>
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
        </div>
      
      </main>
	</div>
  )
}
export default Homepage;