import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 320,
  },
  iconBtn: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const ITable = ({ rows, columns, actions, stickyHeader, size, ariaLabel }) => {
  const classes = useStyles();
  const align = 'center';

  return (
    <div className="table-wrapper relative">
      <TableContainer component={Paper}>
        <Table
          stickyHeader={stickyHeader}
          className={classes.table}
          size={size ? size : 'small'}
          aria-label={ariaLabel ? ariaLabel : ''}
        >
          <TableHead>
            <TableRow className="capitalize">
              {columns.map((item) => (
                <TableCell align="left">{item}</TableCell>
              ))}
              {actions ? <TableCell>actions</TableCell> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align={align}>{row.calories}</TableCell>
                <TableCell align={align}>{row.fat}</TableCell>
                {actions ? (
                  <TableCell className={classes.iconBtn}>
                    <IconButton variant="outlined" size="small" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      size="small"
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

ITable.propTypes = {
  ariaLabel: PropTypes.string,
  stickyHeader: PropTypes.bool,
  size: PropTypes.string,
  rows: PropTypes.array,
  columns: PropTypes.array,
  actions: PropTypes.bool,
};

export default ITable;
