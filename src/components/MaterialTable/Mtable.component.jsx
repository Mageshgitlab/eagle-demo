// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableFooter from "@material-ui/core/TableFooter";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import IconButton from "@material-ui/core/IconButton";
// import FirstPageIcon from "@material-ui/icons/FirstPage";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import LastPageIcon from "@material-ui/icons/LastPage";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function TablePaginationActions(props) {
//   const classes = useStyles1();
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onChangePage } = props;
// }

// const handleFirstPageButtonClick = (event) => {
//   onChangePage(event, 0);
// };

// const handleBackButtonClick = (event) => {
//   onChangePage(event, page - 1);
// };

// const handleNextButtonClick = (event) => {
//   onChangePage(event, page + 1);
// };

// const handleLastPageButtonClick = (event) => {
//   onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
// };

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onChangePage: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// export default function SimpleTable({ columns, data }) {
//   const classes = useStyles();
//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             {columns.map((val) => (
//               <TableCell>{val}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow>
//               {Object.keys(row).map((key) => (
//                 <TableCell component="th" scope="row">
//                   {row[key]}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableFooter>
//             <TableRow>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
//                 colSpan={3}
//                 count={data.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 SelectProps={{
//                   inputProps: { "aria-label": "rows per page" },
//                   native: true,
//                 }}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//                 ActionsComponent={TablePaginationActions}
//               />
//             </TableRow>
//           </TableFooter>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({ columns, data, onChange }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    //const skip = rowsPerPage * (page >= 1 ? page - 1 : page);
    //const skip = rowsPerPage * (page >= 1 ? page - 1 : page);
    setPage(page + 1);
    console.log("page:", newPage);
    const skip = newPage * rowsPerPage;
    console.log("sKip from change", skip);
    //const take = rowsPerPage;
    onChange(skip, rowsPerPage);

    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((val) => (
                <TableCell>{val.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow>
                    {Object.keys(row).map((key) => (
                      <TableCell component="th" scope="row">
                        {row[key]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={100}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
