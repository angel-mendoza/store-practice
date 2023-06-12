import { ReactNode, useState  } from 'react';

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

export interface AppContainerProps {
  children: ReactNode
}

const AppContainer = (props: AppContainerProps) => {
  // /*********** Props **********/
  const {children} = props;

  /*********** State **********/
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  /*********** Theme **********/
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  /*********** Functions **********/
  const handleToggleSidebarOnClick = () => setOpenSidebar(!openSidebar);

  const handleCloseSidebar = () => setOpenSidebar(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar handleToggleSidebar={handleToggleSidebarOnClick} />
      <Sidebar open={openSidebar} handleClose={handleCloseSidebar} />
      <Container>
        { children }
      </Container>
    </ThemeProvider>
  );
}

export default AppContainer;