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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SavingsIcon from "@mui/icons-material/Savings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Home from "./page";

const dashboardStats = [
  {
    title: "Loans",
    value: "50",
    icon: <MonetizationOnIcon style={{ fontSize: 40, color: "white" }} />,
  },
  {
    title: "Borrowers",
    value: "100",
    icon: <PeopleIcon style={{ fontSize: 40, color: "white" }} />,
  },
  {
    title: "Cash Disbursed",
    value: "550,000",
    icon: <AttachMoneyIcon style={{ fontSize: 40, color: "white" }} />,
  },
  {
    title: "Savings",
    value: "450,000",
    icon: <SavingsIcon style={{ fontSize: 40, color: "white" }} />,
  },
  {
    title: "Repaid Loans",
    value: "30",
    icon: <CheckCircleIcon style={{ fontSize: 40, color: "white" }} />,
  },
  {
    title: "Cash Received",
    value: "1,000,000",
    icon: <CurrencyExchangeIcon style={{ fontSize: 40, color: "white" }} />,
  },
];

const API_URL = "https://loan-service-ivxx.onrender.com/getAll";

interface Column {
  id:
    | "fullname"
    | "loan_amount"
    | "tenure"
    | "employment_status"
    | "date"
    | "time"
    | "actions";
  label: string;
  width?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "fullname", label: "Customer Name", width: 20 },
  {
    id: "loan_amount",
    label: "Loan Amount",
    width: 10,
    format: (value: number) => `$${value.toLocaleString()}`,
  },
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
  const [dialog, setDialog] = React.useState(false);

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

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "79%" }}>
      {dialog && (<Home />)}
      <div style={{ display: "flex", gap:"10px", flexDirection: "column", height: "15vh", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", gap:"20px", flexDirection: "row", height: "10vh" }}>
        <button
          style={{
            width: "10rem",
            height: "55px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
            backgroundColor: "#fff",
          }}
        >
          Borrow Cash
        </button>
        <button
          style={{
            width: "10rem",
            height: "55px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
            backgroundColor: "#fff",
          }}
        >
          Transact
        </button>
        <button
          style={{
            width: "10rem",
            height: "55px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
            backgroundColor: "#fff",
          }}
          onClick={() => setDialog(!dialog)}
        >
          Get Loan
        </button>
      </div>
      <div className="container">
        <div className="rowm[,] height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Have a question? Ask Now"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          color: "#252733",
          margin: "10px",
          border: "1px solid gray",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {dashboardStats.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              background: "white",
              borderRadius: "5px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              width: "350px",
              margin: "20px",
            }}
          >
            <div
              style={{
                background: "#0A512F",
                width: "80px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon}
            </div>
            <div style={{ padding: "15px", flexGrow: 1 }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "5px 0",
                }}
              >
                {item.value}
              </p>
              <p style={{ fontSize: "14px", color: "#555", margin: "5px 0" }}>
                {item.title.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </Paper>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          color: "#252733",
          margin: "10px",
          border: "1px solid gray",
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ width: column.width, color: "#9FA2B4" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  // @ts-ignore
                    key={row._id || index}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ color: "#252733" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            {column.id === "fullname" && (
                              <Avatar
                                style={{ marginRight: "20px" }}
                                // @ts-ignore
                                alt={row.fullname}
                                src="https://mui.com/static/images/avatar/1.jpg"
                              />
                            )}
                            {column.id === "actions" && (
                              <MoreVertIcon style={{ cursor: "pointer" }} />
                            )}
                            {column.id === "employment_status" && (
                              <Chip
                                style={{
                                  backgroundColor:
                                    value == "employed" ? "#FEC400" : "#29CC97",
                                  color: "white",
                                  fontWeight: 400,
                                }}
                                label={value}
                              />
                            )}
                            {column.id == "employment_status"
                              ? ""
                              : column.id !== "actions" &&
                                (column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value)}
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
    </div>
  );
}
