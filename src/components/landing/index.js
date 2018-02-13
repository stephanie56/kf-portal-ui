import React from 'react';
import style from './style.css';
// import theme from './defaultTheme';

const STYLE = {};

export default () => (
  <div className="landing">
    <div className="accentBar" style={{ position: 'absolute', top: 0 }} />
    <div className="container">
      <img className="kite" />
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Advancing Pediatric Research</h1>
      <div class="description">
        The <strong>Kids First Data Resource Portal</strong> allows <i>researchers</i>
        <i>clinicians</i> and <i>patients</i> to share and analyze genetic data from the pediatric
        cancer and structural birth defect communities.
      </div>
      <div class="authButtons">A bunch of buttons here</div>
      <div className="register">
        New to Kids First? <a>Join now ></a>
      </div>
      <div className="video" />
    </div>
  </div>
);
