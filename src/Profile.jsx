import './Profile.css'
import { useState } from 'react';
// Images
import profilepic1 from './image/profilepic1.png'
import profile_companie1 from './image/prof1.png'
import profile_companie2 from './image/prof2.png'
import profile_companie3 from './image/prof3.jpg'
import profile_companie4 from './image/prof4.png'
import profile_companie5 from './image/prof5.jpg'
import profile_companie6 from './image/prof6.jpg'
// Icons
import profile_edit from './Icons/Profile_edit.svg'
import profile_bookmark_selected from './Icons/Profile_bookmark_selected.svg'
import profile_bookmark from './Icons/Profile_bookmark.svg'
import bookmarked from './Icons/bookmarksaved_blue.svg'
const Profile = () => {
    const [activespan, setActivespan] = useState(0)
    const [picchange, setPicchange] = useState(false)

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
                        <>
                        </>
                    ) : activespan === 3 ? (
                        <>
                            
                        </>
                    ) : activespan === 4 ? (
                        <>
                            
                        </>
                    ) : activespan === 5 ? (
                        <>
                            
                        </>
                    ) : (
                        <>
                            
                        </>
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
                <span onClick={()=>setActivespan(6)} className={activespan === 6 ? 'Profile-category-active-span' : ''}>رزومه من</span>
                <h2>خروج از حساب</h2>
            </div>
        </div>
     );
}
 
export default Profile;