import { css } from 'react-emotion';

const colors = {
  primary: '#90278e', //magenta
  secondary: '#2b388f', //purplish blue
  primaryHover: '#404c9a', //purple
  tertiary: '#009bb8', //teal-blue

  active: '#00afed', //light blue
  inactive: '#dedfe4', //grey

  greyScale7: 'rgb(107,98,98)',
  greyScale6: 'rgb(245,245,245)',
  greyScale5: 'rgb(222,222,222)',
  greyScale4: 'rgb(200, 200, 200)',
  greyScale3: 'rgb(144,144,144)', // not enough contrast on white background
  greyScale2: 'rgb(61,61,61)',
  greyScale1: 'rgb(36,36,36)',
};

const components = {
  button: css`
    outline: none;
    border: 0;
    background: none;
    box-shadow: none;
    border-radius: 0px;
    background-color: ${colors.primary};
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
      background-color: ${colors.primaryHover};
      border: solid 2px #dcdde3;
      color: #ffffff;
    }
  `,
  wizardButton: css`
    outline: none;
    border: 0;
    background: none;
    box-shadow: none;
    border-radius: 0px;
    background-color: '#fff';
    color: ${colors.tertiary};
    padding: 6px 16px;
    font-family: montserrat;
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: 0.2px;
    margin: 0px 4px;
    border-radius: 19px;
    border: solid 2px transparent;

    &:hover {
      background-color: ${colors.tertiary};
      color: #ffffff;
    }
  `,
  card: css`
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 4.9px 0.1px ${colors.greyScale5};
    border: solid 1px ${colors.greyScale4};
    padding: 20px 10px;
  `,
  h2: css`
    text-align: center;
    font-family: Montserrat;
    color: ${colors.secondary};
  `,
  h3: css`
    font-family: Montserrat;
    color: ${colors.secondary};
  `,
};

export default {
  ...colors,
  ...components,
};
