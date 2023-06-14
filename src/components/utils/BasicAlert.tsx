// MUI
import {
  Alert,
  Snackbar,
  IconButton,
} from '@mui/material';

// icons
import CloseIcon from '@mui/icons-material/Close';

// hooks
import useRedux from '@/hooks/useRedux';

export default function SimpleSnackbar() {
  /*********** hooks **********/
  const {alert, handleHideAlert} = useRedux()

  /*********** functions **********/
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    handleHideAlert();
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={alert.show}
      autoHideDuration={6000}
      onClose={handleClose}
      action={action}
      anchorOrigin={{ vertical: 'bottom', horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={alert.variant} sx={{ width: '100%' }}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
}