import './Contact.css'
// Icons
import Contactemailicon from './Icons/Contactemailicon.svg'
import Contactfaxicon from './Icons/Contactfaxicon.svg'
import Contacttellicon from './Icons/Contacttelicon.svg'
import Contactwarninglicon from './Icons/Contactwarningicon.svg'
import Contactlocicon from './Icons/Contactlocicon.svg'
const Contact = () => {
    return ( 
        <div>
        <div className="header-Contact">
            <h1>تماس با ما</h1>
        </div>
        <div className="Contact-content">
            <div className="Contact-content-back">
                <div className="Contact-poshtiban">
                    <h1>پیام به پشتیبانی</h1>
                    <h2>با وارد کردن اطلاعات خود در فرم زیر کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت.</h2>
                    <span>(این اطلاعات فقط برای تماس با شما استفاده خواهد شد.)</span>
                    <label htmlFor="">نام و نام خانوادگی</label>
                    <input type="text" name="" id="" placeholder='نام و نام خانوادگی'/>
                    <label htmlFor="">شماره تماس</label>
                    <input type="text" name="" id="" placeholder='09123456789'/>
                    <label htmlFor="">توضیحات</label>
                    <input type="text" name="" id="" className='Contact-tozihat'/>
                    <button type="submit">ارسال پیام</button>
                </div>
                <div className="Contact-location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d962.9133407559286!2d51.4500751917253!3d35.73011627886975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1709037681795!5m2!1sen!2snl"
                    width="400"
                    height="300"
                    style={{ border: "0" }}  // Convert inline style to JavaScript object
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="Contact-loc-row">
                        <img src={Contactlocicon} alt="" />
                        <h1>آدرس:</h1>
                        <span>تهران، شهرک غرب، خیابان گلستان جنوبی کوچه اول پلاک ۱۰ واحد ۴</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contacttellicon} alt="" />
                        <h1>تلفن:</h1>
                        <span>۰۲۱-۷۷۸۸۹۹۰۰</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contactfaxicon} alt="" />
                        <h1>فکس:</h1>
                        <span>۰۲۱-۷۷۸۸۹۹۰۰</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contactemailicon} alt="" />
                        <h1>ایمیل:</h1>
                        <span>info@sobotdadeh.ir</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contactwarninglicon} alt="" />
                        <span>توجه داشته باشید که 50003101 تنها شماره‌ای است که ‌ثبات‌داده از طریق آن برای کاربران و مشتریان خود پیامک ارسال می‌کند.</span>
                    </div>
                    <div className="Contact-loc-row">
                        <img src={Contactwarninglicon} alt="" />
                        <span>در صورت دریافت پیامک از شماره دیگر با نام ثبات‌داده، لطفاً جهت پیگیری قانونی آن را به info@sobotdadeh.ir اطلاع دهید.</span>
                    </div>
                </div>
            </div>
        </div>    
    </div>
     );
}
 
export default Contact;