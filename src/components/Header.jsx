import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import AccountCircle from '@mui/icons-material/AccountCircle'

export default function Header({ authenticated, setAuthenticated }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSignIn = () => {
    setAuthenticated(true)
    handleClose()
  }

  const handleSignOut = () => {
    setAuthenticated(false)
    handleClose()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" href="/" sx={{ mr: 2 }}>
          <Box sx={{ width: 32, height: 32, bgcolor: 'secondary.main', borderRadius: 1 }} />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        </Typography>

        <div>
          <IconButton color="inherit" onClick={handleMenuOpen} size="large">
            {authenticated ? (
              <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
            ) : (
              <AccountCircle fontSize="large" />
            )}
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {!authenticated && <MenuItem onClick={handleSignIn}>Sign in</MenuItem>}
            {authenticated && <MenuItem onClick={handleSignOut}>Sign out</MenuItem>}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
