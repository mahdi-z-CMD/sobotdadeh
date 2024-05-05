import './Companie.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
// icons 
import bookmarkicon from './Icons/bookmark.svg'
import bookmarkfillicon from './Icons/bookmarkfill.svg'
// Images
import companielogo from './image/compani_logo.jpg'
const Companie = () => {
    const [titileactive, setTitileactive] = useState(0);
    const [issub, setIssub] = useState(false);

    const removeCookies = async () => {
        try {
            // Make a logout request to invalidate the user's session on the server
            await axios.post('https://api.sobotdadeh.com/v1/auth/logout', {
                // Include any necessary data for the logout request, if required
            });
    
            // Remove the cookies from the client side
            Cookies.remove('api_key');
            Cookies.remove('token');
            Cookies.remove('IMEI');
            Cookies.remove('user');
    
            // Reload the page or redirect the user to the login page
            window.location.reload(); // You can replace this with any other desired action
        } catch (error) {
            Cookies.remove('api_key');
            Cookies.remove('token');
            Cookies.remove('IMEI');
            Cookies.remove('user');
    
            // Reload the page or redirect the user to the login page
            window.location.reload(); // You can replace this with any other desired action
        }
    };
     // CHANGE TOKEN
     const changeusertoken = async () => {
        try {
            const apiKey = Cookies.get('api_key');
            const token = Cookies.get('token');
            const imei = Cookies.get('IMEI');
            const decryptedValue = CryptoJS.AES.decrypt(Cookies.get('pn'), 'f2af0b0c9a27d7c893fa5d0ee2887c64').toString(CryptoJS.enc.Utf8);
            // Send the POST request with custom headers
            const response = await axios.post('https://api.sobotdadeh.com/v1/auth/check', {
                phone: decryptedValue,
                api_key: apiKey
            }, {
                headers: {
                    'Api-Token': apiKey,
                    'Authorization': `Bearer ${token}`,
                    'IMEI': imei
                }
            });
            if (response.data.status === true) {
                Cookies.set('api_key', response.data.data.api_key, { expires: 7 });
                Cookies.set('token', response.data.data.token, { expires: 7 });
                Cookies.set('user', 'true', { expires: 7 });
            }
            else{
                removeCookies()
                window.location.href = '/sobotdadeh/#/login';
            }
        } catch (error) {
            console.error('Error sending API request:', error);
            return false;
        }
    };
    // CHANGE TOKEN
    // get data from api ------------------------
    const { companyid, type } = useParams()
    const [companyData, setCompanyData] = useState(null);
    useEffect(() => {
      fetchData(companyid);
    }, [companyid]);
  
    const fetchData = async (companyid) => {
      try {
        const apiKey = Cookies.get('api_key');
        const token = Cookies.get('token');
        const imei = Cookies.get('IMEI');
        const response = await axios.post(type === '0' ? 'https://api.sobotdadeh.com/v1/company/show' : type === '1' ? 'https://api.sobotdadeh.com/v1/iraq_company/show' : 'https://api.sobotdadeh.com/v1/company/show', {
          [type === '0' ? 'code' : 'id']: companyid
        }, {
            headers: {
                'Api-Token': apiKey,
                'Authorization': `Bearer ${token}`,
                'IMEI': imei
            }
        });
        if (response.status === 200) {
          setCompanyData(response.data.data);
          fetchCompanies()
        } else {
          console.error('Failed to fetch company data');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
            changeusertoken()
        }
      }
    };
    // CHECK LIST
    const [companiesIdApi, setCompaniesIdApi] = useState([]);
    const [companyIdBook, setCompanyIdBook] = useState(false);

    const fetchCompanies = async () => {
        try {
            const apiKey = Cookies.get('api_key');
            const token = Cookies.get('token');
            const imei = Cookies.get('IMEI');
            
            const response = await axios.post('https://api.sobotdadeh.com/v1/bookmark', {
                type: type === '1' ? 'iraq' : 'iran'
            },{
                headers: {
                    'Api-Token': apiKey,
                    'Authorization': `Bearer ${token}`,
                    'IMEI': imei
                }
            });
            setCompaniesIdApi(response.data.data); // Assuming response.data.data is an array of companies
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };

    useEffect(() => {
        // Check if companyId exists in any of the companies
        const isCompanyIdBooked = companiesIdApi.some(company => company.id === parseInt(type === '1' ? companyid : companyData.id));
        setCompanyIdBook(isCompanyIdBooked);
    }, [companiesIdApi, companyid]);
    // CHECK LIST
    // BOOKMARK COMPANY 
    const addbookmark = async () => {
        try {
            const apiKey = Cookies.get('api_key');
            const token = Cookies.get('token');
            const imei = Cookies.get('IMEI');
            // Send the POST request with custom headers
            const response = await axios.post('https://api.sobotdadeh.com/v1/bookmark/create', {
                company_id: type === '0' ? companyData.id : companyid,
                type: type === '0' ? 'iran' : 'iraq'
            }, {
                headers: {
                    'Api-Token': apiKey,
                    'Authorization': `Bearer ${token}`,
                    'IMEI': imei
                }
            });
            if (response.data.status === true) {
                if (companyIdBook) {
                    setCompanyIdBook(false)
                }else{
                    setCompanyIdBook(true)
                }
            }
            else{
            }
        } catch (error) {
            console.error('Error sending API request:', error);
        }
    };
      // BOOKMARK COMPANY 
    if (!companyData) {
      return (
        <>
         <div className="companie-header-bg">
            </div>
            <div className="companie-content">
                <div className="companie-content-header">
                    <img src={companielogo} alt="companie logo" />
                    <h1>در حال جستجو...</h1>
                </div>
                <div className="companie-content-header-title">
                    <h1 className={titileactive === 0 ? 'companie-content-header-title-active' : ''} onClick={()=>setTitileactive(0)}>درباره شرکت</h1>
                    <h1 className={titileactive === 1 ? 'companie-content-header-title-active' : ''} onClick={()=>setTitileactive(1)}>شناخت ریسک</h1>
                </div>
                <hr/>
        <div className="companie-content-detail">
            <h2>سال تاسیس</h2>
            <span>در حال جستجو...</span>
            <h2>نوع شرکت</h2>
            <span>در حال جستجو...</span>
            <h2>وضعیت شرکت</h2>
            <span>در حال جستجو...</span>
            <h2>شناسه ملی</h2>
            <span>در حال جستجو...</span>
            <h2>آخرین سرمایه ثبتی</h2>
            <span> میلیون ریال در حال جستجو...</span>
        </div>
        </div>
        </>
      );
    }
    // get data from api ------------------------
    return ( 
        <div className='companie-page'>
            <div className="companie-header-bg">
            </div>
           {
            type === '0' ? ( <div className="companie-content">
                <div className="companie-content-header">
                    <img src={companielogo} alt="companie logo" />
                    <h1>{companyData.title}</h1>
                    <img src={companyIdBook ? bookmarkfillicon : bookmarkicon} alt="bookmark icon" className='companie-content-header-bookmark' onClick={addbookmark}/>
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
                        <span>{companyData.registrationDate}</span>
                        <h2>نوع شرکت</h2>
                        <span>{companyData.registrationTypeTitle}</span>
                        <h2>وضعیت شرکت</h2>
                        <span>{companyData.status === 1 ? "فعال" : "غیر فعال"}</span>
                        <h2>شناسه ملی</h2>
                        <span>{companyData.entityId}</span>
                        <h2>آخرین سرمایه ثبتی</h2>
                        <span>{companyData.capital} میلیون ریال</span>
                    </div>
                    <div className="companie-content-detail-des">
                        <h2>درباره {companyData.title}</h2>
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
                
            </div>) : ( <div className="companie-content">
                <div className="companie-content-header">
                    <img src={companielogo} alt="companie logo" />
                    <h1>{companyData.title}</h1>
                    <img src={companyIdBook ? bookmarkfillicon : bookmarkicon} alt="bookmark icon" className='companie-content-header-bookmark' onClick={addbookmark}/>
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
                        <span>{companyData.registrationDate === '' ? 'ثبت نشده' : companyData.registrationDate}</span>
                        <h2>وضعیت شرکت</h2>
                        <span>{companyData.status === 1 ? "فعال" : "غیر فعال"}</span>
                        <h2>مدیر عامل</h2>
                        <span>{companyData.ceo}</span>
                        <h2>آخرین سرمایه ثبتی</h2>
                        <span>{companyData.capital} میلیون ریال</span>
                    </div>
                    <div className="companie-content-detail-des">
                        <h2>درباره {companyData.title}</h2>
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
                            <h2>درباره {companyData.title}</h2>
                            <p>دیجی پی یک استارتاپ جوان در حوزه پرداخت الکترونیک با مجوز پرداخت یاری است که حاصل ادغام استارتاپ هُماپی در هلدینگدیجی کالا است. دیجی پی در سال 1397 عضوی از خانواده دیجی کالا شد. هدف گروه دیجیکالا از ورود به حوزه فینتک، ارائه سروی سهای پرداخت الکترونیک با پایداری بالا و بهترین تجربه برای مشتری بود. به دنبال تعریف این هدف، مسیر توسعه سرویس های دیجی پی مشخص شد. تا امروز دیجی پی خدمات متنوعی مانند درگاه پرداخت هوشمند،داشبورد، درگاه پرداخت موبایلی، سرویس بازپرداخت وجه به مشتری را در اختیار API کیفِ پول، اپلیکیشن موبایلی و سرویس، (payout) مشتریان قرار داده است.</p>
                            <h2>قدم اول</h2>
                            <p>دیجی پی یک استارتاپ جوان در حوزه پرداخت الکترونیک با مجوز پرداخت یاری است که حاصل ادغام استارتاپ هُماپی در هلدینگدیجی کالا است. دیجی پی در سال 1397 عضوی از خانواده دیجی کالا شد. هدف گروه دیجیکالا از ورود به حوزه فینتک، ارائه سروی سهای پرداخت الکترونیک با پایداری بالا و بهترین تجربه برای مشتری بود. به دنبال تعریف این هدف، مسیر توسعه سرویس های دیجی پی مشخص شد. تا امروز دیجی پی خدمات متنوعی مانند درگاه پرداخت هوشمند،داشبورد، درگاه پرداخت موبایلی، سرویس بازپرداخت وجه به مشتری را در اختیار API کیفِ پول، اپلیکیشن موبایلی و سرویس، (payout) مشتریان قرار داده است.</p>
                        </div>               
                        </>
                    )
                }
                
            </div>)
           }
        </div>
     );
}
 
export default Companie;