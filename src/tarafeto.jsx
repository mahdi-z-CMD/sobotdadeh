import './Madreseeghtesad.css'
import './tarafeto.css'
import { useState, useEffect , useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// Icons
import leftarrowslider from './Icons/leftarrowslider.svg'
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
import expandleft from './Icons/expandleft.svg'
import expandright from './Icons/expandright.svg'
import expanddown from './Icons/expanddown.svg'
import flagSaudi from './Icons/flag-saudi.svg'
import flagFrance from './Icons/flag-france.svg'
import flagIran from './Icons/flag-iran.svg'
import flagSpania from './Icons/flag-spania.svg'
import flagJapan from './Icons/flag-japan.svg'
import flagUnitedkingdom from './Icons/flag-unitedkingdom.svg'
import downloadicon from './Icons/downloadicon.svg'
// Images
import madrese1 from './image/madrese1.png'
import madrese2 from './image/madrese2.jpg'
import madrese3 from './image/madrese3.jpg'
import madrese4 from './image/madrese4.jpg'
import madrese5 from './image/madrese5.jpg'
import madrese6 from './image/madrese6.jpg'
import madrese7 from './image/madrese7.jpg'
import tarafbg from './image/tarafetobg.png'

// json test for api
import sliderdata from './slidersdata.json'
const Tarafeto = () => {
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
      console.log(windowWidth)
    };
  }, []);
  // get window width
    // this section is for api images ----------------------------------------------
    const scrollContainer = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollSpeed = 1; // Adjust scroll speed
    const autoScrollInterval = useRef(null);
    const autoScrollTimeout = useRef(null);

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
        autoScrollTimeout.current = setTimeout(startAutoScroll, 2000); // Restart after 2 seconds
    };

    const handleMouseEnter = () => {
        clearInterval(autoScrollInterval.current); // Pause auto-scroll on hover
        clearTimeout(autoScrollTimeout.current);
    };

    const handleMouseLeaveContainer = () => {
        if (!isDragging) restartAutoScroll(); // Restart auto-scroll when leaving the container if not dragging
    };

    useEffect(() => {
        startAutoScroll();
        return () => {
            clearInterval(autoScrollInterval.current); // Clean up on unmount
            clearTimeout(autoScrollTimeout.current);
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
            <Helmet>
             <title>ثبات داده - طرف قرارداد تو بشناس</title>
            </Helmet>
            <div className="Madrese-bg">
                <div className='Madrese-content'>
                    <img src={tarafbg} alt="icon" />
                    <div className="Madrese-content-texts">
                        <h1>طرف قرارداد تو بشناس</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                    </div>
                </div>
            </div>
            <div className="Tarafeto-header-text">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
            </div>
           
            <div className="Tarafeto-box-download">
              <h1>باکس دانلود شرکت های ثبات‌داده</h1>
              <div className="Tarafeto-box-download-row">
                <img src={flagIran} alt="Flag iran" />
                <h1>فایل شماره ۱</h1>
                <button><img src={downloadicon} alt="" />دانلود</button>
              </div>
              <div className="Tarafeto-box-download-row">
                <img src={flagFrance} alt="Flag iran" />
                <h1>فایل شماره ۱</h1>
                <button><img src={downloadicon} alt="" />دانلود</button>
              </div>
              <div className="Tarafeto-box-download-row">
                <img src={flagJapan} alt="Flag iran" />
                <h1>فایل شماره ۱</h1>
                <button><img src={downloadicon} alt="" />دانلود</button>
              </div>
              <div className="Tarafeto-box-download-row">
                <img src={flagSaudi} alt="Flag iran" />
                <h1>فایل شماره ۱</h1>
                <button><img src={downloadicon} alt="" />دانلود</button>
              </div>
              <div className="Tarafeto-box-download-row">
                <img src={flagUnitedkingdom} alt="Flag iran" />
                <h1>فایل شماره ۱</h1>
                <button><img src={downloadicon} alt="" />دانلود</button>
              </div>
            </div>
            <div className="Madrese-slider">
            <div className='slider'>
                <h1>{t('برترین کسب و کار ها')}</h1>
                <div
                    className='card-box'
                    ref={scrollContainer}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeaveContainer} // Restart auto-scroll when leaving the container
                    style={{ overflow: 'auto', whiteSpace: 'nowrap' }}
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
            </div>
        </div>
     );
}
 
export default Tarafeto;