import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

const useStyles = makeStyles({
  field: {
    marginBottom: '0.8rem',
    minWidth: '24rem',
    marginRight: '0.8rem',
  },
  footer: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'end',
  },
});

const EmployeeForm = ({
  formValues: form,
  validateForm,
  handleFormCancel,
  sendRequest,
}) => {
  const classes = useStyles();

  return (
    <Formik
      enableReinitialize
      initialValues={form}
      validate={values => validateForm(values)}
      onSubmit={values => {
        sendRequest(values);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            label="Full name"
            name="employee_name"
            type="text"
            required
            className={classes.field}
          />
          <Field
            required
            component={TextField}
            type="number"
            label="Age"
            name="employee_age"
          />
          <br />
          <Field
            component={TextField}
            label="Salary"
            name="employee_salary"
            type="number"
            required
            className={classes.field}
          />
          <footer className={classes.footer}>
            <Button onClick={handleFormCancel}>Cancel</Button>
            <Button
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </footer>
          {isSubmitting && (
            <div>
              <br />
              <LinearProgress />
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeForm;
