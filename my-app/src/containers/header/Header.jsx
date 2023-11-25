import React from 'react';
// import people from '../../assets/people.png';
import devLogo from '../../assets/devLogo.png';
import './header.css';

const Header = () => (
  <div className="myweb__header section__padding" id="home">
    <div className="myweb__header-content">
      <span className="gradient__text">Hi! I'm Lucas,</span>
      <h1 className="gradient__text tracking-in-contract-bck-bottom">FRONTEND DEVELOPER</h1>
      <p>Loading bio...</p>

      {/* <div className="myweb__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="myweb__header-content__people">
        <img src={people} />
        <p>1,600+ new devs everyday.</p>
      </div> */}
    </div>

   <div className="myweb__header-image">
      <img src={devLogo} />
   </div>
</div>
);

export default Header;