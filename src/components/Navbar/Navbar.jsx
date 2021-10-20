import React from 'react';
import './style.scss';
import { IoBagOutline } from 'react-icons/io5';
import { BiUser } from 'react-icons/bi';

export function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left-section">
          <h1 className="logo">eCom.</h1>
        </div>
        <div className="right-section">
          <IoBagOutline style={{ marginRight: '30px', fontSize: '25px' }} />
          <BiUser style={{ fontSize: '25px' }} />
        </div>
      </div>
    </div>
  );
}
