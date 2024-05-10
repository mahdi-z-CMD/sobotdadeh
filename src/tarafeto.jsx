import './Madreseeghtesad.css'
import './tarafeto.css'
import { useState, useEffect } from 'react'
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
            <div className='Madrese-sabt-darkhast'>
                <h1>همین حالا کسب و کار تو قدرتمند کن !</h1>
                <button type="submit">ثبت درخواست مشاوره</button>
            </div>
            <div className='Madrese-roadmap-box' id='m1'>
                <img src={madrese2} alt="icon" width="60%"/>
                <div className='Madrese-roadmap-box-texts'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m2'>
                <img src={madrese3} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m3'>
                <img src={madrese4} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m4'>
                <img src={madrese5} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m5'>
                <img src={madrese6} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m6'>
                <img src={madrese7} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m5'>
                <img src={madrese7} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className="Tarafeto-box-download">
              <h1>باکس دانلود شرکت های ثبات‌داده</h1>
              <div className="Tarafeto-box-download-row">
                <img src={flagIran} alt="Flag iran" />
                <h1>فایل شماره ۱</h1>
                <button><img src={downloadicon} alt="" />دانلود</button>
              </div>
            </div>
            <div className="Madrese-slider">
                    <div className='slider'>
                    <h1>برترین شرکت‌ها</h1>
                    <div className='card-box'>
                        {sliderdata.slice(startIndex, startIndex + (windowWidth <= 500 ? 1 : windowWidth <= 1500 ? 3 : 4)).map((key, index) => (
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
        </div>
     );
}
 
export default Tarafeto;