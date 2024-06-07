import './Footer.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
// icons
import aparaticon from './Icons/aparaticon.svg'
import telegramicon from './Icons/telegramicon.svg'
import instagramicon from './Icons/instagramicon.svg'
import whatsappicon from './Icons/whatsapp.png'
import rubikaicon from './Icons/rubialogo.png'
import itaicon from './Icons/italogo.png'

import logoicon from './Icons/logo.svg'
// images
import namadimage1 from './image/namad1.png'
import namadimage2 from './image/namad2.png'
import namadimage3 from './image/namad3.png'
import foterimg from './image/foter.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
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
    return ( 
        <div className="footer">
          {
            windowWidth <= 500 ? (<hr className='footer-hr'></hr>) : (<img src={foterimg} alt="back ground" className='footerbg'/>)
          }
      <div className="footet-detail">
        <div className="signup">
          <h1>{t('برای استفاده از امکانات ثبات داده، ثبت‌نام کنید')}</h1>
          <div className="singup-submit">
            <input type="email" name="email" placeholder={t('أدخل عنوان بريدك الالكتروني...')}/>
            <button type="submit">{t('ثبت درخواست')}</button>
          </div>
        </div>
        <div className="footer-about">
          <h2>{t('تسهیل سرمایه گذاری داده محور')}{windowWidth <= 500 ? (<img src={logoicon} alt="logo icon" />):null}</h2>
          <p>{t('ثبات داده همراه شما در سرمایه گذاری مبتنی بر علم و تجربه است.  در مجموعه ما تلاش می شود تا با تلفیق تجربه تجارت مدرن و شناخت پیچیدگی های تجارت در خاورمیانه نقش راه گویایی از خلق کسب و کار پویا در اختیار شما قرار دهیم')}</p>
        </div>
        <h1>{t('دسترسی سریع')}</h1>
        <div className="footer-pages">
          <div className="footer-namads">
            <div className="namads-place">
              <img src={namadimage1} alt="e namad" width="112px" height="112px"/>
            </div>
            <div className="namads-place">
              {/* <img src={namadimage2} alt="e namad" width="90px" height="90px"/> */}
            </div>
            <div className="namads-place">
              {/* <img src={namadimage3} alt="e namad" width="112px" height="112px"/> */}
            </div>
          </div>
          <div className="links">
              {
                windowWidth <= 500 ? (
                  <div className="links-cloum">
                      <div className="links-cloum-list">
                        <Link to='/soalatmotadavel'>{t('سوالات متداول')}</Link>
                        <Link to='/soalatmotadavel'>{t('پشتیبانی')}</Link>
                        <Link to='/aboutus'>{t('درباره ثبات‌داده')}</Link>
                      </div>
                      <div className="links-cloum-list">
                        <Link to='/ghavanin'>{t('قوانین')}</Link>
                        <Link to='/contact'>{t('ارتباط با ما')}</Link>
                        <Link to='/blog'>{t('مجله ثبات‌داده')}</Link>
                      </div>
                  </div>
                ):(
                  <>
                    <div className="links-row">
                    <Link to='/soalatmotadavel'>{t('سوالات متداول')}</Link>
                        <Link to='/soalatmotadavel'>{t('پشتیبانی')}</Link>
                        <Link to='/aboutus'>{t('درباره ثبات‌داده')}</Link>
                    </div>
                    <div className="links-row">
                    <Link to='/ghavanin'>{t('قوانین')}</Link>
                        <Link to='/contact'>{t('ارتباط با ما')}</Link>
                        <Link to='/blog'>{t('مجله ثبات‌داده')}</Link>
                    </div>
                  </>
                )
              }
              
            </div>
        </div>
        <hr />
        <div className="footer-end">
          <div className="social-icon">
            <img src={aparaticon} alt="aparat icon" width="24px" height="24px"/>
            <img src={instagramicon} alt="instagram icon" width="24px" height="24px"/>
            <img src={telegramicon} alt="telegram icon" width="24px" height="24px"/>
            <img src={itaicon} alt="telegram icon" width="24px" height="24px"/>
            <img src={whatsappicon} alt="telegram icon" width="24px" height="24px"/>
            <img src={rubikaicon} alt="telegram icon" width="24px" height="24px"/>
          </div>
          <div className="hoghogh">
            <h1>{t('تمامی حقوق این سایت متعلق به سایت sobotdadeh می‌باشد.')}</h1>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Footer;