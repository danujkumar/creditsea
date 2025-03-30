'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { createTheme } from '@mui/material/styles'
import { Badge } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SmsIcon from '@mui/icons-material/Sms'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <IconButton aria-label={notificationsLabel(4)}>
        <Badge
          style={{ marginRight: '20px' }}
          badgeContent={4}
          color="secondary"
        >
          <NotificationsIcon style={{ color: '#0A512F' }} />
        </Badge>
        <SmsIcon style={{ marginRight: '20px', color: '#0A512F' }} />
        <AccountCircleIcon style={{ color: '#0A512F' }} />
      </IconButton>
    </Toolbar>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications'
  }
  if (count > 99) {
    return 'more than 99 notifications'
  }
  return `${count} notifications`
}

export default function NavbarComponent() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'white',
        color: '#0A512F',
        boxShadow: '2px 2px 2px 2px gray',
        marginBottom: '30px',
      }}
    >
      {appBarLabel('CREDIT APP')}
    </AppBar>
  )
}
