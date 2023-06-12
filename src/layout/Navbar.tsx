import {useState} from 'react';
// MUI
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  FormGroup,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem
} from '@mui/material';

//icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SettingsIcon from '@mui/icons-material/Settings';

// interface
import { Mode } from './AppContainer';

export interface NavbarProps {
  themeMode: Mode;
  handleToggleDarkMode: () => void
  handleToggleSidebar: () => void
}


const Navbar = (props: NavbarProps) => {
  /*********** Props **********/
  const {themeMode,handleToggleDarkMode, handleToggleSidebar} = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <SettingsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem>
                  <Box>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={themeMode === "dark" ? true : false}
                            onChange={handleToggleDarkMode}
                          />
                        }
                        label="Dark mode"
                      />
                    </FormGroup>
                  </Box>
                </MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;