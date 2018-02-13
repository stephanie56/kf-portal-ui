import React from 'react';
import style from './style.css';
import { css } from 'react-emotion';

const LoginButton = ({ onClick, content, icon }) => (
  <div className={`button`}>
    <div className="buttonIcon" />
    {content}
  </div>
);
export default ({ history, onJoinClick = () => {} }) => (
  <div className="landing">
    <div className="container">
      <img className="kite" />
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Advancing Pediatric Research</h1>
      <div className="description">
        The <strong>Kids First Data Resource Portal</strong> allows <i>researchers</i>{' '}
        <i>clinicians</i> and <i>patients</i> to share and analyze genetic data from the pediatric
        cancer and structural birth defect communities.
      </div>
      <div className="authButtons">
        <LoginButton content={'Log in with Gmail'} />
        <LoginButton content={'Login with Facebook'} />
        <LoginButton content={'Login with ORCID'} />
        <LoginButton content={'Login with LinkedIn'} />
      </div>
      <div className="register">
        New to Kids First? <a onClick={onJoinClick}>Join now ></a>
      </div>
      <div className="video" />
    </div>
  </div>
);
