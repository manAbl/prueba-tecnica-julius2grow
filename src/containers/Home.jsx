import React from 'react';
import ITable from '../components/Table';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import '../assets/containers/home-styles.scss';
import { setEmployeesList } from '../store/actions';
import useGetData from '../hooks/useGetData';
import { getEmployees } from '../services/api';
import Title from '../components/Title';

const tableColumns = ['name', 'salary', 'age'];
const useStyles = makeStyles({
  createLink: {
    float: 'right',
  },
  linkWrapper: {
    width: '100%',
    height: '3rem',
  },
});

const Home = ({ employees, setEmployeesList }) => {
  const classes = useStyles();
  const { data, loading } = useGetData(getEmployees);
  setEmployeesList(data);

  const handleEditItem = (id) => console.log(id);
  const handleDeleteItem = (id) => console.log(id);

  return (
    <div className="home-wrapper">
      <Title title="Employees CRUD" variant="h5" />
      <div className={classes.linkWrapper}>
        <Button
          color="primary"
          href="/create-employee"
          className={classes.createLink}
        >
          Add employee
        </Button>
      </div>
      {loading ? (
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
