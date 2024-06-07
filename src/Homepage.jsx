import './Home.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Soalat from './Soalat';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
import boximage1 from './image/box1.webp' 
import boximage2 from './image/box2.webp' 
import scrolldownicon from './image/scrolldown.webp'
import majaleimg1 from './image/majale1.webp' 
import majaleimg2 from './image/majale2.webp'
import majaleimg3 from './image/majale3.webp'
import hadafimg from './image/aboutimg2.webp'
import hometarafbg from './image/tarafetobg.png'


// json test for api
import sliderdata from './slidersdata.json'

export const Homepage = () => {  
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
  // thie section is for box khadamat animation 
  const [scrolled, setScrolled] = useState(false);
  const [majale, setMajale] = useState({
    des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    image: majaleimg3
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const boxKhadamat = document.querySelector(`.${windowWidth <= 500 ? 'kharid' : 'box-khadamat'}`);
      const boxKhadamatOffset = boxKhadamat.offsetTop;
      const boxKhadamatHeight = boxKhadamat.clientHeight;

      if (scrollTop >= boxKhadamatOffset && scrollTop  < boxKhadamatOffset + boxKhadamatHeight) {
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
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + 1) % sliderdata.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [sliderdata.length]);

  const nextSlide = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % sliderdata.length);
  };

  const prevSlide = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + sliderdata.length) % sliderdata.length);
  };
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
                        <div className='cards-info-row-more'>
                          <h3>{t('مشاهده بیشتر')}</h3>
                          <img src={leftarrowslider} alt="left icon"/>
                        </div>
                      </div>
                    </div>
                </div>
        )
    })
    // Search to companies page
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedSabeghe, setSelectedSabeghe] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      // Redirect to the search page with the search term as a query parameter
      navigate(`/khareji?search=${searchTerm}&country=${selectedCity}&status=${selectedSabeghe}`);
    };

    // Search to companies page

  //  --------------- animation slider ----------------------
  const scrollContainer = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollSpeed = 1; // Adjust scroll speed
    const autoScrollInterval = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPosition(e.pageX - scrollContainer.current.offsetLeft);
        setScrollLeft(scrollContainer.current.scrollLeft);
        clearInterval(autoScrollInterval.current); // Stop auto-scroll on drag start
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        restartAutoScroll(); // Restart auto-scroll on drag end
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        restartAutoScroll(); // Restart auto-scroll on drag end
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.current.offsetLeft;
        const walk = (x - startPosition) * 3; // Multiply by 3 to increase scroll speed
        scrollContainer.current.scrollLeft = scrollLeft - walk;
    };

    const startAutoScroll = () => {
        autoScrollInterval.current = setInterval(() => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollLeft += scrollSpeed;
                if (scrollContainer.current.scrollLeft + scrollContainer.current.clientWidth >= scrollContainer.current.scrollWidth) {
                    scrollContainer.current.scrollLeft = 0; // Reset to start when end is reached
                }
            }
        }, 20); // Approximately 60 frames per second
    };

    const restartAutoScroll = () => {
        clearInterval(autoScrollInterval.current);
        setTimeout(startAutoScroll, 2000); // Restart after 2 seconds
    };

    useEffect(() => {
        startAutoScroll();
        return () => clearInterval(autoScrollInterval.current); // Clean up on unmount
    }, []);
  //  --------------- animation slider ----------------------
  return (
    <div>
      <header>
      <div className="overlay">
        <div className='overlaynotrow'>
            <h1>{t('تسهیل سرمایه گذاری داده محور')}</h1> 
        </div>
        <div className='overlaym'>
            <div className="overlaym-bg">
            </div>
        </div>
      </div>
      </header>
      <main>
        <div className='Searchbox-main'>
            <form onSubmit={handleSubmit}>
              <h1>{t('جستجوی شرکت ها')}</h1>
              {
                    windowWidth <= 500 ? (
                      <div className='Searchbox-items'>
                            <div className="Searchbox-items-mobile">
                              <img src={Searchiconblack} alt="Search icon" />
                              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} name="Search" placeholder={t('عنوان شرکت....')}/>
                            </div>
                            <div className="Searchbox-items-mobile">
                              <img src={locicon} alt="Search icon" placeholder="شهر"/>
                              <select name="country" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                                <option value="default">{t('انتخاب کشور')}</option>
                                <option value="0">{t('ایران')}</option>
                                <option value="1">{t('عراق')}</option>
                              </select>
                            </div>
                            <div className="Searchbox-items-mobile">
                              <img src={pageicon} alt="Search icon" />
                              <select name="status" value={selectedSabeghe} onChange={(e) => setSelectedSabeghe(e.target.value)}>
                                <option value="default">{t('وضعیت شرکت')}</option>
                                <option value="1">{t('فعال')}</option>
                                <option value="0">{t('غیر فعال')}</option>
                              </select>
                            </div>
                      <button type="submit">{t('جستجو')}</button>
                  </div>  
                    ) : (
                      <div className='Searchbox-items'>
                        <img src={Searchiconblack} alt="Search icon" />
                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} name="Search" placeholder={t('عنوان شرکت....')}/>
                        <img src={locicon} alt="Search icon" placeholder="شهر"/>
                        <select name="status" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        <option value="default">{t('انتخاب کشور')}</option>
                        <option value="0">{t('ایران')}</option>
                        <option value="1">{t('عراق')}</option>
                        </select>
                        <img src={pageicon} alt="Search icon" />
                        <select name="status" value={selectedSabeghe} onChange={(e) => setSelectedSabeghe(e.target.value)}>
                        <option value="default">{t('وضعیت شرکت')}</option>
                        <option value="1">{t('فعال')}</option>
                        <option value="0">{t('غیر فعال')}</option>
                        </select>
                        <img src={searchicon2} alt="Search icon" className='searchicon2'/>
                        <button type="submit">{t('جستجو')}</button>
                    </div>  
                    )
                  } 
            </form>       
        </div>
        <div className='slider'>
            <h1>{t('برترین کسب و کار ها')}</h1>
            <div
                className='card-box'
                ref={scrollContainer}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {sliderdata.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        namecompanie={item.description}
                        img={item.imageUrl}
                        bookmark=""
                    />
                ))}
            </div>
        </div>
      </main>
      <div className="home-tarafeto">
      {
        windowWidth >= 500 ? (<img src={hometarafbg} alt="tarafeto image" />) : null
      }
      <div className="home-tarafeto-text">
        <h1>{t('طرف قراردادتو بشناس !')}</h1>
        <p>{t('در ثبات تلاش می‌کنیم با رائله جامع‌ترین اطلاعات سرمایه‌گذاری مسیری مناسب را برای کسب و کار خود ترسیم کنید.')}</p>
        <Link to={'/tarafeto'}>{t('بیشتر بخوانید...')}</Link>
      </div>
    </div>
      <div className="kharid">
        <h1>{t('کسب و کار پایدار با ثبات‌داده ...')}</h1>
        <h2>{t('ارائه بهترین شرکت ها در همه حوزه‌ها')}</h2>
        <a href="#">{t('خرید اشتراک')}</a>
      </div>
      <div className={`box-khadamat ${scrolled ? 'scrolled' : ''}`}>
      {
          windowWidth <= 500 ? (<h1 className='box-khadamat-text-h1'>{scrolled ? t('باکس خدمات 2') : t('باکس خدمات')}</h1>):null
      }
      <div className="box-khadamat-img">
        <img src={scrolled ? boximage2 : boximage1} alt="box image" />
      </div>
      <div className="box-khadamat-text">
        {
            windowWidth >= 500 ? (<h1>{scrolled ? t('باکس خدمات 2') : t('باکس خدمات')}</h1>):null
        }
        <p>{scrolled ? 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'}</p>  
        <img src={scrolldownicon} alt="scroll icon" className='scrollicon-khadamat'/>
      </div>
    </div>
    <div className="hadaf-sobot">
        {
          windowWidth >= 500 ? null : (<h1>{t('هدف از ثبات‌داده')}</h1>)
        }
      <img src={hadafimg} alt="hadaf image" />
      <div className="hadaf-sobot-text">
        {
          windowWidth <= 500 ? null : (<h1>{t('هدف از ثبات‌داده')}</h1>)
        }
        <p>{t('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد')}</p>
      </div>
    </div>
    <div className='masir'>
          <div className='masir-detail'>
                  <div className='masir-header'>
                    <h1>{t('مسیر همکاری با شرکت ها در ثبات‌داده')}</h1>
                  </div>
                  <div className='masir-middle'>
                    <div className='masir-middle-items'>
                        <img src={masir1icon} alt="expand down icon" width="100%" height="73px"/>
                        <h1>{t('عضویت در ثبات‌داده')}</h1>
                        <p>{t('با ثبت اطلاعات موردنظرتان در سایت ثبات‌داده قدم اول برای پیدا کردن شرکت مناسب خود را بردارید.')}</p>
                    </div>
                    <img src={arrowmasiricon} alt="expand down icon" className='arrow-icon1'/>
                    <div className='masir-middle-items'>
                        <img src={masir2icon} alt="expand down icon" width="100%" height="73px"/>
                        <h1>{t('ثبت درخواست')}</h1>
                        <p>{t('با ثبت یک درخواست کامل در سایت به پیدا کردن شرکت مناسب کار خود نزدیک خواهید شد.')}</p>
                    </div>
                    <img src={arrowmasiricon} alt="expand down icon" className='arrow-icon2'/>
                    <div className='masir-middle-items'>
                        <img src={masir3icon} alt="expand down icon" width="100%" height="73px"/>
                        <h1>{t('ارتباط با شرکت')}</h1>
                        <p>{t('مدتی پس از ثبت درخواست وخرید اشتراک شما به شرکت مدنظر متصل خواهید شد.')}</p>
                    </div>
                  </div>
          </div>
      </div>
      <div className="majale-header">
        <h1>{t('مجله ثبات‌داده')}</h1>
        {
          windowWidth <= 500 ? (null):(<h2>{t('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است')}</h2>)
        }
        
      </div>
      <div className="majale-content">
        <div className="majale-soton">
          <div className="majale-box">
            <img src={imageURL1} alt="majale image" width="50%" height="100%"/>
            {
              windowWidth <= 500 ? (<h1>{t('عنوان مجله')}</h1>) : null
            }
            <div className="majale-text">
              {
                windowWidth <= 500 ? null : (<p>{majale.des}</p>) 
              }
              <span>{t('مشاهده بیشتر')}<img src={windowWidth <=500 ? leftarrowslider : expanddown} alt="expand donw" /></span>
            </div>
          </div>
          <div className="majale-box">
            <img src={imageURL2} alt="majale image" width="50%" height="100%"/>
            {
              windowWidth <= 500 ? (<h1>{t('عنوان مجله')}</h1>) : null
            }
            <div className="majale-text">
              {
                windowWidth <= 500 ? null : (<p>{majale.des}</p>) 
              }
              <span>{t('مشاهده بیشتر')}<img src={windowWidth <=500 ? leftarrowslider : expanddown} alt="expand donw" /></span>
            </div>
          </div>
          {
            windowWidth <= 500 ? (
              <div className="majale-box">
                <img src={imageURL3} alt="majale image" width="50%" height="100%"/>
                {
                  windowWidth <= 500 ? (<h1>{t('عنوان مجله')}</h1>) : null
                }
                <div className="majale-text">
                  <span>{t('مشاهده بیشتر')}<img src={leftarrowslider} alt="expand donw" /></span>
                </div>
              </div>
            ) : null
          }
      </div>
      {
        windowWidth >= 500 ? (
          <div className="majale-soton2">
            <div className={"majale-box2"}>
              <img src={imageURL3} alt="majale image" width="100%" height="60%"/>
              <div className="majale-text">
                <p>{majale.des}</p>
                <span>{t('مشاهده بیشتر')}<img src={expanddown} alt="expand donw" /></span>
              </div>
            </div>
          </div>
        ) : null
      }
      
      </div>
      {/* <div className="solata-home">
        <h1>سوالات متداول</h1>
      </div>
      <Soalat Soalheader="آیا برای درخواست کار نیاز به رزومه دارم؟" Soalcontent=""></Soalat>
      <Soalat Soalheader="برای ثبت شرکت نیاز به تاییدیه هست؟" Soalcontent="بله تمامی شرکت‌هایی که در ثبات‌داده آگهی ثبت میکنند شرکت‌های ثبت شده هستند."></Soalat>
      <Soalat Soalheader="چگونه میتوانیم از جدیدترین آگهی‌های استخدام با خبر شوم؟ برای درخواست کار نیاز به رزومه دارم؟" Soalcontent=""></Soalat> */}
	</div>
  )
}
export default Homepage;