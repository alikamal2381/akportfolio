import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";

function createData(serialno, worktype, appname, livedemo, githubrepo) {
  return { serialno, worktype, appname, livedemo, githubrepo };
}

const rows = [
  createData(
    "1",
    "My Work",
    "To do App",
    "http://ez-todos-app.surge.sh/",
    "https://github.com/alikamal2381/todos.git"
  ),
  createData(
    "2",
    "My Work",
    "Budget Calculator",
    "http://ez-budgetcalc.surge.sh/",
    "https://github.com/alikamal2381/budget-calc.git"
  ),
  createData(
    "3",
    "My Work",
    "Shopping Cart Module",
    "http://ez-shoppingcart.surge.sh/",
    "https://github.com/alikamal2381/reactproject.git"
  ),
  createData(
    "4",
    "My Work",
    "Receipe App Module",
    "http://ez-receipeapp.surge.sh/",
    "https://github.com/alikamal2381/receipe-app.git"
  ),
  createData(
    "5",
    "My Work",
    "Router App Example",
    "http://ez-routerapp.surge.sh/",
    "https://github.com/alikamal2381/router-app.git"
  ),
  createData(
    "6",
    "My Work",
    "Router App Example 2",
    "http://ez-routerapptemplate.surge.sh/",
    "https://github.com/alikamal2381/router-app2.git"
  ),
  createData(
    "7",
    "My Work",
    "React App Example 3 with CSS",
    "http://ez-reactexample.surge.sh/",
    "https://github.com/alikamal2381/react-example.git"
  ),
  createData(
    "8",
    "My Work",
    "React Reduct App Example",
    "http://ez-react-reduct-app.surge.sh/",
    "https://github.com/alikamal2381/react-redux-app.git"
  ),
  createData(
    "9",
    "My Work",
    "Shopping Summary by React Redux",
    "http://ez-shopping-summary.surge.sh/",
    "https://github.com/alikamal2381/shopping-summary.git"
  ),
  createData(
    "10",
    "My Work",
    "Learn Redux by DevEd",
    "http://ez-learn-redux.surge.sh/",
    "https://github.com/alikamal2381/learn-redux.git"
  ),
  createData(
    "11",
    "My Work",
    "Learn PWA App",
    "http://ez-learn-pwa-app.surge.sh/",
    "https://github.com/alikamal2381/pwa_react_video.git"
  ),

  createData(
    "12",
    "Bootcamp 2020",
    "Project 1: Build an Expense Tracker App",
    "http://bootcamp-p1-expensetracker.surge.sh/",
    "https://github.com/alikamal2381/exp-tracker-app.git"
  ),
  createData(
    "13",
    "Bootcamp 2020",
    "Project 2: COVID-19 Tracker App",
    "http://bootcamp-p2-covid19-tracker.surge.sh/",
    "https://github.com/alikamal2381/covid19-tracker-app.git"
  ),
  createData(
    "14",
    "Bootcamp 2020",
    "Project 3: Shoe Store",
    "http://bootcamp-p3-shoestore.surge.sh/",
    "https://github.com/alikamal2381/kamal-online-store.git"
  ),
  createData(
    "15",
    "Bootcamp 2020",
    "Project 4A: Red Queen’s Web Animation API and React Hooks",
    "http://bootcamp-p4a-redqueenrace.surge.sh/",
    "https://github.com/alikamal2381/red-queen-race.git"
  ),
  createData(
    "16",
    "Bootcamp 2020",
    "Project 4B: Develop Tiny Short Animation with React Hooks",
    "http://bootcamp-p4b-shortanimation.surge.sh/",
    "https://github.com/alikamal2381/short-animation.git"
  ),
  createData(
    "17",
    "Bootcamp 2020",
    "Project 5: Build a Animated React Website (Animated Illustrations)",
    "http://bootcamp-p5-animatedreactweb.surge.sh/",
    "https://github.com/alikamal2381/animated-react-web.git"
  ),
  createData(
    "18",
    "Bootcamp 2020",
    "Project 6: Quiz App with React and Typescript",
    "http://bootcamp-p6-quizapp.surge.sh/",
    "https://github.com/alikamal2381/quiz-app.git"
  ),
  createData(
    "19",
    "Bootcamp 2020",
    "Project 7a: ETracker n Quiz with Typescript and PWA",
    " - ",
    " - "
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "serialno",
    numeric: true,
    disablePadding: true,
    label: "S#",
  },
  { id: "worktype", numeric: false, disablePadding: false, label: "Work Type" },
  { id: "appname", numeric: false, disablePadding: false, label: "App Name" },
  { id: "livedemo", numeric: false, disablePadding: false, label: "LIVE Demo" },
  {
    id: "githubrepo",
    numeric: false,
    disablePadding: false,
    label: "Github Repo",
  },
];

function Listing(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

Listing.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Project Listing
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 900,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className="listing-body">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <Listing
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.serialno}
                        </TableCell>
                        <TableCell align="left">{row.worktype}</TableCell>
                        <TableCell align="left">{row.appname}</TableCell>
                        <TableCell align="left">{row.livedemo}</TableCell>
                        <TableCell align="left">{row.githubrepo}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    </div>
  );
}
