import './Soalat.css'
import React, { useState } from 'react';
// icons 
import expanddownsoalat from './Icons/expanddownsoalat.svg'
import expandmoresolat from './Icons/expandmoresolat.svg'
import arrowback from './Icons/arrowback.svg'
const Soalat = (props) => {
    // this section is for box soalat 
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleBoxClick = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index));
  };  
  // this section is for box soalat 
    return ( 
        <div className="soalat">
      <div className={`box-soalat ${expandedIndex === 0 ? 'active' : ''}`}>
        <div
          className="box-soalat-header"
          onClick={() => handleBoxClick(0)}
        >
          <h2>{props.Soalheader}</h2>
          <img src={expandedIndex === 0 ? expandmoresolat : expanddownsoalat} alt="expand down" />
        </div>
        {expandedIndex === 0 && (
          <div className="additional-text">
            <img src={arrowback} alt="arrow back" />
            <p>{props.Soalcontent}
              <ul>
                <li>{props.Soalcontent2}</li>
                <li>{props.Soalcontent3}</li>
              </ul>
            </p>
          </div>
        )}
      </div>
    </div>
     );
}
 
export default Soalat;