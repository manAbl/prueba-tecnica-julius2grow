import React, { useEffect, useState } from 'react';
import ICard from '../components/Card';
import EmployeeForm from '../components/EmployeeForm';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../components/Title';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  handleCreateEmployee,
  handleGetEmployeeData,
  handleUpdateEmployee,
} from '../thunks';
import { useParams } from 'react-router-dom';
import { setSelectedEmployee } from '../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    minWidth: 320,
    alignItems: 'center',
    padding: '2.75rem 0.5rem'
  },
  title: {
    marginBottom: theme.spacing(3),
  }
}));


const Employee = ({ create, get, update, history: router }) => {
  let params = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  let title = params.id ? 'Edit employee' : 'Create employee';

  const [isUpdate, setUpdate] = useState(false);
  const [form, setForm] = useState({
    employee_salary: '',
    employee_name: '',
    employee_age: '',
    id: null,
  });

  useEffect(() => {
    if (params.id) {
      get(params.id).then(() => {
        setUpdate(!isUpdate);
      });
    }
  }, [params.id]);

  const currentEmployee = useSelector(state => state.currentEmployee);

  useEffect(() => {
    const {
      employee_age,
      employee_name,
      employee_salary,
      id,
    } = currentEmployee;

    setForm({
      id,
      employee_age,
      employee_name,
      employee_salary,
    });
  }, [isUpdate]);

  const handleSendRequest = data => {
    let method = params.id ? update : create;
    method(data)
      .then(_ => handleFormCancel())
      .catch(_ => {
        // Ignore, this is being handled from the store with notifications
      });
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

  const handleFormCancel = () => {
    if (params.id) {
      dispatch(setSelectedEmployee(false));
    }
    router.push('/');
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Title title={title} variant="h5" />
      </div>
      <ICard>
        <EmployeeForm
          formValues={form}
          validateForm={validateForm}
          sendRequest={handleSendRequest}
          handleFormCancel={handleFormCancel}
        />
      </ICard>
    </div>
  );
};

const mapDispatchToProps = {
  create: handleCreateEmployee,
  update: handleUpdateEmployee,
  get: handleGetEmployeeData,
};

export default connect(null, mapDispatchToProps)(Employee);
