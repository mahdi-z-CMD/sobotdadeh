import './Madreseeghtesad.css'
import { useState, useEffect } from 'react'
// Icons
import leftarrowslider from './Icons/leftarrowslider.svg'
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
import expandleft from './Icons/expandleft.svg'
import expandright from './Icons/expandright.svg'
import expanddown from './Icons/expanddown.svg'
// Images
import madrese1 from './image/madrese1.png'
import madrese2 from './image/madrese2.jpg'
import madrese3 from './image/madrese3.jpg'
import madrese4 from './image/madrese4.jpg'
import madrese5 from './image/madrese5.jpg'
import madrese6 from './image/madrese6.jpg'
import madrese7 from './image/madrese7.jpg'

// json test for api
import sliderdata from './slidersdata.json'
const Madreseeghtesad = () => {
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
    // scroll to item
    const handleSectionClick2 = (e, sectionId) => {
        e.preventDefault(); // Prevent the default behavior of anchor tag
      
        setActiveSection(sectionId); // Update the active section state
      
        // Scroll to the corresponding section
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    // scroll to item
    const [activeSection, setActiveSection] = useState(0);

    const handleSectionClick = (index) => {
        setActiveSection(index);
    };
    let i = 1;
    // this section is for api images ----------------------------------------------
  const [startIndex, setStartIndex] = useState(0);
  const [autoSlideIntervalId, setAutoSlideIntervalId] = useState(null);

  // Function to start automatic sliding
  const startAutoSlide = () => {
    const id = setInterval(() => {
      const newIndex = (startIndex + 1) % sliderdata.length; // Calculate the next index and loop back to 0 if it reaches the end
      setStartIndex(newIndex);
    }, 2000); // Change slide every 1 second
    setAutoSlideIntervalId(id);
  };

  // Function to stop automatic sliding
  const stopAutoSlide = () => {
    clearInterval(autoSlideIntervalId);
    setAutoSlideIntervalId(null);
  };

  // Start automatic sliding when component mounts or when startIndex changes
  useEffect(() => {
    if (windowWidth <= 500) {
      startAutoSlide();
    } else {
      stopAutoSlide(); // Stop automatic sliding on larger screens
    }

    // Clean up function to stop automatic sliding when component unmounts or when startIndex changes
    return () => {
      if (autoSlideIntervalId) {
        clearInterval(autoSlideIntervalId);
      }
    };
  }, [startIndex, windowWidth]); // Re-run effect when startIndex or windowWidth changes

  // Function to handle next slide
  const nextSlide = () => {
    const newIndex = (startIndex + (windowWidth <= 500 ? 1 : 4)) % sliderdata.length; // Calculate the next index and loop back to 0 if it reaches the end
    setStartIndex(newIndex);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    const newIndex = (startIndex - (windowWidth <= 500 ? 1 : 4) + sliderdata.length) % sliderdata.length; // Calculate the previous index and loop back to the end if it reaches 0
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
            <div className="Madrese-bg">
                <div className='Madrese-content'>
                    <img src={madrese1} alt="icon" />
                    <div className="Madrese-content-texts">
                        <h1>اهمیت کسب و کار تو از نگاه ثبات‌داده</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                    </div>
                </div>
            </div>
            <div className="Madrese-content2">
                {activeSection === 0 && (
                    <img src={madrese2} alt="icon" /> 
                )}
                {activeSection === 1 && (
                    <img src={madrese3} alt="icon" />
                )}
                {activeSection === 2 && (
                   <img src={madrese4} alt="icon" />
                )}
                {activeSection === 3 && (
                    <img src={madrese5} alt="icon" />
                )}
                {activeSection === 4 && (
                   <img src={madrese6} alt="icon" />
                )}
                {activeSection === 5 && (
                   <img src={madrese7} alt="icon" />
                )}
                <div className="Madrese-content2-texts">
                {activeSection === 0 && (
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
                )}
                {activeSection === 1 && (
                    <p>تحلیل بازارهای رقیب</p>
                )}
                {activeSection === 2 && (
                    <p>مشاوره مالیاتی</p>
                )}
                {activeSection === 3 && (
                    <p>مشاوره حقوقی</p>
                )}
                {activeSection === 4 && (
                    <p>مشاوره مالی</p>
                )}
                {activeSection === 5 && (
                    <p>مشاوره IT</p>
                )}
            </div>
                <div className="Madrese-content2-lists">
                <a href='m1' className={activeSection === 0 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 0)}>ارائه Buseiness plan</a>
                <a href='m2' className={activeSection === 1 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 1)}>تحلیل بازارهای رقیب</a>
                <a href='m3' className={activeSection === 2 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 2)}>مشاوره مالیاتی</a>
                <a href='m4' className={activeSection === 3 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 3)}>مشاوره حقوقی</a>
                <a href='m5' className={activeSection === 4 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 4)}>مشاوره مالی</a>
                <a href='m6' className={activeSection === 5 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 5)}>مشاوره IT</a>
                </div>
            </div>
            <div className='Madrese-sabt-darkhast'>
                <h1>همین حالا کسب و کار تو قدرتمند کن !</h1>
                <button type="submit">ثبت درخواست مشاوره</button>
            </div>
            <h1 className='Madrese-roadmap-header'>ثبات‌داده قراره دقیقا چیکار کنه ؟</h1>
            <div className='Madrese-roadmap-box' id='m1'>
                <img src={madrese2} alt="icon" width="60%"/>
                <div className='Madrese-roadmap-box-texts'>
                    <h1>ارائه Buseiness plan</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m2'>
                <img src={madrese3} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <h1>تحلیل بازارهای رقیب</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m3'>
                <img src={madrese4} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <h1>مشاوره مالیاتی</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m4'>
                <img src={madrese5} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <h1>مشاوره حقوقی</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m5'>
                <img src={madrese6} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <h1>مشاوره مالی</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m6'>
                <img src={madrese7} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <h1>مشاوره IT</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m5'>
                <img src={madrese7} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <h1>مشاوره ویژه اقتصادی</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Madreseeghtesad;