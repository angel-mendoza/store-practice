import {
  Box,
  Drawer,
  Typography,
} from '@mui/material';

export interface SidebarProps {
  open: boolean;
  handleClose: () => void
}


const Sidebar = (props: SidebarProps) => {
  /*********** Props **********/
  const {open, handleClose} = props

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
          Tu carrito de compras
        </Typography>
      </Box>
    </Drawer>
  );
}

export default Sidebar;