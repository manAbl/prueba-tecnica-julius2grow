import React, { useEffect, useState } from 'react';
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

const EmployeeForm = ({ sendRequest }) => {
  const classes = useStyles();
  const [form, setValue] = useState({
    employee_name: '',
    employee_age: '',
    employee_salary: '',
    id: null,
  });

  const handleInputChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = data => {
    if (!Object.keys(validateForm(data)).length) {
      sendRequest(data);
    }
  };

  const validateForm = form => {
    let errors = {};
    const fieldsEmpty = Object.keys(form).filter(
      key => key != 'id' && !form[key]
    );

    if (fieldsEmpty.length) {
      fieldsEmpty.forEach(key => {
        errors[key] = 'This field is required';
      });
    }

    if (form.employee_age > 120) {
      errors.employee_age = 'Invalid age';
    }

    if (typeof form.employee_salary != 'number') {
      errors.employee_salary = 'This field only accepts numbers';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={form}
      validate={validateForm}
      onSubmit={handleFormSubmit}
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
            <Button href="/">Cancel</Button>
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
