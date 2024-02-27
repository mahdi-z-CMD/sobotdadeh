import './Soalatmotadavel.css'
// icon
import soalatmotadavelicon from './Icons/soalatmotadavelicon.svg'
import Soalat from './Soalat';
const Soalatmotadavel = () => {
    return ( 
        <div>
            <div className="header-soalatm">
                <h1><img src={soalatmotadavelicon} alt="icon soalatm" />سوالات متداول</h1>
            </div>
            <div className="soalatm-content">
                <div className="soalatm-content-back">
                    <h1>ثبت‌نام</h1>
                <Soalat Soalheader="۱- در هنگام ثبت نام، سایت پیام نامعتبر بودن ایمیل را می‌دهد. چه کاری باید انجام دهم؟" Soalcontent="لطفا از درست وارد کردن آدرس ایمیل خود اطمینان حاصل نمایید. ممکن است در ابتدا یا انتهای آدرس ایمیل خود به اشتباه یک فاصله گذاشته باشید. این مشکل عمدتا زمانی ایجاد می‌شود که آدرس ایمیل خود را از جای دیگر کپی می‌کنید.
اگر مطمئن هستید که ایمیل خود را درست وارد کرده اید، با شماره ۰۲۱۲۲۳۳۴۴۵۵ با ما تماس بگیرید."></Soalat>
                <Soalat Soalheader="۲- رمز عبورم را فراموش کرده‌ام. چه کاری باید انجام دهم؟" Soalcontent='وارد سایت شوید و روی گزینه ورود / ثبت نام کلیک کنید. در این بخش روی گزینه "رمز عبور را فراموش کرده ام" کلیک کنید. ایمیلی برای شما ارسال می‌شود که در متن آن لینکی برای بازیابی رمز عبور قرار داده شده است. با کلیک بر روی این لینک، وارد سایت شده و رمز عبور جدیدی برای خود تنظیم نمایید.'></Soalat>
                <Soalat Soalheader="۳- چگونه می‌توانم ایمیل کاربری خود رو تغییر دهم؟" Soalcontent=""></Soalat>
                <Soalat Soalheader="۴- چگونه می‌توانم ایمیل‌های اطلاع رسانی ثبات‌داده رو غیرفعال کنم؟" Soalcontent=""></Soalat>
                <Soalat Soalheader="۵- چگونه می‌توانم اکانت خود را حذف کنم؟" Soalcontent=""></Soalat>
                <h1>ارسال رزومه</h1>
                <Soalat Soalheader="۱- برای چه موقعیت های شغلی‌ رزومه ارسال کنم؟" Soalcontent=""></Soalat>
                <Soalat Soalheader="۲- چطور از وضعیت رزومه‌های ارسال شده خود مطلع شوم؟" Soalcontent=""></Soalat>
                <Soalat Soalheader="۳- پیامی از جانب سایت شما دریافت کردم که نمی‌توانم تا 7 روز رزومه ارسال کنم. چرا چنین مشکلی پیش آمده است؟" Soalcontent=""></Soalat>
                <h1>بارگذاری رزومه شخصی و نمونه کار</h1>
                <Soalat Soalheader="۱- آیا می‌توانم رزومه شخصی خود را نیز بارگذاری کرده و برای کارفرما ارسال کنم؟" Soalcontent=""></Soalat>
                <Soalat Soalheader="۲- آیا امکان بارگذاری نمونه کار در جاب‌ویژن وجود دارد؟" Soalcontent=""></Soalat>
                </div>
            </div>    
        </div>
     );
}
 
export default Soalatmotadavel;