import React, { useState } from 'react';
import ITable from '../components/Table';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { setEmployeesList } from '../store/actions';
import useGetData from '../hooks/useGetData';
import { getEmployees } from '../services/api';
import Title from '../components/Title';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ReloadIcon from '@material-ui/icons/Replay';
import { handleDeleteEmployee } from '../thunks';
import { Link } from 'react-router-dom';
import { sortBy } from '../utils';
import ISearch from '../components/Search';

const tableColumns = ['name', 'salary', 'age'];
const useStyles = makeStyles({
  createLink: {
    float: 'right',
  },
  linkWrapper: {
    width: '100%',
    height: '3rem',
  },
  root: {
    height: '90vh',
    display: 'flex',
    padding: '2.5rem .5rem',
    flexFlow: 'column nowrap'
  }
});

const Home = ({ employees, setEmployeesList, deleteItem, history: router }) => {
  const classes = useStyles();
  const menuItems = [
    {
      label: 'Age',
      value: 'employee_age',
    },
    {
      label: 'Name',
      value: 'employee_name',
    },
    {
      label: 'Salary',
      value: 'employee_salary',
    },
  ];

  const [loadOnEveryMounted] = useState(false);
  const { data, loading } = useGetData(getEmployees);

  const handleEditItem = id => {
    router.push(`/employee/${id}`);
  };

  const handleDeleteItem = id => deleteItem(id);
  const handleReloadList = () => setData(data);

  const setData = data => {
    setEmployeesList(data.sort((a, b) => sortBy(a, b, 'employee_name')));
  };

  if (loadOnEveryMounted) {
    setData(data);
  }

  return (
    <div className={classes.root}>
      <div className="flex align-items-center">
        <Title title="Employees CRUD" variant="h5" />
        <IconButton onClick={handleReloadList}>
          <ReloadIcon />
        </IconButton>
        <br></br>
        <Divider />
        <ISearch menuItems={menuItems} />
      </div>

      <div className={classes.linkWrapper}>
        <Link to="/create-employee">
          <Button color="primary" className={classes.createLink}>
            Add employee
          </Button>
        </Link>
      </div>
      {loading && employees ? (
        <div> Loading ...</div>
      ) : (
        <ITable
          stickyHeader
          actions
          rows={employees}
          columns={tableColumns}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ employees }) => ({
  employees,
});

const mapDispatchToProps = {
  setEmployeesList,
  deleteItem: handleDeleteEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
