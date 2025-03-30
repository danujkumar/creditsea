'use client'
import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { Avatar, Chip, IconButton, SvgIcon } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PeopleIcon from '@mui/icons-material/People'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SavingsIcon from '@mui/icons-material/Savings'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import Home from './page'

const dashboardStats = [
  {
    title: 'Loans',
    value: '50',
    icon: <MonetizationOnIcon style={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'Borrowers',
    value: '100',
    icon: <PeopleIcon style={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'Cash Disbursed',
    value: '550,000',
    icon: <AttachMoneyIcon style={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'Savings',
    value: '450,000',
    icon: <SavingsIcon style={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'Repaid Loans',
    value: '30',
    icon: <CheckCircleIcon style={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'Cash Received',
    value: '1,000,000',
    icon: <CurrencyExchangeIcon style={{ fontSize: 40, color: 'white' }} />,
  },
]

const API_URL = 'https://loan-service-ivxx.onrender.com/getAll'

interface Column {
  id:
    | 'fullname'
    | 'loan_amount'
    | 'tenure'
    | 'employment_status'
    | 'date'
    | 'time'
    | 'actions'
  label: string
  width?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'fullname', label: 'Customer Name', width: 20 },
  {
    id: 'loan_amount',
    label: 'Loan Amount',
    width: 10,
    format: (value: number) => `$${value.toLocaleString()}`,
  },
  { id: 'tenure', label: 'Tenure (Months)', width: 10 },
  { id: 'employment_status', label: 'Employment Status', width: 20 },
  { id: 'date', label: 'Date', width: 10 },
  { id: 'time', label: 'Time', width: 10 },
  { id: 'actions', label: '', width: 5 },
]

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  interface Row {
    _id?: string
    fullname: string
    loan_amount: number
    tenure: number
    employment_status: string
    date: string
    time: string
    actions?: string
  }

  const [rows, setRows] = React.useState<Row[]>([])
  const [dialog, setDialog] = React.useState(false)

  React.useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setRows(data.users || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleCloseDialog = (close: boolean) => {
    setDialog(close)
  }

  return (
    <div className="flex flex-col items-center w-full">
      {dialog && <Home close={handleCloseDialog} />}
      <div className="flex flex-col items-center justify-center gap-4 p-4 sm:gap-6 sm:p-6 w-full">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="w-40 h-14 flex justify-center items-center rounded-lg shadow-md bg-white hover:bg-gray-100 transition">
            Borrow Cash
          </button>
          <button className="w-40 h-14 flex justify-center items-center rounded-lg shadow-md bg-white hover:bg-gray-100 transition">
            Transact
          </button>
          <button
            className="w-40 h-14 flex justify-center items-center rounded-lg shadow-md bg-white hover:bg-gray-100 transition"
            onClick={() => setDialog(!dialog)}
          >
            Get Loan
          </button>
        </div>

        <div className="flex justify-center items-center w-full max-w-lg px-4">
          <div className="relative w-full">
            <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Have a question? Ask Now"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center text-[#252733] m-2 border border-gray-400">
        {dashboardStats.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-md shadow-md w-full sm:w-[350px] m-5"
          >
            <div className="bg-green-800 w-20 h-full flex justify-center items-center text-white">
              {item.icon}
            </div>
            <div className="p-4 flex-grow">
              <p className="text-xl font-bold m-1">{item.value}</p>
              <p className="text-sm text-gray-600 m-1">
                {item.title.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Paper className="w-full max-w-3xl overflow-hidden border border-gray-300 p-2">
        <TableContainer className="max-h-96 overflow-auto">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    className="text-gray-500 font-medium"
                    style={{ width: column.width }}
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
                    key={row._id || index}
                    className="hover:bg-gray-100"
                  >
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className="text-gray-700"
                        >
                          <div className="flex items-center space-x-3">
                            {column.id === 'fullname' && (
                              <Avatar
                                alt={row.fullname}
                                src="https://mui.com/static/images/avatar/1.jpg"
                              />
                            )}
                            {column.id === 'actions' && (
                              <MoreVertIcon className="cursor-pointer" />
                            )}
                            {column.id === 'employment_status' ? (
                              <Chip
                                className="text-white font-medium"
                                style={{
                                  backgroundColor:
                                    value === 'employed'
                                      ? '#FEC400'
                                      : '#29CC97',
                                }}
                                label={value}
                              />
                            ) : (
                              column.id !== 'actions' &&
                              (column.format && typeof value === 'number'
                                ? column.format(value)
                                : value)
                            )}
                          </div>
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex justify-between items-center p-4">
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </div>
  )
}
