import { ReactNode, useState, useMemo, useEffect } from 'react';

//MUI
import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';

//components
import Navbar from './Navbar';
import Sidebar from './Sidebar';

// interface
export interface AppContainerProps {
  children: ReactNode
}
export type Mode = 'light' | 'dark';

const initialState = {
  mode: localStorage.getItem("mode") as Mode || 'light',
};

const AppContainer = (props: AppContainerProps) => {
  // /*********** Props **********/
  const {children} = props;

  /*********** State **********/
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>(initialState.mode);



  /*********** Functions **********/
  const handleToggleSidebarOnClick = () => setOpenSidebar(!openSidebar);

  const handleCloseSidebar = () => setOpenSidebar(false);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  /*********** life cycle **********/
  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode]);

  /*********** useMemo **********/
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        themeMode={mode}
        handleToggleDarkMode={toggleColorMode}
        handleToggleSidebar={handleToggleSidebarOnClick}
      />
      <Sidebar open={openSidebar} handleClose={handleCloseSidebar} />
      <Container>
        { children }
      </Container>
    </ThemeProvider>
  );
}

export default AppContainer;