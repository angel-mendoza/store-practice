import * as React from 'react';
// MUI
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material';

//icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

// interface
export interface NavbarProps {
  handleToggleSidebar: () => void
}


const Navbar = (props: NavbarProps) => {
  /*********** Props **********/
  const {handleToggleSidebar} = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleToggleSidebar}
          >
            <LocalGroceryStoreIcon />
          </IconButton>
          <Typography className='font-title' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store App
          </Typography>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={true}
                    onChange={() => console.log("true")}
                    aria-label="login switch"
                  />
                }
                label={
                  <Box>
                    <AccountCircle />
                  </Box>
                }
              />
            </FormGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;