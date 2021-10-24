import React from 'react';
import './style.scss';
import WomenLeft from '../../assets/images/model-1.jpg';
import MenRight from '../../assets/images/model-4.jpg';
import WomenRight from '../../assets/images/model-3.jpg';

export default function Index() {
  return (
    <div className="about_section">
      <div className="left_section">
        <img src={WomenLeft} alt="women left" className="women_left" />
      </div>
      <div className="right_section">
        <img
          src={MenRight}
          alt="men right"
          className="men_right"
          style={{
            width: '180px',
            height: '240px',
            position: 'absolute',
            top: '50px',
            left: '100px',
          }}
        />
        <img
          src={WomenRight}
          alt="women right"
          className="women_right"
          style={{
            width: '170px',
            height: '250px',
            position: 'absolute',
            bottom: '50px',
            right: '50px',
          }}
        />
      </div>
      <span>fashion speaks for itself</span>
    </div>
  );
}
