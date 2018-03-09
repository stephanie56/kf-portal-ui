import * as React from 'react';
import { compose, lifecycle, withState } from 'recompose';

import { GEN3 } from 'common/constants';
import { getUser as getGen3User } from 'services/gen3';
import { css } from 'emotion';
import { injectState } from 'freactal';
import { withTheme } from 'emotion-theming';
import CheckIcon from 'react-icons/lib/fa/check-circle';

const styles = css`
  table {
    border-collapse: collapse;
  }
  span.header {
    font-weight: bold;
  }
`;

const enhance = compose(
  injectState,
  withTheme,
  withState('gen3Key', 'setGen3Key', ''),
  withState('userDetails', 'setUserDetails', {}),
  lifecycle({
    async componentDidMount() {
      const { setUserDetails } = this.props;
      let userDetails = await getUserInfo({
        integrationToken: this.props.state.integrationTokens[GEN3],
      });
      setUserDetails(userDetails.data);
    },
  }),
);

const getUserInfo = async ({ integrationToken }) => {
  return await getGen3User(integrationToken);
};

const Gen3ConnectionDetails = ({
  state,
  effects,
  theme,
  userDetails,
  setUserDetails,
  ...props
}) => {
  return (
    <div css={styles}>
      <div
        css={`
          color: ${theme.active};
          padding: 10px;
        `}
      >
        <CheckIcon size={20} />
        <span> Connected account: {userDetails.username}</span>
      </div>
      <div>
        <table>
          <tr>
            <span> You can download data from these studies:</span>
          </tr>
          {userDetails.project_access ? (
            Object.keys(userDetails.project_access).map(projectName => (
              <tr>
                <span class="header">{projectName}</span>
              </tr>
            ))
          ) : (
            <tr />
          )}
        </table>
      </div>
    </div>
  );
};

export default enhance(Gen3ConnectionDetails);