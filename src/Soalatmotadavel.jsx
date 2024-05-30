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
                <Soalat Soalheader="۱-  ثابت داده چه راهکاری برای توسعه کسب و کار تو دارد؟ " Soalcontent="با استفاده از بانک داده پایه ما و مشاوره برجسته ترین مریبان کسب و کار و مشاورین اقتصادی کشور به همراهی شما در پویای کسب وکار شما مفتخر می شویم."></Soalat>
                <Soalat Soalheader="۲-	داده چه تاثیری بر میزان ثروت آفرینی تجارت شما دارد؟" Soalcontent='یکی از مهم ترین ویژگی های کسب و کارهای موفق بهره مندی از دادگان راهبردی می باشد که بر اساس آن تجارت خود را راهبری کنند. '></Soalat>
                <Soalat Soalheader="۳- چگونه کسب و کار خود را رقابت پذیر کنیم؟" Soalcontent="شناخت رقبا اولین راه رقابت پذیر تجارت شماست. در ثابت داده تلاش می کنیم شما را در این بررسی با در اختیار داشتن بانک داده همراهی کنیم. "></Soalat>
                <Soalat Soalheader="۴- چگونه برای محصول خود بازار هدف انتخاب کنیم؟" Soalcontent="تجربه در کنار دادگان برجسته می تواند نقشه راه خوبی برای انتخاب بازار هدف باشد. با علم و تجربه تیم بازرگانی ثبات داده می توانید بهترین بازار را برای محصول و خدمات خود انتخاب کنید."></Soalat>
                <Soalat Soalheader="۵- آیا بازارهای رقابت پذیر در ایران را می شناسید؟" Soalcontent="تیم تجارت بین الملل ثبات داده با در اختیار داشتن بازرگانان و مشاورین اقتصادی برجسته می تواند شما در انتخاب بازار و تجارت ثروت آفرین در ایران همراهی کند. "></Soalat>
                </div>
            </div>    
        </div>
     );
}
 
export default Soalatmotadavel;