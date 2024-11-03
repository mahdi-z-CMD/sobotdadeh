import './Contact.css'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Icons
import Contactemailicon from './Icons/Contactemailicon.svg'
import Contactfaxicon from './Icons/Contactfaxicon.svg'
import Contacttellicon from './Icons/Contacttelicon.svg'
import Contactwarninglicon from './Icons/Contactwarningicon.svg'
import Contactlocicon from './Icons/Contactlocicon.svg'
const Contact = () => {
  const { t } = useTranslation();
    return ( 
        <div>
            <Helmet>
                <title>ثبات داده - تماس با ما</title>
            </Helmet>
        <div className="header-Contact">
            <h1>{t('تماس با ما')}</h1>
        </div>
        <div className="Contact-content">
            <div className="Contact-content-back">
                <div className="Contact-poshtiban">
                    <h1>{t('پیام به پشتیبانی')}</h1>
                    <h2>{t('با وارد کردن اطلاعات خود در فرم زیر کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت.')}</h2>
                    <span>{t('(این اطلاعات فقط برای تماس با شما استفاده خواهد شد.)')}</span>
                    <label htmlFor="">{t('نام و نام خانوادگی')}</label>
                    <input type="text" name="" id="" placeholder={t('نام و نام خانوادگی')}/>
                    <label htmlFor="">{t('شماره تماس')}</label>
                    <input type="text" name="" id="" placeholder='09123456789'/>
                    <label htmlFor="">{t('توضیحات')}</label>
                    <textarea type="text" name="" id="" className='Contact-tozihat'/>
                    <button type="submit">{t('ارسال پیام')}</button>
                </div>
                <div className="Contact-location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5784.444131744092!2d48.19462621700314!3d30.451659765915565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1720185459868!5m2!1sen!2s"
                    width="400"
                    height="300"
                    style={{ border: "0" }}  // Convert inline style to JavaScript object
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="Contact-loc-row">
                        <img src={Contactlocicon} alt="" />
                        <h1>{t('آدرس')}:</h1>
                        <span>{t('خوزستان، منطقه آزاد اروند، خرمشهر، کوی دانشگاه، معین 2 , پلاک 9')}</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contacttellicon} alt="" />
                        <h1>{t('تلفن')}:</h1>
                        <span>۰۶۱-۵۳۲۶۸۱۲۲</span>
                    </div>
                    {/* <div className="Contact-loc-row">
                        <img src={Contactfaxicon} alt="" />
                        <h1>فکس:</h1>
                        <span>۰۲۱-۷۷۸۸۹۹۰۰</span>
                    </div> */}
                    <div className="Contact-loc-row">
                        <img src={Contactemailicon} alt="" />
                        <h1>{t('ایمیل')}:</h1>
                        <span>sobotdadeh@info.com</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contactwarninglicon} alt="" />
                        <span>{t('توجه داشته باشید که 09830007871 تنها شماره‌ای است که ‌ثبات‌داده از طریق آن برای کاربران و مشتریان خود پیامک ارسال می‌کند.')}</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contactwarninglicon} alt="" />
                        <span>{t('در صورت دریافت پیامک از شماره دیگر با نام ثبات‌داده، لطفاً جهت پیگیری قانونی آن را به sobotdadeh@info.com اطلاع دهید.')}</span>
                    </div>
                </div>
            </div>
        </div>    
    </div>
     );
}
 
export default Contact;