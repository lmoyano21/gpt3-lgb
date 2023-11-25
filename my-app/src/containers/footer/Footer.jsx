import React from 'react';
import './footer.css';
import gtp3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="myweb__footer section__padding">
      <div className="gpt2__footer-heading">
        <h1 className="gradient__text">Do yo want to step into the future before others</h1>
      </div>

      <div className="myweb__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="myweb__footer-links">
        <div className="myweb__footer-links_logo">
          <img src={gtp3Logo} alt="logo" />
          <p>Mallorca, Spain</p>
        </div>
        <div className="myweb__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="myweb__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Counters</p>
        </div>
        <div className="myweb__footer-links_div">
          <h4>Get in touch</h4>
          <p>Mallorca, Spain</p>
          <p>+34640809647</p>
          <p>lucas.gabriel.bulla@gmx.de</p>
        </div>
        <div className="myweb__footer-copyright">
          <p>© 2023 Lucas Gabriel. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer