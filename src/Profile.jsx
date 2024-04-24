import './Profile.css'
import { useState,useEffect } from 'react';
// Images
import profilepic1 from './image/profilepic1.png'
import profile_companie1 from './image/prof1.png'
import profile_companie2 from './image/prof2.png'
import profile_companie3 from './image/prof3.jpg'
import profile_companie4 from './image/prof4.png'
import profile_companie5 from './image/prof5.jpg'
// Icons
import profile_edit from './Icons/Profile_edit.svg'
import profile_bookmark_selected from './Icons/Profile_bookmark_selected.svg'
import profile_bookmark from './Icons/Profile_bookmark.svg'
import bookmarked from './Icons/bookmarksaved_blue.svg'
import showpassicon from './Icons/Login_visibilityicon.svg'
import profile_sabtagahiicon1 from './Icons/Profile_sabtagahi1.svg'
import profile_sabtagahiicon2 from './Icons/profile_sabtagahi2.svg'
import profile_editicon from './Icons/Profile_editicon.svg'
import profile_lockicon from './Icons/Profile_lockicon.svg'
import profile_bookmarkicon from './Icons/Profile_bookmarkicon.svg'
import profile_homeicon from './Icons/Profile_homeiconactive.svg'
import profile_searchicon from './Icons/Profile_searchicon.svg'
import profile_accounticon from './Icons/Profile_accounticon.svg'
import profile_logouticon from './Icons/Profile_logouticon.svg'
import profile_uploadicon from './Icons/Profile_uploadicon.svg'
import profile_deleteicon from './Icons/Profile_deleticon.svg'
import profile_showpass1 from './Icons/Login_visibilityicon.svg'
import profile_showpass2 from './Icons/Profile_show.svg'
import { Link } from 'react-router-dom';
const Profile = () => {
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
    const [activespan, setActivespan] = useState(0);
    const [picchange, setPicchange] = useState(false);
    const [showpass1, setShowpass1] = useState(false);
    const [showpass2, setShowpass2] = useState(false);
    const [showpass3, setShowpass3] = useState(false);
    const [showcurrentpass, setShowcurrentpass] = useState(false);
    const [showrepeatpass, setShowrepeatpass] = useState(false);
    const [agahiheader, setAgahiheader] = useState(0);
    const [accounttype, setAccounttype] = useState(0);
    // section mobile page
    const [mobilepage, setMobilepage] = useState(0);
    const [username, setUsername] = useState('سعید');
    const [usernamefamily, setUsernamefamily] = useState('صفاپیشه');
    const [usertavalod, setUsertavalod] = useState('1370/02/12');
    const [userphone, setUserphone] = useState('09123368172');
    const [useremail, setUseremail] = useState('example@gmail.com');
    const [useraddress, setUseraddress] = useState('ازگل، خ هاشم ازگلی، روبروی پارک');
    
    const [selectedProvince, setSelectedProvince] = useState('');
    const provinces = [
        "البرز", "اردبیل", "بوشهر", "چهارمحال و بختیاری", "آذربایجان شرقی",
        "اصفهان", "فارس", "گیلان", "گلستان", "همدان",
        "هرمزگان", "ایلام", "کرمان", "کرمانشاه", "خوزستان",
        "کهگیلویه و بویراحمد", "کردستان", "لرستان", "مرکزی", "مازندران",
        "خراسان شمالی", "قزوین", "قم", "خراسان رضوی", "سمنان",
        "سیستان و بلوچستان", "خراسان جنوبی", "تهران", "آذربایجان غربی", "یزد", "زنجان"
    ];

    const handleChange = (event) => {
    setSelectedProvince(event.target.value);
  };
    // section mobile page
    // see the password function 
    const show1 = () => {
        setShowpass1(!showpass1);
      };
    const show2 = () => {
        setShowpass2(!showpass2);
      };
    const show3 = () => {
        setShowpass3(!showpass3);
      };
    // bookmark cards   
    const Bookmarkcard = (props)=>{
        return (
                    <div className="Profile-bookmark-box">
                        <div className="Profile-bookmark-1">
                            <img src={props.img} alt="companie logo" width="55px" height="55px"/>
                        </div>
                        <div className="Profile-bookmark-2">
                            <h1>{props.companiename}</h1>
                            <h2>{props.companiedes}</h2>
                            <span>{props.companieprice}</span>
                            <h3>{props.companiedate}</h3>     
                        </div>
                        <div className="Profile-bookmark-3">
                            <img src={bookmarked} alt="bookmark icon" width="24px" height="24px"/>
                        </div>
                    </div>
        )
    }
    // agahi cards 
    const Agahicard = (props)=>{
        return(
            <>
                <div className="Profile-agahi-content-card">
                    <div className="Profile-agahi-content-card-cloum1 Profile-agahi-content-card-cloum">
                        {
                            agahiheader === 2 ? (<>
                                <button className='Profile-agahi-content-card-cloum1-btn3'>غیر فعال</button>
                            
                            </>): agahiheader === 1 ? (<>
                                <button className='Profile-agahi-content-card-cloum1-btn4'>در حال برسی</button>
                            </>):(<>      
                                <button className='Profile-agahi-content-card-cloum1-btn1'>ویرایش آگهی</button>
                                <button className='Profile-agahi-content-card-cloum1-btn2'>ارتقای آگهی</button>
                            </>)
                        }
                    </div>
                    <div className="Profile-agahi-content-card-cloum2 Profile-agahi-content-card-cloum">
                        <h1>{props.price}</h1>
                    </div>
                    <div className="Profile-agahi-content-card-cloum3 Profile-agahi-content-card-cloum">
                        <h1>{props.header} ️</h1>
                        <h2>{props.des}</h2>
                    </div>
                    <div className="Profile-agahi-content-card-cloum4 Profile-agahi-content-card-cloum">
                        <img src={props.img} alt="companie logo" width="55px" height="55px"/>
                    </div>
                </div>
            </>
        )
    }
    // show password function
    const handleshowcurrent = ()=>{
        if (showcurrentpass === false) {
            setShowcurrentpass(true)
        }else{
            setShowcurrentpass(false)
        }
    }
    // show password function
    // show password function
    const handleshowrepeat = ()=>{
        if (showrepeatpass === false) {
            setShowrepeatpass(true)
        }else{
            setShowrepeatpass(false)
        }
    }
    // show password function
    return ( 
      windowWidth >= 500 ? ( <div className="Profile-split">
      {
          picchange === true ? (
              <>

              </>
          ) : null
      }
      <div className="Profile-content">
          {
              activespan === 0 ? (
                  <>
                       <div className="Profile-content-sex">
              <h1>جنسیت</h1>
              <div className="Profile-content-sex-b">
                  <button type="submit">آقا</button>
                  <button type="submit">خانم</button>
              </div>
          </div>
          <div className="Profile-content-other">
              <div className="Profile-content-pic">
                  <img src={profilepic1} alt="profile picture" width="88px" height="88px"/>
                  <div className="Profile-content-pic-text">
                      <h1>سعید صفاپیشه</h1>
                      <span>۰۹۱۲۳۴۵۶۷۸۹</span>
                  </div>
              </div>
              <div className="Profile-content-row">
                  <label for="profile-name">نام</label>
                  <label for="profile-family">نام‌خانوادگی</label>
              </div>
              <div className="Profile-content-row">
                  <input type="text" name="" id="profile-name" required/>
                  <input type="text" name="" id="profile-family" required/>
              </div>
              {/* next row */}
              <div className="Profile-content-row">
                  <label for="profile-phone">شماره تماس</label>
                  <label for="profile-email">ایمیل</label>
              </div>
              <div className="Profile-content-row">
                  <input type="text" name="" id="profile-phone" required/>
                  <input type="email" name="" id="profile-email" required/>
              </div>
              {/* next row */}
              <div className="Profile-content-row">
                  <label for="profile-city">شهر</label>
                  <label for="profile-address">آدرس</label>
              </div>
              <div className="Profile-content-row">
                  <select name="" id="profile-city" required>
                      <option value="default">انتخاب</option>
                      <option value="tehran">تهران</option>
                      <option value="mashhad">مشهد</option>
                      <option value="isfahan">اصفهان</option>
                      <option value="karaj">کرج</option>
                      <option value="tabriz">تبریز</option>
                      <option value="shiraz">شیراز</option>
                      <option value="qom">قم</option>
                      <option value="ahvaz">اهواز</option>
                      <option value="kermanshah">کرمانشاه</option>
                      <option value="urmia">ارومیه</option>
                      <option value="rasht">رشت</option>
                      <option value="zahedan">زاهدان</option>
                      <option value="hamedan">همدان</option>
                      <option value="kerman">کرمان</option>
                      <option value="yazd">یزد</option>
                      <option value="ardabil">اردبیل</option>
                      <option value="bandar_abbas">بندرعباس</option>
                      <option value="arak">اراک</option>
                      <option value="eslamshahr">اسلام‌شهر</option>
                      <option value="neyshabur">نیشابور</option>
                      <option value="babol">بابل</option>
                      <option value="amol">آمل</option>
                      <option value="sari">ساری</option>
                      <option value="qazvin">قزوین</option>
                      <option value="khorramabad">خرم‌آباد</option>
                      <option value="qarchak">قرچک</option>
                      <option value="borujerd">بروجرد</option>
                      <option value="mahabad">مهاباد</option>
                      <option value="sanandaj">سنندج</option>
                      <option value="gorgan">گرگان</option>
                      <option value="shahriar">شهریار</option>
                      <option value="varamin">ورامین</option>
                      <option value="bandar_anzali">بندر انزلی</option>
                      <option value="behshahr">بهشهر</option>
                      <option value="zanjan">زنجان</option>
                      <option value="saveh">ساوه</option>
                      <option value="maragheh">مراغه</option>
                      <option value="semnan">سمنان</option>
                      <option value="shirvan">شیروان</option>
                      <option value="gonbad_kavus">گنبدکاووس</option>
                      <option value="andimeshk">اندیمشک</option>
                      <option value="abadan">آبادان</option>
                      <option value="dezful">دزفول</option>
                      <option value="masjed_soleyman">مسجد سلیمان</option>
                      <option value="shush">شوش</option>
                      <option value="ilam">ایلام</option>
                      <option value="malayer">ملایر</option>
                      <option value="sarpol_zahab">سرپل ذهاب</option>
                      <option value="kangavar">کنگاور</option>
                      <option value="farsan">فارسان</option>
                      <option value="lahijan">لاهیجان</option>
                      <option value="shahroud">شاهرود</option>
                      <option value="mahabad">مهاباد</option>
                      <option value="saghez">سقز</option>
                      <option value="borazjan">برازجان</option>
                      <option value="khorramshahr">خرمشهر</option>
                      <option value="naqadeh">نقده</option>
                      <option value="rudsar">رودسر</option>
                      <option value="sabzevar">سبزوار</option>
                  </select>
                  <input type="email" name="" id="profile-address" required/>
              </div>
              <button type="button">ویرایش پروفایل<img src={profile_edit} alt="edit profile icon" width="24px" height="24px"/></button>
          </div>
                  </>
              ) : activespan === 1 ? (
                  <div className="Profile-bookmark">
                      <Bookmarkcard img={profile_companie1} companiename="مدیر روابط عمومی" companiedes="دفتر معماری زندیگان" companieprice="حقوق از ۱۵ میلیون تومان" companiedate="لحظاتی پیش، اصفهان"></Bookmarkcard>
                      <Bookmarkcard img={profile_companie2} companiename="استخدام مشاور آقا ️" companiedes="کلینیک ارگانیک مایندد" companieprice="حقوق از ۲۰ میلیون تومان" companiedate="لحظاتی پیش، اصفهان"></Bookmarkcard>
                      <Bookmarkcard img={profile_companie3} companiename="باریستا کار" companiedes="کافه کاما" companieprice="حقوق از ۱۰ میلیون تومان" companiedate="لحظاتی پیش، تهران"></Bookmarkcard>
                      <Bookmarkcard img={profile_companie4} companiename="مدیر روابط عمومی" companiedes="کافه کاما" companieprice="حقوق از ۲۰ میلیون تومان" companiedate="لحظاتی پیش، اصفهان"></Bookmarkcard>
                      <Bookmarkcard img={profile_companie5} companiename="استخدام مشاور آقا ️" companiedes="دفتر معماری زندیگان" companieprice="حقوق از ۱۰ میلیون تومان" companiedate="لحظاتی پیش، تهران"></Bookmarkcard>
                  </div>
                  
                  
              ) : activespan === 2 ? (
                  <div className="Profile-changep">
                      <div className="Profile-changep-row">
                          <div className="Profile-changep-row-box">
                              <label htmlFor="currentpass">رمز عبور فعلی</label>
                              <input type={showpass1 ? "text" : "password"} name="" id="currentpass" /><img src={showpassicon} alt="show password" width="24px" height="24px" onClick={show1}/>
                          </div>
                      </div>
                      <div className="Profile-changep-row">
                          <div className="Profile-changep-row-box2">
                              <label htmlFor="currentpass">رمز عبور جدید</label>
                              <input type={showpass2 ? "text" : "password"} name="" id="currentpass" /><img src={showpassicon} alt="show password" width="24px" height="24px" onClick={show2}/>
                          </div>
                          <div className="Profile-changep-row-box2">
                              <label htmlFor="currentpass">تکرار رمز عبور جدید</label>
                              <input type={showpass3 ? "text" : "password"} name="" id="currentpass" /><img src={showpassicon} alt="show password" width="24px" height="24px" onClick={show3}/>
                          </div>
                      </div>
                      <button type="submit">ثبت تغییرات</button>
                  </div>
              ) : activespan === 3 ? (
                  <div className='Profile-agahi'>
                      <div className="Profile-agahi-headers">
                          <div className="Profile-agahi-headers-text">
                              <h1 onClick={()=>setAgahiheader(0)} className={agahiheader === 0 ? 'Profile-agahi-headers-text-active' : ''}>آگهی‌های فعال</h1>
                              <h1 onClick={()=>setAgahiheader(1)} className={agahiheader === 1 ? 'Profile-agahi-headers-text-active' : ''}>در حال بررسی</h1>
                              <h1 onClick={()=>setAgahiheader(2)} className={agahiheader === 2 ? 'Profile-agahi-headers-text-active' : ''}>آگهی‌های غیر فعال</h1>
                          </div>                              
                      </div>
                      <div className="Profile-agahi-content">
                              {
                                  agahiheader === 0 ? (
                                      <>
                                          <Agahicard img={profile_companie1} header="استخدام مشاور آقا ️" price="حقوق از ۲۰ میلیون تومان" des="کلینیک ارگانیک مایندد"></Agahicard>
                                          <Agahicard img={profile_companie3} header="مدیر روابط عمومی ️" price="حقوق از ۱۵ میلیون تومان" des="دفتر معماری زندیگان"></Agahicard>                            
                                      </>
                                  ) : agahiheader === 1 ? (
                                      <>
                                          <Agahicard img={profile_companie1} header="استخدام مشاور آقا ️" price="حقوق از ۲۰ میلیون تومان" des="کلینیک ارگانیک مایندد"></Agahicard>                          
                                      </>
                                  ) : agahiheader === 2 ? (
                                      <>
                                          <Agahicard img={profile_companie1} header="استخدام مشاور آقا ️" price="حقوق از ۲۰ میلیون تومان" des="کلینیک ارگانیک مایندد"></Agahicard>
                                          <Agahicard img={profile_companie3} header="مدیر روابط عمومی ️" price="حقوق از ۱۵ میلیون تومان" des="دفتر معماری زندیگان"></Agahicard>                            
                                          <Agahicard img={profile_companie4} header="مدیر روابط عمومی ️" price="حقوق از ۱۵ میلیون تومان" des="دفتر معماری زندیگان"></Agahicard>                            
                                      </>
                                  ) : null
                              }
                      </div>
                  </div>
              ) : activespan === 4 ? (
                  <div className="Profile-sabtagahi">
                      <div className="Profile-sabtagahi-header">
                          <h1>برای ثبت آگهی ابتدا باید نوع آگهی حساب خود را انتخاب کنید.</h1>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                      </div>
                      <div className="Profile-sabtagahi-content">
                          <div className="Profile-sabtagahi-content-box">
                              <div className="Profile-sabtagahi-content-box-header">
                                  <h1>ارائه خدمات</h1>
                                  <img src={profile_sabtagahiicon2} alt="icon" />
                              </div>
                              <div className="Profile-sabtagahi-content-box-texts">
                                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                              </div>
                              <button type="submit">ثبت آگهی خدماتی</button>
                          </div>
                          <div className="Profile-sabtagahi-content-box">
                              <div className="Profile-sabtagahi-content-box-header">
                                  <h1>ارائه خدمات</h1>
                                  <img src={profile_sabtagahiicon1} alt="icon" />
                              </div>
                              <div className="Profile-sabtagahi-content-box-texts">
                                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                              </div>
                              <button type="submit">ثبت آگهی خدماتی</button>
                          </div>
                      </div>
                  </div>
              ) : activespan === 5 ? (
                  <div className="Profile-eshterak">
                      <div className="Profile-eshterak-header">
                          <h1>اشتراک ثبات‌داده</h1>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                      </div>
                      <div className="Profile-eshterak-price">
                          <div className="Profile-eshterak-price-cloum">
                              <h1>اشتراک سطح ۱</h1>
                              <h2>اشتراک سطح ۱</h2>
                              <h2>اشتراک سطح ۱</h2>
                              <h2>اشتراک سطح ۱</h2>
                              <h2>اشتراک سطح ۱</h2>
                              <span>۵۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum Profile-eshterak-price-cloum-special">
                              <div className="Profile-eshterak-price-cloum-special-header">
                                  <h1>امکانات سطح ۲</h1>
                                  <h2>(محبوب کاربران)</h2>
                              </div>
                              <h2>امکانات سطح ۲</h2>
                              <h2>امکانات سطح ۲</h2>
                              <h2>امکانات سطح ۲</h2>
                              <h2>امکانات سطح ۲</h2>
                              <span>۸۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                          <div className="Profile-eshterak-price-cloum">
                              <h1>امکانات سطح ۳</h1>
                              <h2>امکانات سطح ۳</h2>
                              <h2>امکانات سطح ۳</h2>
                              <h2>امکانات سطح ۳</h2>
                              <h2>امکانات سطح ۳</h2>
                              <span>۱۲۰,۰۰۰ تومان</span>
                              <button type="submit">خرید اشتراک</button>
                          </div>
                      </div>
                  </div>
              ) : (
                  <div className="Profile-rezome">
                      <h1>رزومه شما</h1>
                      <p>با بارگذاری رزومه خود در سایت ثبات‌داده به راحتی برای هر آگهی شغلی که میخواهید رزومه را ارسال کنید.</p>
                      <span>هنوز رزومه‌ای ثبت نکرده اید</span>
                      <button>بارگذاری رزومه</button>
                  </div>
              ) 
          }         
      </div>
      <div className="Profile-category">
          <h1>پروفایل</h1>
          <span onClick={()=>setActivespan(0)} className={activespan === 0 ? 'Profile-category-active-span' : ''}>اطلاعات کاربری</span>
          <span onClick={()=>setActivespan(1)} className={activespan === 1 ? 'Profile-category-active-span' : ''}><img src={activespan === 1 ? profile_bookmark_selected : profile_bookmark} alt="bookmark icon" width="24px" height="24px"/>آگهی‌های نشان شده</span>
          <span onClick={()=>setActivespan(2)} className={activespan === 2 ? 'Profile-category-active-span' : ''}>رمز عبور</span>
          {/* <span onClick={()=>setActivespan(3)} className={activespan === 3 ? 'Profile-category-active-span' : ''}>آگهی‌های من</span>
          <span onClick={()=>setActivespan(4)} className={activespan === 4 ? 'Profile-category-active-span' : ''}>ثبت آگهی</span> */}
          <span onClick={()=>setActivespan(5)} className={activespan === 5 ? 'Profile-category-active-span' : ''}>اشتراک</span>
          {/* <span onClick={()=>setActivespan(6)} className={activespan === 6 ? 'Profile-category-active-span' : ''}><img src={activespan === 6 ? profile_rezomeiconblue : profile_rezomeiconwhite} alt="bookmark icon" width="24px" height="24px"/>رزومه من</span> */}
          <h2>خروج از حساب</h2>
      </div>
  </div>) : (
            mobilepage === 0 ? (<div className='Profile-mobile'>
            {/* MENU AREA */}
            <div className="Profile-mobile-menu">
                <Link to={'/'}>
                <img src={profile_homeicon} alt="home icon" />
                    <h1>خانه</h1>
                </Link>
                <Link to={'/companies'}>
                <img src={profile_searchicon} alt="search icon" />
                    <h1>جستجو</h1>
                </Link>
                <Link to={'/login'}>
                <img src={profile_accounticon} alt="home icon" />
                    <h1>پروفایل</h1>
                </Link>
            </div>
            <div className="Profile-mobile-header">
                <h1>{mobilepage === 0 ? "پروفایل" : mobilepage === 1 ? "اطلاعات حساب" : mobilepage === 2 ? "تغییر رمز عبور" : mobilepage === 3 ? "نشان شده" : "اشتراک"}</h1>
            </div>
            {/* MENU AREA */}
            <div className="Profile-mobile-header-name">
                <div className="Profile-mobile-header-name-name">
                    <img src={profilepic1} alt="profile pic" />
                    <div className="Profile-mobile-header-number">
                        <h1>سعید صفاپیشه</h1>
                        <h2>۰۹۱۲۳۴۵۶۷۸۹</h2>
                    </div>
                </div>
                <div className="Profile-mobile-header-name-account">
                    {
                        accounttype === 0 ? (
                        <>
                        <h1>حساب معمولی</h1>
                        <button>ارتقا</button>
                        </>
                        ) : 
                        (
                        <>
                            <h2>طلایی</h2>
                        </>
                        )
                    }
                </div>
            </div>
            <div className="Profile-mobile-row Profile-mobile-row1" onClick={() => setMobilepage(1)}>
                <img src={profile_editicon} alt="edit icon" />
                <h1>ویرایش حساب</h1>
            </div>
            <div className="Profile-mobile-row" onClick={() => setMobilepage(2)}>
                <img src={profile_lockicon} alt="edit icon" />
                <h1>تغییر رمز عبور</h1>
            </div>
            <div className="Profile-mobile-row" onClick={() => setMobilepage(3)}>
                <img src={profile_bookmarkicon} alt="edit icon" />
                <h1>شرکت‌های نشان شده</h1>
            </div> 
            <div className="Profile-mobile-row" onClick={() => setMobilepage(4)}>
                <h1 className='Profile-mobile-row-eshterak'>اشتراک</h1>
            </div>
            <div className="Profile-mobile-logout">
                <img src={profile_logouticon} alt="logout icon" />
                <h1>خروج از حساب</h1>
            </div>
        </div>) : mobilepage === 1 ? (<div className='Profile-mobile'>
             {/* MENU AREA */}
             <div className="Profile-mobile-menu">
                <Link to={'/'}>
                <img src={profile_homeicon} alt="home icon" />
                    <h1>خانه</h1>
                </Link>
                <Link to={'/companies'}>
                <img src={profile_searchicon} alt="search icon" />
                    <h1>جستجو</h1>
                </Link>
                <Link to={'/login'}>
                <img src={profile_accounticon} alt="home icon" />
                    <h1>پروفایل</h1>
                </Link>
            </div>
            <div className="Profile-mobile-header">
                <h1>{mobilepage === 0 ? "پروفایل" : mobilepage === 1 ? "اطلاعات حساب" : mobilepage === 2 ? "تغییر رمز عبور" : mobilepage === 3 ? "نشان شده" : "اشتراک"}</h1>
            </div>
            {/* MENU AREA */}
            <div className="Profile-mobile-header-name">
                <div className="Profile-mobile-header-name-name-edit">
                    <img src={profilepic1} alt="profile pic" />
                    <div className="Profile-mobile-header-section-edit">
                        <div className="Profile-mobile-header-section-edit-text">
                            <h1>آپلود تصویر</h1>
                            <img src={profile_uploadicon} alt="upload icon" />
                        </div>
                        <div className="Profile-mobile-header-section-edit-text">
                            <h1>خذف تصویر</h1>
                            <img src={profile_deleteicon} alt="delete icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Profile-mobile-select-sex">
                    <h1>جنسیت</h1>
                    <div className="Profile-mobile-select-sex-radio">
                        <label htmlFor="Profile-mobile-agha">آقا</label>
                        <input type="radio" name="gender" id="Profile-mobile-agha" />
                        <label htmlFor="Profile-mobile-khanom">خانم</label>
                        <input type="radio" name="gender" id="Profile-mobile-khanom" />
                    </div>
            </div>
            <div className="Profile-mobile-inputs">
            <label htmlFor="username">نام</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="usernamefamily">نام‌خانوادگی</label>
            <input type="text" id="usernamefamily" value={usernamefamily} onChange={(e) => setUsernamefamily(e.target.value)} />

            <label htmlFor="usertavalod">تاریخ تولد</label>
            <input type="text" id="usertavalod" value={usertavalod} onChange={(e) => setUsertavalod(e.target.value)} />

            <label htmlFor="userphone">شماره تماس</label>
            <input type="text" id="userphone" value={userphone} onChange={(e) => setUserphone(e.target.value)} />

            <label htmlFor="useremail">ایمیل</label>
            <input type="text" id="useremail" value={useremail} onChange={(e) => setUseremail(e.target.value)} />

            <label htmlFor="provinceSelect">شهر</label>
            <select id="provinceSelect" value={selectedProvince} onChange={handleChange}>
                <option value="">{selectedProvince === '' ? "انتخاب کنید ..." : selectedProvince}</option>
                {provinces.map((province, index) => (
                <option key={index} value={province}>{province}</option>
                ))}
            </select>
            
            <label htmlFor="useraddress">آدرس</label>
            <input type="text" id="useraddress" value={useraddress} onChange={(e) => setUseraddress(e.target.value)} />
            </div>
        </div>) : mobilepage === 2 ? (<div className='Profile-mobile'>
            {/* password section */}
             {/* MENU AREA */}
             <div className="Profile-mobile-menu">
                <Link to={'/'}>
                <img src={profile_homeicon} alt="home icon" />
                    <h1>خانه</h1>
                </Link>
                <Link to={'/companies'}>
                <img src={profile_searchicon} alt="search icon" />
                    <h1>جستجو</h1>
                </Link>
                <Link to={'/login'}>
                <img src={profile_accounticon} alt="home icon" />
                    <h1>پروفایل</h1>
                </Link>
            </div>
            <div className="Profile-mobile-header">
                <h1>{mobilepage === 0 ? "پروفایل" : mobilepage === 1 ? "اطلاعات حساب" : mobilepage === 2 ? "تغییر رمز عبور" : mobilepage === 3 ? "نشان شده" : "اشتراک"}</h1>
            </div>
            {/* MENU AREA */}
            <div className="Profile-mobile-header-name">
                <div className="Profile-mobile-header-name-name">
                    <img src={profilepic1} alt="profile pic" />
                    <div className="Profile-mobile-header-number">
                        <h1>سعید صفاپیشه</h1>
                        <h2>۰۹۱۲۳۴۵۶۷۸۹</h2>
                    </div>
                </div>
                <div className="Profile-mobile-header-name-account">
                    {
                        accounttype === 0 ? (
                        <>
                        <h1>حساب معمولی</h1>
                        <button>ارتقا</button>
                        </>
                        ) : 
                        (
                        <>
                            <h2>طلایی</h2>
                        </>
                        )
                    }
                </div>
            </div>
            <div className="Profile-mobile-change-pass">
                    <label htmlFor="">رمز عبور فعلی</label>
                    <div className="Profile-mobile-change-pass-row-input">
                        <img src={profile_showpass2} alt="show password icon" onClick={handleshowcurrent}/>
                        <input type={showcurrentpass === true ? "text" : "password"} />
                    </div>
                    <label htmlFor="">رمز عبور جدید</label>
                    <div className="Profile-mobile-change-pass-row-input">
                        <img src={profile_showpass1} alt="show password icon" onClick={handleshowrepeat}/>
                        <input type={showrepeatpass === true ? "text" : "password"} />

                    </div>
                    <label htmlFor="">تکرار رمز عبور جدید</label>
                    <div className="Profile-mobile-change-pass-row-input">
                        <img src={profile_showpass1} alt="show password icon" onClick={handleshowrepeat}/>
                        <input type={showrepeatpass === true ? "text" : "password"} />

                    </div>
                    <button type="submit">ثبت تغییرات</button>
            </div>
        </div>) : mobilepage === 3 ? (<div className='Profile-mobile'>
             {/* MENU AREA */}
             <div className="Profile-mobile-menu">
                <Link to={'/'}>
                <img src={profile_homeicon} alt="home icon" />
                    <h1>خانه</h1>
                </Link>
                <Link to={'/companies'}>
                <img src={profile_searchicon} alt="search icon" />
                    <h1>جستجو</h1>
                </Link>
                <Link to={'/login'}>
                <img src={profile_accounticon} alt="home icon" />
                    <h1>پروفایل</h1>
                </Link>
            </div>
            <div className="Profile-mobile-header">
                <h1>{mobilepage === 0 ? "پروفایل" : mobilepage === 1 ? "اطلاعات حساب" : mobilepage === 2 ? "تغییر رمز عبور" : mobilepage === 3 ? "نشان شده" : "اشتراک"}</h1>
            </div>
            {/* MENU AREA */}
            
        </div>) : mobilepage === 4 ? (<div className='Profile-mobile'>
             {/* MENU AREA */}
             <div className="Profile-mobile-menu">
                <Link to={'/'}>
                <img src={profile_homeicon} alt="home icon" />
                    <h1>خانه</h1>
                </Link>
                <Link to={'/companies'}>
                <img src={profile_searchicon} alt="search icon" />
                    <h1>جستجو</h1>
                </Link>
                <Link to={'/login'}>
                <img src={profile_accounticon} alt="home icon" />
                    <h1>پروفایل</h1>
                </Link>
            </div>
            <div className="Profile-mobile-header">
                <h1>{mobilepage === 0 ? "پروفایل" : mobilepage === 1 ? "اطلاعات حساب" : mobilepage === 2 ? "تغییر رمز عبور" : mobilepage === 3 ? "نشان شده" : "اشتراک"}</h1>
            </div>
            {/* MENU AREA */}
        </div>) : (null)
        ) 
     )
}
 
export default Profile;