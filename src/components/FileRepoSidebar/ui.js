import React from 'react';
import { compose } from 'recompose';
import { Trans } from 'react-i18next';
import { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import styled from 'react-emotion';

import DownloadIcon from 'icons/DownloadIcon';
import { ActionButton } from 'uikit/Button';

export const Slideable = styled('div')`
  position: relative;
  transition: all 0.25s;
  width: ${({ expanded, containerWidth, contentSidePadding }) =>
    expanded ? `calc(${containerWidth} + ${contentSidePadding * 2}px)` : '40px'};
  max-width: 300px;
  overflow: hidden;
  box-shadow: 0 0 4.9px 0.2px ${({ theme }) => theme.shadow};
`;

export const Container = styled('div')`
  overflow-y: auto;
  flex-grow: 0;
  flex-shrink: 1;
  width: 100%;
  min-width: 265px;
  height: 100%;
  background: ${({ theme }) => theme.backgroundGrey};
`;

export const Titlebar = styled('div')`
  background-color: ${({ theme }) => theme.greyScale5};
  margin: 0px;
  display: flex;
  padding-top: 15px;
  padding-left: 15px;
  cursor: pointer;
`;

export const Content = styled('div')`
  padding-left: ${({ expanded, contentSidePadding }) =>
    expanded ? contentSidePadding : contentSidePadding * 10}px;
  overflow: hidden;
  padding-right: ${({ contentSidePadding }) => contentSidePadding}px;
  transition: all 0.25s;
  padding-top: 10px;
  height: 100%;
`;

export const Text = styled('div')`
  font-size: 14px;
  line-height: 26px;
`;

export const Section = styled('div')`
  padding-top: 20px;
  padding-bottom: 20px;
  &:not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.greyScale8};
  }
`;

export const DownloadButton = compose(withTheme)(
  ({ onClick, theme, content = () => <Trans>Download</Trans> }) => (
    <ActionButton onClick={onClick}>
      <DownloadIcon
        className={css`
          margin-right: 9px;
        `}
      />
      <span css={theme.uppercase}>{content()}</span>
    </ActionButton>
  ),
);
