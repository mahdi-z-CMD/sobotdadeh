import './Home.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Soalat from './Soalat';
import axios from 'axios';
import Cookies from 'js-cookie';
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
import boximage2 from './image/box1.webp' 
import boximage1 from './image/box2.webp' 
import scrolldownicon from './image/scrolldown.webp'
import majaleimg1 from './image/majale1.webp' 
import majaleimg2 from './image/majale2.webp'
import majaleimg3 from './image/majale3.webp'
import hadafimg from './image/hadaf.webp'
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const boxKhadamat = document.querySelector(`.${window.innerWidth <= 400 ? 'kharid' : 'box-khadamat'}`);
            const boxKhadamatOffset = boxKhadamat.offsetTop;
            const boxKhadamatHeight = boxKhadamat.clientHeight;

            // Check if .box-khadamat is scrolled into view
            if (scrollTop >= boxKhadamatOffset && scrollTop < boxKhadamatOffset + boxKhadamatHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
      navigate(`/استعلام-شرکت-خارجی?search=${searchTerm}&country=${selectedCity}&status=${selectedSabeghe}`);
    };

    // Search to companies page

  //  --------------- animation slider ----------------------
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const scrollSpeed = 1; // Adjust scroll speed
  const autoScrollInterval = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default action
    setIsDragging(true);
    setStartPosition(e.pageX - scrollContainerRef.current.offsetLeft);
    setStartScrollLeft(scrollContainerRef.current.scrollLeft);
    clearInterval(autoScrollInterval.current); // Stop auto-scroll on drag start
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default action
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startPosition) * 3; // Multiply by 3 to increase scroll speed
    scrollContainerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startAutoScroll(); // Restart auto-scroll on drag end
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setStartScrollLeft(scrollContainerRef.current.scrollLeft);
    clearInterval(autoScrollInterval.current); // Stop auto-scroll on drag start
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startPosition) * 3; // Multiply by 3 to increase scroll speed
    scrollContainerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAutoScroll(); // Restart auto-scroll on drag end
  };

  const handleMouseEnter = () => {
    clearInterval(autoScrollInterval.current); // Stop auto-scroll on hover
  };

  const handleMouseLeaveContainer = () => {
    startAutoScroll(); // Restart auto-scroll when mouse leaves container
  };

  const startAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollSpeed;
        if (
          scrollContainerRef.current.scrollLeft +
            scrollContainerRef.current.clientWidth >=
          scrollContainerRef.current.scrollWidth
        ) {
          scrollContainerRef.current.scrollLeft = 0; // Reset to start when end is reached
        }
      }
    }, 25); // Approximately 60 frames per second
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      clearInterval(autoScrollInterval.current); // Clean up on unmount
    };
  }, []);
  //  --------------- animation slider ----------------------
  //  --------------- animation slider ----------------------
  const scrollContainerRef2 = useRef(null);
  const [isDragging2, setIsDragging2] = useState(false);
  const [startPosition2, setStartPosition2] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);
  const scrollSpeed2 = 1; // Adjust scroll speed
  const autoScrollIntervalRef2 = useRef(null);

  const handleMouseDown2 = (e) => {
    setIsDragging2(true);
    setStartPosition2(e.pageX - scrollContainerRef2.current.offsetLeft);
    setScrollLeft2(scrollContainerRef2.current.scrollLeft);
    clearInterval(autoScrollIntervalRef2.current); // Stop auto-scroll on drag start
  };

  const handleTouchStart2 = (e) => {
    setIsDragging2(true);
    setStartPosition2(e.touches[0].pageX - scrollContainerRef2.current.offsetLeft);
    setScrollLeft2(scrollContainerRef2.current.scrollLeft);
    clearInterval(autoScrollIntervalRef2.current); // Stop auto-scroll on touch start
  };

  const handleMouseMove2 = (e) => {
    if (!isDragging2) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef2.current.offsetLeft;
    const walk = (x - startPosition2) * 3; // Adjust scroll speed for smoothness
    scrollContainerRef2.current.scrollLeft = scrollLeft2 - walk;
  };

  const handleTouchMove2 = (e) => {
    if (!isDragging2) return;
    const x = e.touches[0].pageX - scrollContainerRef2.current.offsetLeft;
    const walk = (x - startPosition2) * 3; // Adjust scroll speed for smoothness
    scrollContainerRef2.current.scrollLeft = scrollLeft2 - walk;
  };

  const handleMouseUp2 = () => {
    setIsDragging2(false);
    startAutoScroll2(); // Restart auto-scroll on drag end
  };

  const handleTouchEnd2 = () => {
    setIsDragging2(false);
    startAutoScroll2(); // Restart auto-scroll on touch end
  };

  const handleMouseEnter2 = () => {
    clearInterval(autoScrollIntervalRef2.current); // Stop auto-scroll on hover
  };

  const handleMouseLeaveContainer2 = () => {
    if (!isDragging2) {
      startAutoScroll2(); // Restart auto-scroll when mouse leaves container
    }
  };

  const preventImageDrag = (e) => {
    e.preventDefault();
  };

  const startAutoScroll2 = () => {
    clearInterval(autoScrollIntervalRef2.current);
    autoScrollIntervalRef2.current = setInterval(() => {
      if (scrollContainerRef2.current) {
        const maxScrollLeft = scrollContainerRef2.current.scrollWidth - scrollContainerRef2.current.clientWidth;
        if (scrollContainerRef2.current.scrollLeft >= maxScrollLeft) {
          scrollContainerRef2.current.scrollLeft = 0; // Reset to start when end is reached
        } else {
          scrollContainerRef2.current.scrollLeft += scrollSpeed2; // Move the slider
        }
      }
    }, 25); // Approximately 40 frames per second
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef2.current;
    const images = scrollContainer.querySelectorAll('a');

    // Clone images for infinite scroll effect
    images.forEach(image => {
      const clone = image.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    startAutoScroll2();

    // Prevent image dragging
    scrollContainer.querySelectorAll('img').forEach(img => {
      img.addEventListener('dragstart', preventImageDrag);
      img.addEventListener('touchmove', preventImageDrag);
    });

    return () => {
      clearInterval(autoScrollIntervalRef2.current); // Clean up on unmount
      scrollContainer.querySelectorAll('img').forEach(img => {
        img.removeEventListener('dragstart', preventImageDrag);
        img.removeEventListener('touchmove', preventImageDrag);
      });
    };
  }, []);
  //  --------------- animation slider ----------------------
  // --------------- majale api ----------------------
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = Cookies.get('api_key');
        const token = Cookies.get('token');
        const imei = Cookies.get('IMEI');

        const response = await axios.post('https://api.sobotdadeh.com/v1/article', {}, {
          headers: {
            'Api-Token': apiKey,
            'Authorization': `Bearer ${token}`,
            'IMEI': imei,
          },
        });

        const allArticles = response.data.data;
        setArticles(allArticles.slice(-3)); // Store the last three articles in state
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);
  // --------------- majale api ----------------------
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
            {windowWidth <= 500 ? (
                <div className='Searchbox-items'>
                    <div className="Searchbox-items-mobile">
                        <img src={Searchiconblack} alt="Search icon" />
                        <input 
                            type="text" 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            name="Search" 
                            placeholder={t('عنوان شرکت....')} 
                        />
                    </div>
                    <div className="Searchbox-items-mobile">
                        <img src={locicon} alt="Search icon" />
                        <select 
                            name="country" 
                            value={selectedCity} 
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option value="default">{t('انتخاب کشور')}</option>
                            <option value="0">{t('ایران')}</option>
                            <option value="1">{t('عراق')}</option>
                        </select>
                    </div>
                    <div className="Searchbox-items-mobile">
                        <img src={pageicon} alt="Search icon" />
                        <select 
                            name="status" 
                            value={selectedSabeghe} 
                            onChange={(e) => setSelectedSabeghe(e.target.value)}
                        >
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
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        name="Search" 
                        placeholder={t('عنوان شرکت....')} 
                    />
                    <img src={locicon} alt="Search icon" />
                    <select 
                        name="country" 
                        value={selectedCity} 
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="default">{t('انتخاب کشور')}</option>
                        <option value="0">{t('ایران')}</option>
                        <option value="1">{t('عراق')}</option>
                    </select>
                    <img src={pageicon} alt="Search icon" />
                    <select 
                        name="status" 
                        value={selectedSabeghe} 
                        onChange={(e) => setSelectedSabeghe(e.target.value)}
                    >
                        <option value="default">{t('وضعیت شرکت')}</option>
                        <option value="1">{t('فعال')}</option>
                        <option value="0">{t('غیر فعال')}</option>
                    </select>
                    <img src={searchicon2} alt="Search icon" className='searchicon2' />
                    <button type="submit">{t('جستجو')}</button>
                </div>
            )}
        </form>   
        </div>
        <div className="slider">
          <h1>برترین کسب و کار ها</h1>
          <div
            className="card-box"
            ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeaveContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          whiteSpace: 'nowrap',
          userSelect: 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
          WebkitOverflowScrolling: 'touch', // Enable momentum scrolling on iOS
          touchAction: 'manipulation', // Improve touch responsiveness
          padding: '0 5vw', // Adjust padding for your design
        }}
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
        <p>{t('در ثبات تلاش می‌کنیم با ارائه جامع‌ترین اطلاعات سرمایه‌گذاری مسیری مناسب را برای کسب و کار خود ترسیم کنید.')}</p>
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
          windowWidth <= 500 ? (<h1 className='box-khadamat-text-h1'>{scrolled ? t('استعلام شرکت ها') : t('شناخت ریسک معاملات ')}</h1>):null
      }
      <div className="box-khadamat-img">
        <img src={scrolled ? boximage2 : boximage1} alt="box image" />
      </div>
      <div className="box-khadamat-text">
        {
            windowWidth >= 500 ? (<h1>{scrolled ? t('استعلام شرکت ها') : t('شناخت ریسک معاملات ')}</h1>):null
        }
        <p>{scrolled ? 'بعضی افراد سودجو می توانند به اسم یک شرکت جعلی که به ثبت نرسیده است اقدام به معامله با شرکت ها یا افراد عادی کنند و از آن ها کلاهبرداری کنند. وقتی این نوع از کلاهبرداری با مبالغ کلان اتفاق افتاد و افراد مال باخته اقدام به شکایت کردند، تازه متوجه خواهند شد که چنبن شرکتی وجود ندارد و دسترسی به افراد کلاهبردار برای شکایت و پیگیری جرم کلاهبرداری برای آنان بسیار دشوار خواهد بود. برای افراد این سوال ممکن است به وجود بی آید ' : 'ریسک امری غیرقابل انکار در معاملات است و هر فرد با توجه به استراتژی معاملاتی و ریسک پذیری خود به معامله یک دارایی می‌پردازد. استفاده از ابزارهای مختلف اقتصادی منجر به کنترل ریسک معامله می‌شود و این امر بدون دانش و تجربه امکان‌پذیر نخواهد بود. با توجه به اهمیت ریسک پذیری و شناخت درجات ریسک پذیری در ثبات داده  قصد داریم به کاهش ریسک پذیری تجارت شما و دسته ‌بندی طرفین معاملاتی بر اساس میزان ریسک‌ پذیری بپردازیم.'}</p>  
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
        <p>{t('با گسترش روزافزون اقتصاد مدرن نیاز به داده ای پایدار و صورت بندی شده کسب و کارها را با نیازهای جدید مواجه ساخته است. ثبات داده طرحی نو برای اقتصاد ایران و منطقه است که تلاش می کند نقشه راهی دقیق برای تجارت شما ترسیم کند.')}</p>
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
      {/* majale */}
      <div className="majale-header">
        <h1>{t('مجله ثبات‌داده')}</h1>
        {windowWidth <= 500 ? null : <h2>{t('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است')}</h2>}
      </div>
      <div className="majale-content">
        <div className="majale-soton">
          {articles.length > 0 && (
            <>
                <Link to={`/blog/${articles[2].id}`}>
                  <img src={articles[2].image} alt="majale image" width="50%" height="100%" />
                  {windowWidth <= 500 ? <h1>{articles[2].title}</h1> : null}
                  <div className="majale-text">
                    {windowWidth <= 500 ? null : <p>{articles[2].excerpt}</p>}
                    <span>{t('مشاهده بیشتر')}<img src={windowWidth <= 500 ? leftarrowslider : expanddown} alt="expand down" /></span>
                  </div>
                </Link>
                <Link to={`/blog/${articles[1].id}`}>
                  <img src={articles[1].image} alt="majale image" width="50%" height="100%" />
                  {windowWidth <= 500 ? <h1>{articles[1].title}</h1> : null}
                  <div className="majale-text">
                    {windowWidth <= 500 ? null : <p>{articles[1].excerpt}</p>}
                    <span>{t('مشاهده بیشتر')}<img src={windowWidth <= 500 ? leftarrowslider : expanddown} alt="expand down" /></span>
                  </div>
                </Link>
              {windowWidth <= 500 ? (
                  <Link to={`/blog/${articles[0].id}`}>
                    <img src={articles[0].image} alt="majale image" width="50%" height="100%" />
                    {windowWidth <= 500 ? <h1>{articles[0].title}</h1> : null}
                    <div className="majale-text">
                      <span>{t('مشاهده بیشتر')}<img src={leftarrowslider} alt="expand down" /></span>
                    </div>
                  </Link>
              ) : null}
            </>
          )}
        </div>
        {windowWidth >= 500 && articles.length > 2 && (
          <div className="majale-soton2">
              <Link to={`/blog/${articles[0].id}`}>
                <img src={articles[0].image} alt="majale image" width="100%" height="60%" />
                <div className="majale-text">
                  <p>{articles[0].excerpt}</p>
                  <span>{t('مشاهده بیشتر')}<img src={expanddown} alt="expand down" /></span>
                </div>
              </Link>
          </div>
        )}
      </div>
      {/* majale */}
      <div className="manabe-aboutus">
      <h1>منابع ما</h1>
      <div
        className="manabe-aboutus-icons"
        ref={scrollContainerRef2}
        onMouseDown={handleMouseDown2}
        onMouseMove={handleMouseMove2}
        onMouseUp={handleMouseUp2}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeaveContainer2}
        onTouchStart={handleTouchStart2}
        onTouchMove={handleTouchMove2}
        onTouchEnd={handleTouchEnd2}
        style={{ overflow: 'hidden', whiteSpace: 'nowrap', cursor: isDragging2 ? 'grabbing' : 'grab', transition: 'scroll-left 0.2s linear' }} // Add CSS transition for smooth scrolling
      >
        <a href="https://bmn.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh1.webp" alt="بنیاد ملی نخبگان" />
        </a>
        <a href="https://daneshbonyan.isti.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh2.webp" alt="مرکز شرکت ها و موسسات دانش بنیان" />
        </a>
        <a href="https://evand.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh3.webp" alt="بنیاد ملی توسعه فناوری" />
        </a>
        <a href="https://mstfdn.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh4.webp" alt="بنیاد علم و فناوری مصطفی" />
        </a>
        <a href="https://jamilifoundation.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh5.webp" alt="بنیاد علم و فناوری جمیلی" />
        </a>
        <a href="https://utf.ut.ac.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh6.webp" alt="بنیاد حامیان دانشگاه تهران" />
        </a>
        <a href="https://dolat.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh7.webp" alt="دولت جمهوری اسلامی ایران" />
        </a>
        <a href="https://eadl.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh8.webp" alt="قوه قضاییه" />
        </a>
        <a href="https://www.ict.gov.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh9.webp" alt="وزارت ارتباطات" />
        </a>
        <a href="https://www.mfa.gov.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh10.webp" alt="وزارت امور خارجه" />
        </a>
        <a href="https://ssaa.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh11.webp" alt="سازمان ثبت اسناد و املاک کشور" />
        </a>
        <a href="https://www.maj.ir/" target="_blank" rel="noopener noreferrer">
          <img src="https://sobotdadeh.com/manabeimg/danesh12.webp" alt="جهاد کشاورزی" />
        </a>
      </div>
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