import './Aboutus.css'
import React, { useState , useRef , useEffect } from 'react';
import { Helmet } from 'react-helmet';

// icons 
import expanddownsoalat from './Icons/expanddownsoalat.svg'
import expandmoresolat from './Icons/expandmoresolat.svg'
import arrowback from './Icons/arrowback.svg'
// images
import aboutimg1 from './image/aboutimg1.webp'
import aboutimg2 from './image/aboutimg2.webp'
const Aboutus = () => {
     // this section is for box soalat 
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleBoxClick = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index));
  };  
  // this section is for box soalat 
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
    return ( 
        <div>
            <Helmet>
                <title>ثبات داده - درباره ما</title>
            </Helmet>
            <div className='header-about'>
                <h1>درباره ثبات‌داده</h1>
            </div>
            <div className="header-content">
                <div className="header-content-back">
                    <div className="content-box">
                        <div className="content-box-image">
                            <img src={aboutimg1} alt="image" />
                        </div>
                        <div className="content-box-texts">
                            <h1>هدف از ثبات‌داده</h1>
                            <p>مهم ترین هدف ما در ثبات داده ایجاد شفافیت در عرصه های مختلف تجارت می باشد که فعالین اقتصادی بتوانند در بستری امن و شناخت دقیق از ریسک های موجود به تجارت خود بپردازند. با بررسی ساختار اقتصادی، تجارتی و پولی منطقه غرب آسیا این ماموریت را تعریف کردیم که تمامی تلاش خود را برای کم خطر شدن مبادلات اقتصادی در این منطقه باستانی تعریف کنیم. این امر در پرتو همگرایی دانش و تجربه است که معنا پیدا کرده و با نوآوری و خلاقیت نسلی جوان از ایران سربلند به ارمغان می نشیند. </p>
                        </div>
                    </div>
                    <div className="content-box2">
                        <div className="content-box-image2">
                            <img src={aboutimg2} alt="image" />
                        </div>
                        <div className="content-box-texts">
                            <h1>چرا ثبات داده</h1>
                            <p> در سال های اخیر خاورمیانه یکی از مهم ترین مقاصد سرمایه گذاری فعالان اقتصادی جهانی شناخته می شود و با توجه به ضرورت تجارت پایدار مبتنی بر دادگان پایدار اجتناب ناپذیر است از ریسک معاملات تصویر مناسبی داشته باشیم. ما در ثبات داده با بهره گیری از طیف گسترده ای از منابع داده محور در سطح منطقه و کشور به پالایش و واکاوری داده های متناسب برای تجارت شما می پردازیم. این امر در گرو تیم های مهندسی داده ما بوده که با استفاده از ابزار های هوش مصنوعی برای پویایی و پایداری دادگان ما کوشش می کنند. از سوی دیگر با برخورداری از تیم های کارشناسی مجرب در عرصه های مختلف سرمایه گذاری برای تحقق فضای کم ریسک در تجارت خاورمیانه تلاش می کنیم.</p>
                        </div>
                    </div>
                    {/* <div className="content-box">
                        <div className="content-box-texts">
                            <h1>Build the right team to scale</h1>
                            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                        </div>
                        <div className="content-box-image">
                            <img src={aboutimg3} alt="image" />
                        </div>
                    </div> */}
                </div>         
            </div>
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
            <div className="kharid">
                <h1>به ثبات‌داده اعتماد کن ما کنارتان هستیم ...</h1>
                <h2>ارائه بهترین شرکت ها در همه حوزه‌ها</h2>
                <a href="#">خرید اشتراک</a>
            </div>
        </div>
     );
}
 
export default Aboutus;
