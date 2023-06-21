// components
import ProductList from '@/components/Product/ProductList';

// hooks
import useFetch from '@/hooks/useFetch';

const HomePage = () => {
  const {data, isFetching} = useFetch({
    url: '/products',
    resultsKey: 'products'
  })

  return (
    <div>
      <ProductList
        products={data}
        loading={isFetching}
      />
    </div>
  );
}

export default HomePage;