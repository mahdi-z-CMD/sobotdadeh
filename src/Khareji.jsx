import './Khareji.css'
import { useState } from 'react'
// icons
import markmap from './Icons/khareji_markicon.svg'

// images
import curusimg from './image/khareji_cursur.png'
import iranflag from './image/khareji_iran.png'
import iraqflag from './image/khareji_iraq.png'
import turkeyflag from './image/khareji_turkey.png'
import aueflag from './image/khareji_aue.png'

const Khareji = () => {
    const [country, setCountry] = useState(1)
    return ( 
        <div className="Khareji">
            <div className="Khareji-header">
                <h1>تجربه ارتباطی جهانی و بدون مرز با ثبات‌داده ...</h1>
                <img src={curusimg} alt="scroll down image" width="52px" height="60px"/>
            </div>
            <div className="Khareji-select-country">
                <h1>کشور مورد نظر را انتخاب نمائید ...</h1>
                <div className="Khareji-select-map">
                    <div className="Khareji-select-map-country">
                        <img src={iranflag} alt="iran flag" width="100%" height="30%" onClick={()=>setCountry(0)}/>
                        <h1 className={country === 0 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(0)}>ایران</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={iraqflag} alt="iraq flag" width="100%" height="30%" onClick={()=>setCountry(1)}/>
                        <h1 className={country === 1 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(1)}>عراق</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={aueflag} alt="AUE flag" width="100%" height="30%" onClick={()=>setCountry(2)}/>
                        <h1 className={country === 2 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(2)}>امارات</h1>
                    </div>
                    <div className="Khareji-select-map-country">
                        <img src={turkeyflag} alt="turkey flag" width="100%" height="30%" onClick={()=>setCountry(3)}/>
                        <h1 className={country === 3 ? 'Khareji-select-map-country-active' : ''} onClick={()=>setCountry(3)}>ترکیه</h1>
                    </div>
                </div>
            </div>
            <div className="Khareji-country-bg">
                <div className="Khareji-country-bg-overlay">
                     <h1>ایــــــــران</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Khareji;