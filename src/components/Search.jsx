import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { searchEmployee } from '../store/actions';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
    flexFlow: 'row wrap',
  },
  select: {
    marginRight: theme.spacing(2),
  },
}));

const ISearch = ({ menuItems }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [property, setProperty] = useState(
    menuItems.length ? menuItems[0].value : ''
  );
  const [search, setSearch] = useState('');

  const handleSelect = e => {
    setProperty(e.target.value);
  };
  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(searchEmployee({ query: search.trim(), term: property }));
  }, [search]);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <div className={classes.select}>
        <InputLabel id="search-label">Term</InputLabel>
        <Select
          labelId="search-label"
          id="search-select"
          value={property}
          onChange={handleSelect}
          label="Term"
        >
          {menuItems.map(item => (
            <MenuItem value={item.value}>
              <em>{item.label}</em>
            </MenuItem>
          ))}
        </Select>
      </div>
      <TextField
        label="Search"
        variant="outlined"
        name="search-input"
        id="search-input"
        onChange={handleSearchChange}
      />
    </FormControl>
  );
};

ISearch.defaultProps = {
  menuItems: [
    {
      label: 'None',
      value: '',
    },
  ],
};
ISearch.propTypes = {
  menuItems: PropTypes.array,
};

export default ISearch;
