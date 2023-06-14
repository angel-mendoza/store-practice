import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';

// interface
import { showAlertProps } from '@/interface/BasicAlert';

// Slice
import { showAlert, hideShow } from '@/redux/slice/alertSlice';

//types
export type keyToState = 'alert';

const useRedux = () => {
  /*********** hooks **********/
  const dispatch = useDispatch();

  /*********** functions **********/
  const handleShowAlert = (value: showAlertProps) => {
    dispatch(showAlert(value))
  }

  const handleHideAlert = () => {
    dispatch(hideShow())
  }

  return {
    alert: useSelector((state: RootState) => state.alert),
    handleShowAlert,
    handleHideAlert
  }
}

export default useRedux;
