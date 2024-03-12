import './Profile.css'
import { useState } from 'react';
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
import profile_rezomeiconblue from './Icons/Profile_rezomeicon.svg'
import profile_rezomeiconwhite from './Icons/Profile_rezomewhite.svg'
const Profile = () => {
    const [activespan, setActivespan] = useState(0);
    const [picchange, setPicchange] = useState(false);
    const [showpass1, setShowpass1] = useState(false);
    const [showpass2, setShowpass2] = useState(false);
    const [showpass3, setShowpass3] = useState(false);
    const [agahiheader, setAgahiheader] = useState(0);
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
    return ( 
        <div className="Profile-split">
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
                <span onClick={()=>setActivespan(3)} className={activespan === 3 ? 'Profile-category-active-span' : ''}>آگهی‌های من</span>
                <span onClick={()=>setActivespan(4)} className={activespan === 4 ? 'Profile-category-active-span' : ''}>ثبت آگهی</span>
                <span onClick={()=>setActivespan(5)} className={activespan === 5 ? 'Profile-category-active-span' : ''}>اشتراک</span>
                <span onClick={()=>setActivespan(6)} className={activespan === 6 ? 'Profile-category-active-span' : ''}><img src={activespan === 6 ? profile_rezomeiconblue : profile_rezomeiconwhite} alt="bookmark icon" width="24px" height="24px"/>رزومه من</span>
                <h2>خروج از حساب</h2>
            </div>
        </div>
     );
}
 
export default Profile;