import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'react-emotion';

import { compose } from 'recompose';
import { injectState } from 'freactal';

import Login from 'components/Login';
import LogoutButton from 'components/LogoutButton';

import logoPath from 'theme/images/logo-kids-first-data-portal.svg';
import HouseIcon from 'react-icons/lib/fa/home';
import DatabaseIcon from 'react-icons/lib/fa/database';

const navBar = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: montserrat;
  font-size: 14px;
  line-height: 1.86;
  letter-spacing: 0.2px;

  li {
    a {
      display: block;
      color: #90278e;
      padding: 6px 16px;
      margin: 0px 4px;
      text-decoration: none;
      border: solid 2px transparent;
    }

    a:hover {
      border-radius: 19px;
      background-color: #404c9a;
      border: solid 2px #dcdde3;
      color: #ffffff;
    }
  }
`;
const Header = ({ state: { loggedInUser } }) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <ul className={navBar}>
        <li>
          <img
            src={logoPath}
            alt="Kids First Logo"
            className={css`
              width: 244px;
              height: 90px;
            `}
          />
        </li>
        {!(loggedInUser || {}).hasRoleSelected && (
          <li>
            <Link to="/">
              <HouseIcon /> Dashboard
            </Link>
          </li>
        )}
        {!(loggedInUser || {}).hasRoleSelected && (
          <li>
            <Link to="/files">
              <DatabaseIcon /> File Repository
            </Link>
          </li>
        )}
      </ul>
      <ul
        className={css`
          ${navBar};
          justify-content: flex-end;
        `}
      >
        {(loggedInUser || {}).hasRoleSelected && (
          <li>
            <Link to={`/user/${loggedInUser.egoId}`}>User Profile</Link>
          </li>
        )}
        {!loggedInUser && (
          <li>
            <Login />
          </li>
        )}
        {loggedInUser && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </div>
  );
};

export default compose(injectState)(Header);
