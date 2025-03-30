import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PaymentIcon from '@mui/icons-material/Payment'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ReportIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LockIcon from '@mui/icons-material/Lock'
import SavingsIcon from '@mui/icons-material/Savings'
import ReceiptIcon from '@mui/icons-material/Receipt'
import EditIcon from '@mui/icons-material/Edit'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LogoutIcon from '@mui/icons-material/ExitToApp'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Borrowers', icon: <PeopleIcon /> },
  { text: 'Loans', icon: <MonetizationOnIcon /> },
  { text: 'Repayments', icon: <PaymentIcon /> },
  { text: 'Loan Parameters', icon: <AccountBalanceIcon /> },
  { text: 'Accounting', icon: <AccountBalanceWalletIcon /> },
  { text: 'Reports', icon: <ReportIcon /> },
  { text: 'Collateral', icon: <DescriptionIcon /> },
  { text: 'Access Configuration', icon: <LockIcon /> },
  { text: 'Savings', icon: <SavingsIcon /> },
  { text: 'Expenses', icon: <ReceiptIcon /> },
  { text: 'E-signature', icon: <EditIcon /> },
  { text: 'Investor Accounts', icon: <AccountBalanceWalletIcon /> },
  { text: 'Calendar', icon: <CalendarTodayIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
  { text: 'Sign Out', icon: <LogoutIcon /> },
]

export default function Sidebar() {
  return (
    <div className="hidden sm:block w-1/3 md:w-1/4 lg:w-1/5 p-0 bg-green-900 text-white">
    <List>
      <ListItem className="bg-green-900 border-b-2 border-black py-2">
        <ListItemButton>
          <AccountCircleIcon className="text-lime-400 mr-5 text-4xl" />
          <ListItemText
            primary="John Okoh"
            className="text-lime-400 text-lg font-semibold"
          />
        </ListItemButton>
      </ListItem>
      {menuItems.map((item, index) => (
        <ListItem
          key={index}
          className="bg-green-900 border-b-2 border-black py-2"
        >
          <ListItemButton>
            <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
  )
}
