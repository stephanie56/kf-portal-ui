import React from 'react';
import { injectState } from 'freactal';
import { compose, withState } from 'recompose';
import { withFormik, Field } from 'formik';
import { withRouter } from 'react-router-dom';

import { ROLES } from 'common/constants';
import { updateProfile } from 'services/profiles';

const enhance = compose(
  withRouter,
  injectState,
  withState(
    'redirectPath',
    'setRedirectPath',
    ({ state: { loggedInUser } }) => `/user/${loggedInUser.egoId}`,
  ),
  withFormik({
    mapPropsToValues: ({ state: { loggedInUser } }) => {
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
      <span>Percent Filled: {percentageFilled}</span>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <Field name="firstName" placeholder="First Name" onBlur={submitForm} />
        </label>
        <br />
        {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
        <label>
          Last name:
          <Field name="lastName" placeholder="Last Name" onBlur={submitForm} />
        </label>
        <br />
        {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
        <label>
          Email:
          <Field type="email" name="email" placeholder="Email" disabled="true" />
        </label>
        <br />
        <label>
          Roles:
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
        </label>
        <br />
        {touched.roles && errors.roles && <div>{errors.roles}</div>}
      </form>
    </div>
  );
};

export default enhance(SelectRoleForm);
