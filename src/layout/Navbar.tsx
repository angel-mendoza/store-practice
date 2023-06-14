import {useState} from 'react';
// MUI
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  FormGroup,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

//icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SettingsIcon from '@mui/icons-material/Settings';

//utils
import {LANGUAGES} from '@/constants';

// interface
import { Mode } from './AppContainer';

// hooks
import useLanguages from '@/hooks/useLanguages';

export interface NavbarProps {
  themeMode: Mode;
  onToggleDarkMode: () => void
  onToggleSidebar: () => void
}

const Navbar = (props: NavbarProps) => {
  /*********** Props **********/
  const {themeMode,onToggleDarkMode, onToggleSidebar} = props;

  /*********** state **********/
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  /*********** hooks **********/
  const {language, handleChangeLanguage} = useLanguages()

  /*********** functions **********/
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: "center",
              width: "100%",
              paddingY:1
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onToggleSidebar}
            >
              <LocalGroceryStoreIcon />
            </IconButton>
            <img
              className='logo-app'
              src={`${process.env.REACT_APP_BASE_URL}/logo-app.svg`}
              alt="logo-app"
            />
            <Box>
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
                <MenuItem onClick={handleClose}>
                  <Box>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={themeMode === "dark" ? true : false}
                            onChange={onToggleDarkMode}
                          />
                        }
                        label="Dark mode"
                      />
                    </FormGroup>
                  </Box>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <FormControl fullWidth>
                    <InputLabel id="languages-label">Languages</InputLabel>
                    <Select
                      labelId="languages-label"
                      id="languages"
                      defaultValue={language}
                      value={language}
                      label="languages"
                      onChange={handleChangeLanguage}
                    >
                      {LANGUAGES.map(lang => (
                        <MenuItem key={lang.code} value={lang.code}>{lang.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;