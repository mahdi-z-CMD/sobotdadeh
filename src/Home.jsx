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
import expanddown from './Icons/expanddown.svg'
import masir1icon from './Icons/masir1.svg'
import masir2icon from './Icons/masir2.svg'
import masir3icon from './Icons/masir3.svg'
import arrowmasiricon from './Icons/arrowmasir.svg'
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
                  <img src={mostatil} alt='nothing'/>
        </div>
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
            <div className='slider-showmore'>
            <span>مشاهده بیشتر</span>
            <img src={expanddown} alt="expand down icon" />
        </div>
        </div>
      </main>
      <div className='masir'>
          <div className='masir-detail'>
                  <div className='masir-header'>
                    <h1>مسیر همکاری با شرکت ها در ثبات‌داده</h1>
                  </div>
                  <div className='masir-middle'>
                    <div className='masir-middle-items'>
                        <img src={masir1icon} alt="expand down icon" width="73px" height="73px"/>
                        <h1>عضویت در ثبات‌داده</h1>
                        <p>با ثبت اطلاعات موردنظرتان در سایت ثبات‌داده قدم اول برای پیدا کردن شرکت مناسب خود را بردارید.</p>
                    </div>
                    <img src={arrowmasiricon} alt="expand down icon" className='arrow-icon1'/>
                    <div className='masir-middle-items'>
                        <img src={masir2icon} alt="expand down icon" width="73px" height="73px"/>
                        <h1>ثبت درخواست</h1>
                        <p>با ثبت یک درخواست کامل در سایت به پیدا کردن شرکت مناسب کار خود نزدیک خواهید شد.</p>
                    </div>
                    <img src={arrowmasiricon} alt="expand down icon" className='arrow-icon2'/>
                    <div className='masir-middle-items'>
                        <img src={masir3icon} alt="expand down icon" width="73px" height="73px"/>
                        <h1>ارتباط با شرکت</h1>
                        <p>مدتی پس از ثبت درخواست وخرید اشتراک شما به شرکت مدنظر متصل خواهید شد.</p>
                    </div>
                  </div>
          </div>
      </div>
	</div>
  )
}
export default Homepage;