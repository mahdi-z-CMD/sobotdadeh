import './Madreseeghtesad.css'
import { useState, useEffect, useRef } from 'react'
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
    const sectionRefs = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null)
  ];
  const handleSectionClick2 = (e, index) => {
    e.preventDefault();
    sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index); // Assuming setActiveSection is a state updater function
};

    return ( 
        <div>
            <div className="Madrese-bg">
                <div className='Madrese-content'>
                    <img src={madrese1} alt="icon" />
                    <div className="Madrese-content-texts">
                        <h1>اهمیت کسب و کار تو از نگاه ثبات‌داده</h1>
                        <p>در عصر هوش مصنوعی و داده محور شدن تمامی کسب و کارها، ثبات داده تلاش می کند تا مشاوره ای اقتصادی را بر پایه استاندارد های جهانی را برای تجارت شما به ارمغان سازد.</p>
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
                  <a className={activeSection === 0 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 0)}>طرح جامع کسب و کار</a>
                  <a className={activeSection === 1 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 1)}>تحلیل بازارهای رقیب</a>
                  <a className={activeSection === 2 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 2)}>مشاوره مالیاتی</a>
                  <a className={activeSection === 3 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 3)}>مشاوره حقوقی</a>
                  <a className={activeSection === 4 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 4)}>مشاوره مالی</a>
                  <a className={activeSection === 5 ? 'Madrese-active-list' : ''} onClick={(e) => handleSectionClick2(e, 5)}>مشاوره IT</a>
                </div>
            </div>
            <div className='Madrese-sabt-darkhast'>
                <h1>همین حالا کسب و کار تو قدرتمند کن !</h1>
                <button type="submit">ثبت درخواست مشاوره</button>
            </div>
            <h1 className='Madrese-roadmap-header'>ثبات‌داده قراره دقیقا چیکار کنه ؟</h1>
            <div className='Madrese-roadmap-box' id='m1' ref={sectionRefs[0]}>
                <img src={madrese2} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <h1>طرح جامع کسب و کار</h1>
                    <p>تا به حال برایتان پیش آمده که بدون داشتن مقصد، مسیر و نقشه راه، دل به جاده بزنید؟ مطمئنا هیچ سفری را بدون مشخص کردن مقصد و مسیر شروع نمی‌کنید! البته اگر به دنبال ماجراجویی و ریسک باشید، موضوع فرق می‌کند! حتی اگر فرض کنیم که هدفتان از سفر کردن ماجراجویی باشد، باز هم فکر نمی‌کنم دلتان بخواهد سرمایه‌تان را هم به دست ماجراجویی بسپارید!  
طرح جامع تجارت  (Business Plan) در واقع همان نقشه راه در سفر کسب‌وکار است که به شما کمک می‌کند از همان ابتدا، مسیرتان را واضح‌تر ببینید. بنابراین در ثبات داده تلاش می‌کنیم تا بهترین نقش راه را انتخاب کنید.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m2' ref={sectionRefs[1]}>
                <img src={madrese3} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <h1>تحلیل بازارهای رقیب</h1>
                    <p>استفاده از تکنیک‌های تحلیل رقبا باعث می‌شود با خیال راحت به نتایج آنالیز رقبای خود اتکا کنید. درواقع این روش‌ها پیش‌ازاین امتحان خود را پس داده‌اند. اطلاعاتی که تکنیک‌های تحلیل رقبا در اختیار ما قرار می‌دهند در پیدا کردن مسیر صحیح فعالیت‌های ما بسیار مؤثر هستند. برای مقایسه داده‌ها و تحلیل رقیبان، اول‌ازهمه باید مشخص کنید با چه کسانی رقابت می‌کنید. آنچه در کسب‌وکارهای مشابه شما اثر دارد، لزوماً در برند شما هم جواب نمی‌دهد. خب، چطور می‌توانید رقبا را مشخص کنیم؟ رقبای خودتان را در دودسته قرار بدهید: مستقیم و غیرمستقیم.
رقبای مستقیم کسب‌وکارهایی هستند که محصول یا خدماتی مشابه شما ارائه می‌دهند و می‌تواند جایگزین شما باشد. این رقبا همچنین در منطقه جغرافیایی مشابه شما فعالیت دارند.
رقبای غیرمستقیم کسانی هستند که محصولاتشان با شما یکسان نیست اما نیازهای یکسانی را برطرف می‌کنند.
گفتنش آسان است، اما در عمل بسیاری اوقات این دو اصطلاح با هم اشتباه گرفته می‌شوند.
</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m3' ref={sectionRefs[2]}>
                <img src={madrese4} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <h1>مشاوره مالیاتی</h1>
                    <p>•	مشاوره مالیاتی و مالی
