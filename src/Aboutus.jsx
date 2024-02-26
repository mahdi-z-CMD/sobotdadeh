import './Aboutus.css'
import React, { useState } from 'react';
// icons 
import expanddownsoalat from './Icons/expanddownsoalat.svg'
import expandmoresolat from './Icons/expandmoresolat.svg'
import arrowback from './Icons/arrowback.svg'
// images
import aboutimg1 from './image/aboutimg1.jpg'
import aboutimg2 from './image/aboutimg2.jpg'
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
                        <div className="content-box-texts">
                            <h1>Build the right team to scale</h1>
                            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                            <p>Our <span className='content-box-texts-sp'>delivery model</span> helps you cut costs and deliver within budget.</p>
                            <span className='content-box-texts-sp2'>"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</span>
                            <div className="content-box-prof">
                            <img src={aboutperson1} alt="profile picture" />
                            <div className="content-box-prof-text">
                                <h1>Jeewa markram</h1>
                                <h2>CEO</h2>
                            </div>
                        </div>
                        </div>
                        <div className="content-box-image">
                            <img src={aboutimg1} alt="image" />
                        </div>
                    </div>
                    <div className="content-box2">
                        <div className="content-box-texts">
                            <h1>Build the right team to scale</h1>
                            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                            <p>Our <span className='content-box-texts-sp'>delivery model</span> helps you cut costs and deliver within budget.</p>
                            <span className='content-box-texts-sp2'>"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</span>
                            <div className="content-box-prof">
                            <img src={aboutperson2} alt="profile picture" />
                            <div className="content-box-prof-text">
                                <h1>Jeewa markram</h1>
                                <h2>CEO</h2>
                            </div>
                        </div>
                        </div>
                        <div className="content-box-image2">
                            <img src={aboutimg2} alt="image" />
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="content-box-texts">
                            <h1>Build the right team to scale</h1>
                            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                            <p>Our <span className='content-box-texts-sp'>delivery model</span> helps you cut costs and deliver within budget.</p>
                            <span className='content-box-texts-sp2'>"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</span>
                            <div className="content-box-prof">
                            <img src={aboutperson3} alt="profile picture" />
                            <div className="content-box-prof-text">
                                <h1>Jeewa markram</h1>
                                <h2>CEO</h2>
                            </div>
                        </div>
                        </div>
                        <div className="content-box-image">
                            <img src={aboutimg3} alt="image" />
                        </div>
                    </div>
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
