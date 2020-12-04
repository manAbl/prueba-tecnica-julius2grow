import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  title: {
    marginBottom: '1.2em',
  },
});

const Title = ({ title, variant }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={variant} component="h2" className={classes.title}>
        {title}
      </Typography>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
};

export default Title;
