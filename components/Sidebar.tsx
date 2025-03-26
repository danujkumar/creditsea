import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LockIcon from '@mui/icons-material/Lock';
import SavingsIcon from '@mui/icons-material/Savings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EditIcon from '@mui/icons-material/Edit';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Borrowers", icon: <PeopleIcon /> },
  { text: "Loans", icon: <MonetizationOnIcon /> },
  { text: "Repayments", icon: <PaymentIcon /> },
  { text: "Loan Parameters", icon: <AccountBalanceIcon /> },
  { text: "Accounting", icon: <AccountBalanceWalletIcon /> },
  { text: "Reports", icon: <ReportIcon /> },
  { text: "Collateral", icon: <DescriptionIcon /> },
  { text: "Access Configuration", icon: <LockIcon /> },
  { text: "Savings", icon: <SavingsIcon /> },
  { text: "Expenses", icon: <ReceiptIcon /> },
  { text: "E-signature", icon: <EditIcon /> },
  { text: "Investor Accounts", icon: <AccountBalanceWalletIcon /> },
  { text: "Calendar", icon: <CalendarTodayIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "Sign Out", icon: <LogoutIcon /> }
];

export default function Sidebar() {
  return (
    <div style={{ width: "20%", padding: 0 }}>
      <List>
      <ListItem  
            style={{ backgroundColor: "#0A512F", borderBottom: "2px solid black", padding: 10, color: "white", fontWeight: 400 }}
          >
            <ListItemButton>
            <AccountCircleIcon style={{color:"#ADCF1A", marginRight:"20px", fontSize:"40px"}}/>
              <ListItemText style={{color:"#ADCF1A", fontSize:"50px"}} primary={'John Okoh'} />
            </ListItemButton>
          </ListItem>
        {menuItems.map((item, index) => (
          <ListItem 
            key={index} 
            style={{ backgroundColor: "#0A512F", borderBottom: "2px solid black", padding: 0, color: "white", fontWeight: 400 }}
          >
            <ListItemButton>
              <ListItemIcon style={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
