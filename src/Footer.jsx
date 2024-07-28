import './Footer.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
  //  social animation
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [manualHoverIndex, setManualHoverIndex] = useState(-1);

  const icons = [
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/Frv7RnXM6VxWOnbVblack.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/Frv7RnXM6VxWOnbV.png",
          altText: "bale icon",
          link: "https://web.bale.ai/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/Igapblack.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/Igap.png",
          altText: "igap icon",
          link: "https://web.igap.net/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/Instagram_logo_2016black.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/Instagram_logo_2016.png",
          altText: "instagram icon",
          link: "https://www.instagram.com/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/aparatblack.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/Logo_Aparat.png",
          altText: "aparat icon",
          link: "https://www.aparat.com/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/Telegram_logoblack.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/Telegram_logo.png",
          altText: "telegram icon",
          link: "https://web.telegram.org/k/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/eitablack.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/eita.png",
          altText: "eita icon",
          link: "https://web.eitaa.com/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/minimal-black.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/minimal.png",
          altText: "minimal icon",
          link: "https://web.rubika.ir/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/nody-لوگو-سروش-png-1676632510black.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/nody-لوگو-سروش-png-1676632510.png",
          altText: "nody icon",
          link: "https://web.splus.ir/"
      },
      {
          imgSrc: "https://sobotdadeh.com/iconsocial/whatsappblack.png",
          hoverImgSrc: "https://sobotdadeh.com/iconsocial/whatsapp.png",
          altText: "whatsapp icon",
          link: "https://web.whatsapp.com/"
      },
  ];

  useEffect(() => {
      if (!isPaused) {
          const interval = setInterval(() => {
              setHoverIndex(prevIndex => (prevIndex + 1) % icons.length);
          }, 1000);
          return () => clearInterval(interval);
      }
  }, [isPaused, icons.length]);

  const HoverImage = ({ imgSrc, hoverImgSrc, altText, width, height, isHovered, onHover, onLeave, showText }) => {
      const [isPreloaded, setIsPreloaded] = useState(false);

      useEffect(() => {
          const img = new Image();
          img.src = hoverImgSrc;
          img.onload = () => setIsPreloaded(true);
      }, [hoverImgSrc]);

      return (
          <div
              className="hover-image-container"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
          >
              <img
                  src={isHovered ? hoverImgSrc : imgSrc}
                  alt={altText}
                  width={width}
                  height={height}
                  className="social-icon-img"
                  style={{
                      opacity: isPreloaded ? 1 : 1,
                      transform: isHovered ? 'scale(1.4)' : 'scale(1)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease'
                  }}
              />
              {showText && (
                  <div className="social-icon-text">۰۹۱۰۸۳۰۴۳۰۱ , @sobotdadeh</div>
              )}
          </div>
      );
  };
  //  social animation
// check the phone 
const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const validatePhoneNumber = (number) => {
    const numberString = number.toString();
    if (numberString.startsWith('09') && numberString.length === 11 && /^\d+$/.test(numberString)) {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (value === '') {
      setIsValid(true);
      setShowError(false);
    } else {
      const valid = validatePhoneNumber(value);
      setIsValid(valid);
      setShowError(!valid);
    }
  };

  const handleClick = () => {
    if (validatePhoneNumber(phone)) {
      navigate(`/login?phone=${phone}&loginarea=false`);
    } else {
      setShowError(true);
    }
  };
// check the phone
    return ( 
        <div className="footer">
          {
            windowWidth <= 500 ? (<hr className='footer-hr'></hr>) : (<img src={foterimg} alt="back ground" className='footerbg'/>)
          }
      <div className="footet-detail">
        <div className="signup">
          <h1>{t('برای استفاده از امکانات ثبات داده، ثبت‌نام کنید')}</h1>
          <div className="singup-submit">
          <input
            type="text"
            name="phone"
            placeholder="شماره تماس را وارد نمایید ..."
            value={phone}
            onChange={handleChange}
            className={isValid ? 'valid' : 'invalid'}
          />
          {showError && <p className="singup-submit-error">شماره تلفن معتبر نیست</p>}
            <button type="submit" onClick={handleClick}>{t('ثبت درخواست')}</button>
          </div>
        </div>
        <div className="footer-about">
          <div className="footer-about-1">
            <h2>{t('همراهی با ما')}</h2>
            <p>{t('خوزستان، منطقه آزاد اروند، خرمشهر، کوی دانشگاه، معین 2 , پلاک 9')}</p>
          </div>
          <div className="footer-about-2">
            <ul>
              <li>{t('شماره تماس : ۵۳۲۶۸۱۲۲ - ۰۶۱')}</li>
              <li>{t('شماره فضای سایبری : ۰۹۱۰۸۳۰۴۳۰۱')}</li>
              <li>{t('پست الکترونیکی : sobotdadeh@info.com')}</li>
            </ul>
          </div>
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
                        <Link to='/سوالات-متداول'>{t('سوالات متداول')}</Link>
                        <Link to='/سوالات-متداول'>{t('پشتیبانی')}</Link>
                        <Link to='/درباره-ما'>{t('درباره ثبات‌داده')}</Link>
                      </div>
                      <div className="links-cloum-list">
                        <Link to='/قوانین-و-مقررات'>{t('قوانین')}</Link>
                        <Link to='/تماس-با-ما'>{t('ارتباط با ما')}</Link>
                        <Link to='/blog'>{t('مجله ثبات‌داده')}</Link>
                      </div>
                  </div>
                ):(
                  <>
                    <div className="links-row">
                    <Link to='/سوالات-متداول'>{t('سوالات متداول')}</Link>
                        <Link to='/سوالات-متداول'>{t('پشتیبانی')}</Link>
                        <Link to='/درباره-ما'>{t('درباره ثبات‌داده')}</Link>
                    </div>
                    <div className="links-row">
                    <Link to='/قوانین-و-مقررات'>{t('قوانین')}</Link>
                        <Link to='/تماس-با-ما'>{t('ارتباط با ما')}</Link>
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
          {icons.map((icon, index) => (
              <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
              >
                  <HoverImage
                      imgSrc={icon.imgSrc}
                      hoverImgSrc={icon.hoverImgSrc}
                      altText={icon.altText}
                      width="24px"
                      height="24px"
                      isHovered={index === hoverIndex || index === manualHoverIndex}
                      showText={index === manualHoverIndex}
                      onHover={() => {
                          setManualHoverIndex(index);
                          setIsPaused(true);
                      }}
                      onLeave={() => {
                          setManualHoverIndex(-1);
                          setIsPaused(false);
                      }}
                  />
              </a>
          ))}
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