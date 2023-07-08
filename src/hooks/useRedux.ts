import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';

// interface
import { showAlertProps } from '@/interface/BasicAlert';
import { Product } from '@/interface/Products';

// Slice
import { showAlert, hideShow } from '@/redux/slice/alertSlice';
import { addCart } from '@/redux/slice/shoppingCartSlice';

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

  const getProductsLocalStore = () => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : []
  };

  const handleAddProductToCart = (value: Product) => {
    const products = getProductsLocalStore();
    products.push(value);
    localStorage.setItem('products', JSON.stringify(products))
    dispatch(addCart(value))
  };

  return {
    alert: useSelector((state: RootState) => state.alert),
    shoppingCart: useSelector((state: RootState) => state.shoppingCart),
    // actions cart
    handleAddProductToCart,
    getProductsLocalStore,
    // actions alerts
    handleShowAlert,
    handleHideAlert
  }
}

export default useRedux;
