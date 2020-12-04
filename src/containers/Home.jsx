import React, { useState } from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import ReloadIcon from '@material-ui/icons/Replay';

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
  const [reload, setReload] = useState(false);
  const { data, loading } = useGetData(getEmployees, reload);
  
  if (!employees || employees.length <= 0) {
    setEmployeesList(data);
  }

  const handleReloadList = () => {
    setReload(!reload);
  };

  const handleEditItem = id => console.log(id);
  const handleDeleteItem = id => console.log(id);

  return (
    <div className="home-wrapper">
      <div className="flex align-items-center">
        <Title title="Employees CRUD" variant="h5" />
        <IconButton onClick={handleReloadList}>
          <ReloadIcon />
        </IconButton>
      </div>

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
