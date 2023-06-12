import {
  Box,
  Drawer,
  Typography,
} from '@mui/material';

// hooks
import useLanguages from '../hooks/useLanguages';
export interface SidebarProps {
  open: boolean;
  handleClose: () => void
}


const Sidebar = (props: SidebarProps) => {
  /*********** Props **********/
  const {open, handleClose} = props

  /*********** hooks **********/
  const { translate } = useLanguages()

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          padding: 4,
          width: "calc(100vw - 10%)",
          maxWidth: "350px"
        }
      }}
    >
      <Box>
        <Typography>
          {translate("shoppingCart.title")}
        </Typography>
      </Box>
    </Drawer>
  );
}

export default Sidebar;