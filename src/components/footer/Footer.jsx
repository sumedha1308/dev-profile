/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import heart from '../../resources/heart.png';

const Footer = () => (
  <footer className="footer">
    <span>
      Made with <img src={heart} alt="heart"></img> by Sumedha
    </span>
  </footer>
);

export default Footer;
