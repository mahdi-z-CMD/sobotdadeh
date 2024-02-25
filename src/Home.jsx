import './Home.css'
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
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
import expanddownsoalat from './Icons/expanddownsoalat.svg'
import expandmoresolat from './Icons/expandmoresolat.svg'
import arrowback from './Icons/arrowback.svg'
import aparaticon from './Icons/aparaticon.svg'
import telegramicon from './Icons/telegramicon.svg'
import instagramicon from './Icons/instagramicon.svg'
// images
import boximage1 from './image/box1.png' 
import boximage2 from './image/box2.png' 
import scrolldownicon from './image/scrolldown.png'
import majaleimg1 from './image/majale1.png' 
import majaleimg2 from './image/majale2.png' 
import majaleimg3 from './image/majale3.png'
import namadimage1 from './image/namad1.png'
import namadimage2 from './image/namad2.png'
import namadimage3 from './image/namad3.png'
import foterimg from './image/foter.svg' 

// json test for api
import sliderdata from './slidersdata.json'

export const Homepage = () => {
  // this section is for box soalat 
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleBoxClick = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index));
  };  
  // this section is for box soalat 

  // thie section is for box khadamat animation 
  const [scrolled, setScrolled] = useState(false);
  const [majale, setMajale] = useState({
    des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    image: majaleimg3
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const boxKhadamat = document.querySelector('.box-khadamat');
      const boxKhadamatOffset = boxKhadamat.offsetTop;
      const boxKhadamatHeight = boxKhadamat.clientHeight;

      if (scrollTop >= boxKhadamatOffset && scrollTop < boxKhadamatOffset + boxKhadamatHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // thie section is for box khadamat animation
  // this section is for api images ------------------------
  const [imageURL1, setImageURL1] = useState('');
  const [imageURL2, setImageURL2] = useState('');
  const [imageURL3, setImageURL3] = useState('');

  useEffect(() => {
    // Function to fetch random images from Unsplash API for each box
    const fetchRandomImages = async () => {
      try {
        const response1 = await fetch('https://api.unsplash.com/photos/random?client_id=UjLM3yr5HKHkZ1-2_bvC8ljtfKbpE6cPjslblQvKTvc');
        if (!response1.ok) {
          throw new Error('Network response was not ok');
        }
        const data1 = await response1.json();
        setImageURL1(data1.urls.regular);

        const response2 = await fetch('https://api.unsplash.com/photos/random?client_id=UjLM3yr5HKHkZ1-2_bvC8ljtfKbpE6cPjslblQvKTvc');
        if (!response2.ok) {
          throw new Error('Network response was not ok');
        }
        const data2 = await response2.json();
        setImageURL2(data2.urls.regular);

        const response3 = await fetch('https://api.unsplash.com/photos/random?client_id=UjLM3yr5HKHkZ1-2_bvC8ljtfKbpE6cPjslblQvKTvc');
        if (!response3.ok) {
          throw new Error('Network response was not ok');
        }
        const data3 = await response3.json();
        setImageURL3(data3.urls.regular);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    // Call the fetchRandomImages function when the component mounts
    fetchRandomImages();
  }, []); 
  // this section is for api images ----------------------------------------------
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
      <div className="kharid">
        <h1>به ثبات‌داده اعتماد کن ما کنارتان هستیم ...</h1>
        <h2>ارائه بهترین شرکت ها در همه حوزه‌ها</h2>
        <a href="#">خرید اشتراک</a>
      </div>
      <div className={`box-khadamat ${scrolled ? 'scrolled' : ''}`}>
      <div className="box-khadamat-img">
        <img src={scrolled ? boximage2 : boximage1} alt="box image" />
      </div>
      <div className="box-khadamat-text">
        <h1>{scrolled ? 'باکس خدمات 2' : 'باکس خدمات'}</h1>
        <p>{scrolled ? 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'}</p>
        <img src={scrolldownicon} alt="scroll icon" className='scrollicon-khadamat'/>
      </div>
    </div>
      <div className="majale-header">
        <h1>مجله ثبات‌داده</h1>
        <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
      </div>
      <div className="majale-content">
        <div className="majale-soton">
          <div className="majale-box">
            <img src={imageURL1} alt="majale image" width="304px" height="176px"/>
            <div className="majale-text">
              <p>{majale.des}</p>
              <span>مشاهده بیشتر<img src={expanddown} alt="expand donw" /></span>
            </div>
          </div>
          <div className="majale-box">
            <img src={imageURL2} alt="majale image" width="304px" height="176px"/>
            <div className="majale-text">
              <p>{majale.des}</p>
              <span>مشاهده بیشتر<img src={expanddown} alt="expand donw" /></span>
            </div>
          </div>
      </div>
      <div className="majale-soton2">
            <div className="majale-box2">
              <img src={imageURL3} alt="majale image" width="446px" height="212px"/>
              <div className="majale-text">
                <p>{majale.des}</p>
                <span>مشاهده بیشتر<img src={expanddown} alt="expand donw" /></span>
              </div>
            </div>
          </div>
      </div>
      <div className="soalat">
      <h1>سوالات متداول</h1>
      <div className={`box-soalat ${expandedIndex === 0 ? 'active' : ''}`}>
        <div
          className="box-soalat-header"
          onClick={() => handleBoxClick(0)}
        >
          <h2>آیا برای درخواست کار نیاز به رزومه دارم؟</h2>
          <img src={expandedIndex === 0 ? expandmoresolat : expanddownsoalat} alt="expand down" />
        </div>
        {expandedIndex === 0 && (
          <div className="additional-text">
            <img src={arrowback} alt="arrow back" />
            <p>بله تمامی شرکت‌هایی که در ثبات‌داده آگهی ثبت میکنند شرکت‌های ثبت شده هستند.</p>
          </div>
        )}
      </div>
      <div className={`box-soalat ${expandedIndex === 1 ? 'active' : ''}`}>
        <div
          className="box-soalat-header"
          onClick={() => handleBoxClick(1)}
        >
          <h2>برای ثبت شرکت نیاز به تاییدیه هست؟</h2>
          <img src={expandedIndex === 1 ? expandmoresolat : expanddownsoalat} alt="expand down" />
        </div>
        {expandedIndex === 1 && (
          <div className="additional-text">
            <img src={arrowback} alt="arrow back" />
            <p>بله تمامی شرکت‌هایی که در ثبات‌داده آگهی ثبت میکنند شرکت‌های ثبت شده هستند.</p>
          </div>
        )}
      </div>
      <div className={`box-soalat ${expandedIndex === 2 ? 'active' : ''}`}>
        <div
          className="box-soalat-header"
          onClick={() => handleBoxClick(2)}
        >
          <h2>چگونه میتوانیم از جدیدترین آگهی‌های استخدام با خبر شوم؟</h2>
          <img src={expandedIndex === 2 ? expandmoresolat : expanddownsoalat} alt="expand down" />
        </div>
        {expandedIndex === 2 && (
          <div className="additional-text">
            <img src={arrowback} alt="arrow back" />
            <p>بله تمامی شرکت‌هایی که در ثبات‌داده آگهی ثبت میکنند شرکت‌های ثبت شده هستند.</p>
          </div>
        )}
      </div>
    </div>
    <div className="footer">
      <img src={foterimg} alt="back ground" className='footerbg'/>
      <div className="footet-detail">
        <div className="signup">
          <h1>برای استفاده از امکانات ثبات داده، ثبت‌نام کنید</h1>
          <div className="singup-submit">
            <input type="email" name="email" placeholder='پست الکترونیکی را وارد نمایید ...'/>
            <button type="submit">ثبت درخواست</button>
          </div>
        </div>
        <div className="footer-about">
          <h2>ثبات داده، پلتفرمی برای تمامی شرکت ها</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
        <h1>دسترسی سریع</h1>
        <div className="footer-pages">
          <div className="footer-namads">
            <div className="namads-place">
              <img src={namadimage1} alt="e namad" width="112px" height="112px"/>
            </div>
            <div className="namads-place">
              <img src={namadimage2} alt="e namad" width="90px" height="90px"/>
            </div>
            <div className="namads-place">
              <img src={namadimage3} alt="e namad" width="112px" height="112px"/>
            </div>
          </div>
          <div className="links">
              <div className="links-row">
                <a>سوالات متداول</a>
                <a>پشتیبانی</a>
                <a>درباره ثبات‌داده</a>
              </div>
              <div className="links-row">
                <a>ثبت آگهی شغلی</a>
                <a>قوانین</a>
                <a>ارتباط با ما</a>
              </div>
              <div className="links-row">
                <a>دانلود اپلیکیشن</a>
                <a>بلاگ</a>
              </div>
            </div>
        </div>
        <hr />
        <div className="footer-end">
          <div className="social-icon">
            <img src={aparaticon} alt="aparat icon" width="24px" height="24px"/>
            <img src={instagramicon} alt="instagram icon" width="24px" height="24px"/>
            <img src={telegramicon} alt="telegram icon" width="24px" height="24px"/>
          </div>
          <div className="hoghogh">
            <h1>تمامی حقوق این سایت متعلق به سایت sobotdadeh می‌باشد.</h1>
          </div>
        </div>
      </div>
    </div>
	</div>
  )
}
export default Homepage;