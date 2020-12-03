import React from 'react';
import '../assets/containers/home-styles.scss';
import ITable from '../components/Table';
import ICard from '../components/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 17.2,
    fontWeight: 600,
    marginBottom: '1.2em',
    display: 'inline-block',
  },
  createLink: {
    float: 'right',
  },
  linkWrapper: {
    marginBottom: '1.2rem',
    width: '100%',
    height: '1rem',
    padding: '0 0.4rem'
  }
});

const Home = () => {
  const classes = useStyles();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];

  const columns = ['name', 'salary', 'age'];
  return (
    <div className="home-wrapper">
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Employees CRUD
      </Typography>
      <ICard title="Employees list">
        <div className={classes.linkWrapper}>
          <Link to="/create/employee" className={classes.createLink}>
            Add employee
          </Link>
        </div>
        <ITable rows={rows} columns={columns} actions stickyHeader actions />
      </ICard>
    </div>
  );
};

export default Home;
