import * as React from 'react';
import { logoutAll } from 'services/login';
import { withRouter } from 'react-router-dom';
import { injectState } from 'freactal';
import { compose } from 'recompose';
import { css } from 'react-emotion';

const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

const enhance = compose(withRouter, injectState);

const Logout = ({ history, effects: { setUser } }) => (
  <button
    className={css`
      outline: none;
      border: 0;
      background: none;
      box-shadow: none;
      border-radius: 0px;
      background-color: #90278e;
      color: white;
      padding: 6px 16px;
      font-family: montserrat;
      font-size: 14px;
      line-height: 1.86;
      letter-spacing: 0.2px;
      margin: 0px 4px;
      border-radius: 19px;
      border: solid 2px transparent;

      &:hover {
        background-color: #404c9a;
        border: solid 2px #dcdde3;
        color: #ffffff;
      }
    `}
    onClick={() =>
      Promise.race([logoutAll(), wait(2)]).then(() => {
        setUser(null);
        history.push('/');
      })
    }
  >
    Logout
  </button>
);

export default enhance(Logout);
