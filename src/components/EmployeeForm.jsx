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
    name: '',
    age: '',
    salary: '',
    id: null,
  });

  const [errors, setFieldError] = useState([]);

  const handleInputChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    sendRequest(form);
  };

  //TODO: Validate form before sending data
  const validateForm = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="email"
            type="email"
            className={classes.field}
            label="Email"
          />
          <Field component={TextField} type="number" label="Age" name="Age" />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
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
