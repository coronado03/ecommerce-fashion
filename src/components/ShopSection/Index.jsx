import React from 'react';
import './style.scss';

import Men from '../../assets/images/men-shop-1.jpg';
import Woman from '../../assets/images/woman-shop.png';

export default function Index() {
  return (
    <div className="shop_section">
      <div className="left_section">
        <img src={Men} alt="men" className="shop_img" />
        <button className="shop_button">shop</button>
      </div>

      <div className="right_section">
        <img src={Woman} alt="woman" className="shop_img" />
        <button className="shop_button">shop</button>
      </div>
    </div>
  );
}
