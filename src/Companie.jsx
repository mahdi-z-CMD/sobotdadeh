import './Companie.css'
import { useState } from 'react';
// Images
import companielogo from './image/compani_logo.jpg'
const Companie = () => {
    const [titileactive, setTitileactive] = useState(0);
    const [issub, setIssub] = useState(false);
    return ( 
        <div className='companie-page'>
            <div className="companie-header-bg">
            </div>
            <div className="companie-content">
                <div className="companie-content-header">
                    <img src={companielogo} alt="companie logo" />
                    <h1>دیجی‌ پی</h1>
                </div>
                <div className="companie-content-header-title">
                    <h1 className={titileactive === 0 ? 'companie-content-header-title-active' : ''} onClick={()=>setTitileactive(0)}>درباره شرکت</h1>
                    <h1 className={titileactive === 1 ? 'companie-content-header-title-active' : ''} onClick={()=>setTitileactive(1)}>شناخت ریسک</h1>
                </div>
                <hr/>
                {
                    titileactive === 0 ? (
                      <>
                        <div className="companie-content-detail">
                        <h2>سال تاسیس</h2>
                        <span>1378/06/22</span>
                        <h2>نوع شرکت</h2>
                        <span>سهامی خاص</span>
                        <h2>وضعیت شرکت</h2>
                        <span>فعال</span>
                        <h2>شناسه ملی</h2>
                        <span>10380299732</span>
                        <h2>آخرین سرمایه ثبتی</h2>
                        <span> میلیون ریال</span>
                    </div>
                    <div className="companie-content-detail-des">
                        <h2>درباره دیجی پی</h2>
                        <p>دیجی پی یک استارتاپ جوان در حوزه پرداخت الکترونیک با مجوز پرداخت یاری است که حاصل ادغام استارتاپ هُماپی در هلدینگدیجی کالا است. دیجی پی در سال 1397 عضوی از خانواده دیجی کالا شد. هدف گروه دیجیکالا از ورود به حوزه فینتک، ارائه سروی سهای پرداخت الکترونیک با پایداری بالا و بهترین تجربه برای مشتری بود. به دنبال تعریف این هدف، مسیر توسعه سرویس های دیجی پی مشخص شد. تا امروز دیجی پی خدمات متنوعی مانند درگاه پرداخت هوشمند،داشبورد، درگاه پرداخت موبایلی، سرویس بازپرداخت وجه به مشتری را در اختیار API کیفِ پول، اپلیکیشن موبایلی و سرویس، (payout) مشتریان قرار داده است.</p>
                    </div>
                      </>
                    )
                    :(
                        <>
                        {
                            issub === false ?
                                <div className="companie-content-buy">
                                    <div className="companie-content-buy-main">
                                        <h1>برای شناخت ریسک تمامی شرکت ها در ثبات‌داده لطفا اشتراک تهیه کنید ...</h1>
                                        <button type="submit">خرید اشتراک</button>
                                    </div>
                                </div>
                            : null
                        }
                        <div className={issub === true ? 'companie-content-detail-des' : 'companie-content-detail-des-sub'}>
                            <h2>درباره دیجی پی</h2>
                            <p>دیجی پی یک استارتاپ جوان در حوزه پرداخت الکترونیک با مجوز پرداخت یاری است که حاصل ادغام استارتاپ هُماپی در هلدینگدیجی کالا است. دیجی پی در سال 1397 عضوی از خانواده دیجی کالا شد. هدف گروه دیجیکالا از ورود به حوزه فینتک، ارائه سروی سهای پرداخت الکترونیک با پایداری بالا و بهترین تجربه برای مشتری بود. به دنبال تعریف این هدف، مسیر توسعه سرویس های دیجی پی مشخص شد. تا امروز دیجی پی خدمات متنوعی مانند درگاه پرداخت هوشمند،داشبورد، درگاه پرداخت موبایلی، سرویس بازپرداخت وجه به مشتری را در اختیار API کیفِ پول، اپلیکیشن موبایلی و سرویس، (payout) مشتریان قرار داده است.</p>
                            <h2>قدم اول</h2>
                            <p>دیجی پی یک استارتاپ جوان در حوزه پرداخت الکترونیک با مجوز پرداخت یاری است که حاصل ادغام استارتاپ هُماپی در هلدینگدیجی کالا است. دیجی پی در سال 1397 عضوی از خانواده دیجی کالا شد. هدف گروه دیجیکالا از ورود به حوزه فینتک، ارائه سروی سهای پرداخت الکترونیک با پایداری بالا و بهترین تجربه برای مشتری بود. به دنبال تعریف این هدف، مسیر توسعه سرویس های دیجی پی مشخص شد. تا امروز دیجی پی خدمات متنوعی مانند درگاه پرداخت هوشمند،داشبورد، درگاه پرداخت موبایلی، سرویس بازپرداخت وجه به مشتری را در اختیار API کیفِ پول، اپلیکیشن موبایلی و سرویس، (payout) مشتریان قرار داده است.</p>
                        </div>               
                        </>
                    )
                }
                
            </div>
        </div>
     );
}
 
export default Companie;