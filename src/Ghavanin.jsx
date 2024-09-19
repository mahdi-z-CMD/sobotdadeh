import './Ghavanin.css'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Icons


import ghavaninpolicyicon from './Icons/ghavaninpolicyicon.svg'
import Soalat from './Soalat';
const Ghavanin = () => {
  const { t } = useTranslation();

    return ( 
        <div>
            <Helmet>
                <title>ثبات داده - قوانین و مقررات</title>
            </Helmet>
            <div className="header-ghavanin">
                <h1><img src={ghavaninpolicyicon} alt="icon ghavanin" />{t('قوانین و مقررات')}</h1>
            </div>
            <div className="ghavanin-content">
                <div className="ghavanin-content-back">
                <Soalat Soalheader={t('قوانین عمومی')} Soalcontent={t('ثبات داده بستری است برای ارائه دادگان اشخاص حقیقی و حقوقی، بررسی بنیادین شرکت ها و مجموعه های اقتصادی و گزارش دهی از کارایی موسسات تجارتی؛ بدیهی است که کلیه حقوق مالکیت فکری این موارد متعلق به شرکت جهان سلامت اروند می باشد.')}></Soalat>
                <Soalat Soalheader={t('تعهد ثبات داده در قبال کاربران سایت')} Soalcontent={t('تعهد ثبات داده در حفظ کلیه اطلاعات ثبت شده از سوی کاربران در سایت، تعهد به وسیله بوده و تلاش می کند امنیت کافی رای برای اطلاعات کاربران بوجود آورد.')}></Soalat>
                <Soalat Soalheader={t('شرایط انتشار آگهی در ثبات داده')} Soalcontent={t('برای قرار دادن اطلاعات شرکت خود در بانک ابتدا دادگان شرکت خود را برای ارسال کنید و پس از بررسی از سوی کارشناسان ثبات داده نتیجه نهایی را به کاربر محترم اطلاع رسانی خواهد شد.')}></Soalat>
                <Soalat Soalheader={t('موارد رفع مسئولیت از ثبات داده')} Soalcontent={t('در موارد ذیل ثبات داده نسبت به فعل یا ترک فعل صورت گرفته متعهد نمی باشد؛')} Soalcontent2={t('1- صحت اطلاعات ارائه شده بر عهده ثبات داده نبوده و منابع اصلی پاسخگو می باشد.')} Soalcontent3={t('2- ثبات داده نسبت کلیه پرداخت های ناموفق در حساب کاربری مسئولیتی ندارد.')}></Soalat>
                </div>
            </div>    
        </div>
     );
}
 
export default Ghavanin;