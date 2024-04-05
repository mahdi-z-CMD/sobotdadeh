import './Aboutus.css'
import React, { useState } from 'react';
// icons 
import expanddownsoalat from './Icons/expanddownsoalat.svg'
import expandmoresolat from './Icons/expandmoresolat.svg'
import arrowback from './Icons/arrowback.svg'
// images
import aboutimg1 from './image/aboutimg1.jpg'
import aboutimg2 from './image/aboutimg2.webp'
import aboutimg3 from './image/aboutimg3.jpg'
import aboutperson1 from './image/aboutperson1.png'
import aboutperson2 from './image/aboutperson2.png'
import aboutperson3 from './image/aboutperson3.png'
const Aboutus = () => {
     // this section is for box soalat 
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleBoxClick = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index));
  };  
  // this section is for box soalat 
    return ( 
        <div>
            <div className='header-about'>
                <h1>درباره ثبات‌داده</h1>
            </div>
            <div className="header-content">
                <div className="header-content-back">
                    <div className="content-box">
                        <div className="content-box-image">
                            <img src={aboutimg1} alt="image" />
                        </div>
                        <div className="content-box-texts">
                            <h1>هدف از ثبات‌داده</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        </div>
                    </div>
                    <div className="content-box2">
                        <div className="content-box-image2">
                            <img src={aboutimg2} alt="image" />
                        </div>
                        <div className="content-box-texts">
                            <h1>تاریخچه فعالیت</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        </div>
                    </div>
                    {/* <div className="content-box">
                        <div className="content-box-texts">
                            <h1>Build the right team to scale</h1>
                            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                        </div>
                        <div className="content-box-image">
                            <img src={aboutimg3} alt="image" />
                        </div>
                    </div> */}
                </div>         
            </div>
            <div className="soalat-aboutus">
            <div className={`box-soalat ${expandedIndex === 0 ? 'active' : ''}`}>
                <div
                className="box-soalat-header"
                onClick={() => handleBoxClick(0)}
                >
                <h2>محصولات و خدمات</h2>
                <img src={expandedIndex === 0 ? expandmoresolat : expanddownsoalat} alt="expand down" />
                </div>
                {expandedIndex === 0 && (
                <div className="additional-text">
                    <img src={arrowback} alt="arrow back" />
                    <p>محصولات و خدمات</p>
                </div>
                )}
                </div>
                <div className={`box-soalat ${expandedIndex === 0 ? 'active' : ''}`}>
                <div
                className="box-soalat-header"
                onClick={() => handleBoxClick(0)}
                >
                <h2>دستاورد‌های ثبات‌داده</h2>
                <img src={expandedIndex === 1 ? expandmoresolat : expanddownsoalat} alt="expand down" />
                </div>
                {expandedIndex === 1 && (
                <div className="additional-text">
                    <img src={arrowback} alt="arrow back" />
                    <p>محصولات و خدمات</p>
                </div>
                )}
                </div>
            </div>
        </div>
     );
}
 
export default Aboutus;
