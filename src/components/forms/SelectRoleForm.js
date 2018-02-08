import React from 'react';
import { injectState } from 'freactal';
import { compose, withState } from 'recompose';
import { withFormik, Field } from 'formik';
import styled, { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { withRouter } from 'react-router-dom';

import { ROLES } from 'common/constants';
import { updateProfile } from 'services/profiles';

const StyledLabel = styled('label')`
  font-weight: 900;
  width: 140px;
`;

const enhance = compose(
  withRouter,
  withTheme,
  injectState,
  withState(
    'redirectPath',
    'setRedirectPath',
    ({ state: { loggedInUser } }) =>
      `/user/${(loggedInUser || { firstName: '', lastName: '', email: '', roles: [] }).egoId}`,
  ),
  withFormik({
    mapPropsToValues: ({ state: { loggedInUser } }) => {
      loggedInUser = { firstName: '', lastName: '', email: '', roles: [] };
      return {
        firstName: loggedInUser.firstName || '',
        lastName: loggedInUser.lastName || '',
        email: loggedInUser.email || '',
        roles: (loggedInUser.roles && loggedInUser.roles[0]) || '',
      };
    },
    validate: (values, props) => {
      let errors = {};
      if (!values.roles) {
        errors.roles = 'Must select a role';
      } else if (!ROLES.includes(values.roles)) {
        errors.roles = 'Invalid role';
      }
      if (!values.firstName || values.firstName.length === 0) {
        errors.firstName = 'First name is required';
      }
      if (!values.lastName || values.lastName.length === 0) {
        errors.lastName = 'Last name is required';
      }
      const { onValidateFinish } = props;
      onValidateFinish && onValidateFinish(errors);
      return errors;
    },
    handleSubmit: async (
      values: any,
      {
        props: {
          state: { loggedInUser },
          redirectPath,
          effects: { setUser },
          onFinish,
          history,
          ...restProps
        },
        setSubmitting,
        setErrors,
      }: any,
    ) => {
      const { email, ...rest } = loggedInUser;
      updateProfile({
        user: {
          ...rest,
          firstName: values.firstName,
          lastName: values.lastName,
          roles: [values.roles],
        },
      }).then(
        async profile => {
          await setUser({ ...profile, email });
          //if (onFinish) {
          //onFinish();
          //}
          //if (redirectPath !== '') {
          //history.push(redirectPath);
          //}
        },
        errors => setSubmitting(false),
      );
    },
  }),
);

const SelectRoleForm = ({
  theme,
  onFinish,
  errors,
  touched,
  handleSubmit,
  submitForm,
  validate,
  isSubmitting,
  values,
  state: { percentageFilled },
  history,
  setRedirectPath,
}) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={css`
          ${theme.column} height: 230px;
          justify-content: space-around;
        `}
      >
        <div className={theme.row}>
          <StyledLabel>First name:</StyledLabel>
          <div className={theme.column}>
            <Field
              className={theme.input}
              name="firstName"
              placeholder="First Name"
              onBlur={submitForm}
            />
            {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
          </div>
        </div>
        <div className={theme.row}>
          <StyledLabel>Last name:</StyledLabel>
          <div className={theme.column}>
            <Field
              className={theme.input}
              name="lastName"
              placeholder="Last Name"
              onBlur={submitForm}
            />
            {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
          </div>
        </div>

        <div className={theme.row}>
          <StyledLabel>Email:</StyledLabel>
          <div className={theme.column}>
            <Field
              className={theme.input}
              type="email"
              name="email"
              placeholder="Email"
              disabled="true"
            />
          </div>
        </div>

        <div className={theme.row}>
          <StyledLabel>Roles:</StyledLabel>
          <div className={theme.column}>
            <Field component="select" name="roles" onBlur={submitForm}>
              <option value="" disabled={true}>
                Please select a role
              </option>
              {ROLES.map(role => (
                <option value={role} key={role}>
                  {role}
                </option>
              ))}
            </Field>
          </div>
          {touched.roles && errors.roles && <div>{errors.roles}</div>}
        </div>
      </form>
    </div>
  );
};

export default enhance(SelectRoleForm);