•	خدمات حسابداری مالیاتی و مالی
•	انجام امور پایانه های فروشگاهی و سامانه مودیان مالیاتی و سامانه جامع تجارت
•	خدمات حسابرسی و تهیه صورت های مالی
•	مشاوره مالیات بر ارزش افزوده
•	تنظیم و ارسال اظهارنامه عملکرد
•	تنظیم و ارسال صورتحساب معاملات فصلی
•	مشاوره مالیات اجاره املاک، سرقفلی و مالیات بر ارث
•	تهیه و تنظیم بودجه بندی مالی
•	مهندسی مالی و مالیاتی

چرا باید از خدمات مشاوره مالیاتی استفاده کرد؟
پیچیدگی و تعدد قوانین مالیاتی تمامی کسب و کارها نیاز به دریافت خدمات مشاوره مالیاتی دارند. مشاوران مالیاتی شرکت  ثبات داده سال هاست که مشاور مالیاتی شرکت های بزرگ و کوچک بوده اند و تجارب ارزنده ای در این حوزه کسب کرده اند.
مشاوران مالی موسسه مالی ازتا، با تمامی سرفصل های مالیاتی آشنا هستند و تمامی چالش های مالیاتی انواع شرکت های سهامی، غیر تجاری، تضامنی، مسئولیت محدود و غیره را برطرف خواهند کرد. به عنوان مثال، مالیات پزشکان مشمول قوانین بسیار پیچیده ای است و تنظیم اظهارنامه های مالیاتی مشاغل صنعت پزشکی نیازمند دانش و تجربه قابل توجهی است. شرکت حسابداری اَزتا به صورت تخصصی به پرونده های مالیاتی پزشکان رسیدگی میکند.
مزیت رقابتی شرکت حسابداری ازتا نسبت به سایر شرکت های حسابداری، پیگیری پرونده های مالیاتی است. پیگیری پرونده های مالیاتی و دفاع مالیاتی برای کسانی که آشنایی با مسائل مالیاتی ندارند، بسیار پیچیده، زمانبر و به شدت پر هزینه است.
</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m4' ref={sectionRefs[3]}>
                <img src={madrese5} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <h1>مشاوره حقوقی</h1>
                    <p>به واقع چرا با پیشرفت مدرنیته، ضرورت استفاده و کمک گرفتن از مشاوره حقوقی، ضرورت بیشتری یافته است؟ در روزگاری که آن را عصر مدرنیته می نامند و از ویژگی های اصلی این عصر، تنوع و گستردگی روابط انسانی و پیچیده در مناسبات اجتماعی است، طبعا، بروز چالش های بین فردی یا گروهی، از تبعات منطقی اثر مدرنیته است.  
اغلب چالش های مذکور، جنبه حقوقی داشته، و در واقع مناقشات و اختلافات افراد با یکدیگر، غالبا ماهیت حقوقی دارد؛ و همین نکته، ضرورت کارکرد مشاوره حقوقی را اثبات می کند. در جوامع ماقبل مدرنیته، اختلافات، معمولا از طریق کدخدا منشی و مو سفیدی، حل و فصل می گردید. ضمن اینکه طرفین اختلاف نیز، تمایل بیشتری به تصامح و مدارا، از خود نشان می دادند.  اما امروزه، به دلیل افزایش کمیت و پیچیدگی اختلاف ها، مراجعه به مراجع حقوقی و تشکیل پرونده های قضایی، به طور چشمگیری، رو به فزونی است؛ لذا از آنجا که امور حقوقی و قضایی، یک موضوع کاملا تخصصی است، ضرورت مراجعه به مشاوره حقوقی، امری اجتناب ناپذیر است. 
</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m5' ref={sectionRefs[4]}>
                <img src={madrese6} alt="icon"/>
                <div className='Madrese-roadmap-box-texts'>
                    <h1>مشاوره سرمایه گذاری</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className='Madrese-roadmap-box2' id='m6' ref={sectionRefs[5]}>
                <img src={madrese7} alt="icon"/>
                <div className='Madrese-roadmap-box-texts2'>
                    <h1>مشاوره IT</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            {/* next row */}
            <div className='Madrese-roadmap-box' id='m5' ref={sectionRefs[6]}>
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