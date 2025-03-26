"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Avatar, Chip, IconButton, SvgIcon } from "@mui/material";

const API_URL = "https://loan-service-ivxx.onrender.com/getAll";

interface Column {
  id: "fullname" | "loan_amount" | "tenure" | "employment_status" | "date" | "time" | "actions";
  label: string;
  width?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "fullname", label: "Customer Name", width: 20 },
  { id: "loan_amount", label: "Loan Amount", width: 10, format: (value: number) => `$${value.toLocaleString()}` },
  { id: "tenure", label: "Tenure (Months)", width: 10 },
  { id: "employment_status", label: "Employment Status", width: 20 },
  { id: "date", label: "Date", width: 10 },
  { id: "time", label: "Time", width: 10 },
  { id: "actions", label: "", width: 5 },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setRows(data.users || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "80%", overflow: "hidden", color:'#252733', margin:"10px", border:"1px solid gray" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ width: column.width, color:'#9FA2B4' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              // @ts-ignore
              <TableRow hover role="checkbox" tabIndex={-1} key={row._id || index}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align} style={{color:'#252733'}}>
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        {column.id === "fullname" && (
                          <Avatar style={{ marginRight: "20px" }}
                            // @ts-ignore
                           alt={row.fullname} src="https://mui.com/static/images/avatar/1.jpg" />
                        )}
                        {column.id === "actions" && (
                          <IconButton aria-label="Example">
                            <SvgIcon>
                              <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </SvgIcon>
                          </IconButton>
                        )}
                        {
                          column.id === "employment_status" && (
                            <Chip style={{backgroundColor:value=="employed"?"#FEC400":"#29CC97", color:"white", fontWeight:400}} label={value} />
                          )
                        }
                        {column.id == "employment_status" ? "" : column.id !== "actions" && (column.format && typeof value === "number" ? column.format(value) : value)}
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
