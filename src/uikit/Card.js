import React from 'react';

import { css } from 'react-emotion';

const cardCss = css`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 4.9px 0.1px #bbbbbb;
  border: solid 1px #e0e1e6;
  padding: 20px 10px;
`;
const Card = ({ children, ...props }) => <div className={cardCss}>{children}</div>;

export default Card;
