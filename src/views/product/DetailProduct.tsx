import { useParams } from 'react-router-dom';

import ProductDetail from '@/components/Product/ProductDetail';

// hooks
import useFetch from '@/hooks/useFetch';

const DetailProduct = () => {
  /*********** hooks **********/
  const { id } = useParams();

  /*********** fetch data **********/
  const {data, isFetching} = useFetch({
    url: `/products/${id}`,
    resultsKey: 'product'
  })

  return (
    <ProductDetail loading={isFetching} product={data} />
  );
};

export default DetailProduct;
