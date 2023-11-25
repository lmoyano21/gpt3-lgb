import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="myweb__possibility section__padding" id="possibility">
        <div className="myweb__possibility-image">
          <img src={possibilityImage} alt="possibility"/>
        </div>
        <div className="myweb__possibility-content">
          <h4>Aqui iria algo importante</h4>
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Alguna descripcion interesante.</p>
          <h4>Aqui iria algo importante</h4>
        </div>
    </div>
  )
}

export default Possibility