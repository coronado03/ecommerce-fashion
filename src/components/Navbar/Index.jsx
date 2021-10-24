import React from 'react';
import './style.scss';
import { IoBagOutline } from 'react-icons/io5';
import { BiUser } from 'react-icons/bi';

export default function Index() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left-section">
          <h1 className="logo">eCom.</h1>
        </div>
        <div className="right-section">
          <IoBagOutline
            style={{ marginRight: '30px', fontSize: '25px', cursor: 'pointer' }}
          />
          <BiUser style={{ fontSize: '25px', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}
