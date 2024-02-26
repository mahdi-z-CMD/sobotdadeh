import './Footer.css'
// icons
import aparaticon from './Icons/aparaticon.svg'
import telegramicon from './Icons/telegramicon.svg'
import instagramicon from './Icons/instagramicon.svg'
// images
import namadimage1 from './image/namad1.png'
import namadimage2 from './image/namad2.png'
import namadimage3 from './image/namad3.png'
import foterimg from './image/foter.svg' 
const Footer = () => {
    return ( 
        <div className="footer">
      <img src={foterimg} alt="back ground" className='footerbg'/>
      <div className="footet-detail">
        <div className="signup">
          <h1>برای استفاده از امکانات ثبات داده، ثبت‌نام کنید</h1>
          <div className="singup-submit">
            <input type="email" name="email" placeholder='پست الکترونیکی را وارد نمایید ...'/>
            <button type="submit">ثبت درخواست</button>
          </div>
        </div>
        <div className="footer-about">
          <h2>ثبات داده، پلتفرمی برای تمامی شرکت ها</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
        <h1>دسترسی سریع</h1>
        <div className="footer-pages">
          <div className="footer-namads">
            <div className="namads-place">
              <img src={namadimage1} alt="e namad" width="112px" height="112px"/>
            </div>
            <div className="namads-place">
              <img src={namadimage2} alt="e namad" width="90px" height="90px"/>
            </div>
            <div className="namads-place">
              <img src={namadimage3} alt="e namad" width="112px" height="112px"/>
            </div>
          </div>
          <div className="links">
              <div className="links-row">
                <a>سوالات متداول</a>
                <a>پشتیبانی</a>
                <a>درباره ثبات‌داده</a>
              </div>
              <div className="links-row">
                <a>ثبت آگهی شغلی</a>
                <a>قوانین</a>
                <a>ارتباط با ما</a>
              </div>
              <div className="links-row">
                <a>دانلود اپلیکیشن</a>
                <a>بلاگ</a>
              </div>
            </div>
        </div>
        <hr />
        <div className="footer-end">
          <div className="social-icon">
            <img src={aparaticon} alt="aparat icon" width="24px" height="24px"/>
            <img src={instagramicon} alt="instagram icon" width="24px" height="24px"/>
            <img src={telegramicon} alt="telegram icon" width="24px" height="24px"/>
          </div>
          <div className="hoghogh">
            <h1>تمامی حقوق این سایت متعلق به سایت sobotdadeh می‌باشد.</h1>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Footer;