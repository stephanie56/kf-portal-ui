import React from 'react';
import { injectState } from 'freactal';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { get } from 'lodash';
import Wizard from 'uikit/Wizard';
import Login from 'components/Login';
import SelectRoleForm from 'components/forms/SelectRoleForm';
import { updateProfile } from 'services/profiles';

const Consent = compose(injectState)(({ state: { loggedInUser }, effects: { setUser } }) => (
  <div>
    <h2>Read and consent to our terms and conditions</h2>
    <textarea
      style={{
        width: '715px',
        minHeight: '340px',
        resize: 'none',
      }}
      value="Lollipop halvah cotton candy marshmallow gingerbread jelly beans topping. Fruitcake
            sugar plum tiramisu pie. Sugar plum sweet roll cake chocolate bar lollipop jelly
            beans. Jelly jelly beans icing macaroon tart jujubes lemon drops marzipan. Liquorice
            carrot cake bonbon pie chocolate. Gingerbread oat cake tootsie roll icing. Chocolate
            muffin danish croissant. Carrot cake bonbon bonbon lemon drops caramels danish
            tootsie roll. Biscuit jelly beans sugar plum. Sweet danish oat cake carrot cake
            chocolate bar marshmallow croissant. Ice cream chocolate gummies fruitcake. Marzipan
            brownie chocolate bar tart. Oat cake apple pie soufflé topping. Toffee dessert
            chocolate cotton candy carrot cake topping fruitcake gummi bears. Chocolate cake
            brownie pie cake caramels."
      readOnly
    />
    <p>
      <input
        type="checkbox"
        checked={get(loggedInUser, 'acceptedTerms', false)}
        onChange={event => {
          const { email, percentageFilled, ...rest } = loggedInUser;
          updateProfile({
            user: {
              ...rest,
              acceptedTerms: event.target.checked,
            },
          }).then(async profile => {
            await setUser({ ...profile, email });
          });
        }}
      />
      I have read and agreed to the Kids First Data Research Portal Term and Conditions
    </p>
  </div>
));

const JoinContent = compose(withRouter)(({ history }) => (
  <div>
    Join Kids First
    <Wizard
      steps={[
        {
          title: 'Connect',
          render: ({ nextStep }) => (
            <div>
              <p>Select a way to connect to the Kids First Data Resource Portal</p>
              Don’t worry, the information you provide Kids First will not be shared with any of
              these providers.
              <Login shouldNotRedirect={true} onFinish={nextStep} />
            </div>
          ),
          canGoBack: false,
        },
        {
          title: 'Basic Info',
          render: ({ disableNextStep }) => (
            <div>
              <h2>A bit about you</h2>
              <SelectRoleForm
                onValidateFinish={errors => disableNextStep(!!Object.keys(errors).length)}
              />
            </div>
          ),
          canGoBack: true,
        },
        {
          title: 'Consent',
          Component: <Consent />,
          renderNext: ({ nextStep, nextDisabled }) => (
            <button onClick={() => history.push('/files')} disabled={nextDisabled}>
              Done
            </button>
          ),
          canGoBack: false,
        },
      ]}
    />
  </div>
));
export default JoinContent;
