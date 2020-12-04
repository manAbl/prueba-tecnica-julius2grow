import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const ICard = ({ children }) => {
  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

Card.propTypes = {
  children: PropTypes.element.isRequired
};

export default ICard;
