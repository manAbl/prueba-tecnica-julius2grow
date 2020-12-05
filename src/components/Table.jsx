import React, { useEffect, useState } from 'react';
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
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 320,
  },
  paper: {
    maxHeight: '60vh',
  },
  iconBtn: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ITable = ({
  rows,
  columns,
  actions,
  stickyHeader,
  size,
  search,
  ariaLabel,
  handleEditItem,
  handleDeleteItem,
}) => {
  const classes = useStyles();
  const alignRowCells = 'left';

  const [tableData, setTableData] = useState([...rows]);

  useEffect(() => {
    if (search.query && search.query !== '') {
      setTableData(
        tableData.filter(item =>
          item[search.term].toString().includes(search.query.toString())
        )
      );
    } else {
      setTableData([...rows]);
    }
  }, [search, rows]);

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table
        stickyHeader={stickyHeader}
        className={classes.table}
        size={size}
        aria-label={ariaLabel}
      >
        <TableHead>
          <TableRow className="capitalize">
            {columns.map(item => (
              <TableCell align="left">{item}</TableCell>
            ))}
            {actions ? <TableCell width="150">actions</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.employee_name}
              </TableCell>
              <TableCell align={alignRowCells}>{row.employee_salary}</TableCell>
              <TableCell align={alignRowCells}>{row.employee_age}</TableCell>
              {actions ? (
                <TableCell className={classes.iconBtn}>
                  <IconButton
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => handleEditItem(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => handleDeleteItem(row.id)}
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
  );
};

ITable.defaultProps = {
  size: 'small',
  ariaLabel: '',
};

ITable.propTypes = {
  ariaLabel: PropTypes.string,
  stickyHeader: PropTypes.bool,
  size: PropTypes.string,
  rows: PropTypes.array,
  columns: PropTypes.array,
  actions: PropTypes.bool,
  search: PropTypes.object,
  handleDeleteItem: PropTypes.func,
  handleEditItem: PropTypes.func,
};

const mapStateToProps = ({ search }) => ({
  search,
});

export default connect(mapStateToProps, null)(ITable);
