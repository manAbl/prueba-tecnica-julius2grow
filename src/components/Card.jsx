import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  title: {
    fontSize: 17.2,
    fontWeight: 600,
    marginBottom: '1.2em',
    display: 'inline-block',
  },
  pos: {
    marginBottom: 8.94,
  },
});

const ICard = ({ children }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};

export default ICard;
