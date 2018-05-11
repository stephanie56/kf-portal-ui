import { css } from 'emotion';
export const highLightRow = theme => `
  background-color: #e4f4f8;
`;

export const dataTableStyle = theme =>
  `table ${css`
    &.table {
      border: solid 1px ${theme.greyScale5};
      &.total {
        & .row:first-child {
          ${highLightRow(theme)};
          color: black;
        }
      }
      & .row {
        padding: 15px;
        padding-left: 50px;
        &:first-child {
          font-weight: bold;
          color: ${theme.secondary};
          background-color: #edeef1;
          border-bottom: solid 1px ${theme.greyScale5};
        }
        &:nth-child(2n) {
          ${highLightRow};
        }
        & .tableCell {
          padding-right: 20px;
          position: relative;
          flex: 1;
          & .checkbox {
            margin-right: 20px;
          }
          & .left {
            position: absolute;
            right: 100%;
          }
        }
        &:not(:first-child) {
          & .tableCell {
            &:first-child {
              font-weight: bold;
            }
          }
        }
      }
    }
  `}`;

export const totalRowStyle = theme =>
  `totalRow ${css`
    &.totalRow {
      ${highLightRow(theme)};
      justify-content: space-between;
      padding: 15px;
      padding-left: 50px;
      & .tableCell {
        display: flex;
        flex: 1;
      }
    }
  `}`;

export const modalContentStyle = theme =>
  `familyManifestModal ${css`
     {
      &.familyManifestModal {
        & .modalSubHeader {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 18px;
          & .highlight {
            color: ${theme.secondary};
          }
        }
      }
    }
  `}`;
