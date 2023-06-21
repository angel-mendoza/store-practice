import { useEffect, useState } from 'react';

// MUI
import { Grid } from '@mui/material';

import ProductCard from '@/components/Product/ProductCard';
import ProductFilters from '@/components/Product/ProductFilters';
import ProductLoading from '@/components/Product/ProductLoading';

// interface
import { Product } from '@/interface/Products';

// helpers
import { randomArray } from '@/helpers/array';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

interface ProductListProps {
  products: Product[]
  loading: boolean
}

const randomArrayToLoading = randomArray();

const ProductList = (props: ProductListProps) => {
  /*********** state **********/
  const [localProducts, setLocalProducts] = useState<Product[]>([]);
  const [localLoading, setLocalLoading] = useState<boolean>(true);
  const [localCategory, setLocalCategory] = useState<string>('all');

  /*********** Props **********/
  const {loading, products} = props;

  /*********** functions **********/
  const handleSelectedCategory = (value: string) => {
    let filteredProducts;
    if (value !== "all") {
      filteredProducts = filter(products, {category: value})
    } else {
      filteredProducts = products
    }
    setLocalProducts(filteredProducts)
    setLocalCategory(value)
  };

  const handleFindProduct = (value: string) => {
    if (value !== "") {
      let filteredProducts: Product[] = [];
      products.forEach((product) => {
        if (includes(product.title.toLowerCase(), value.toLowerCase())) {
          filteredProducts.push(product)
        }
      })

      setLocalProducts(filteredProducts)
    } else {
      handleSelectedCategory(localCategory)
    }
  };

  /*********** Lifecycle **********/
  useEffect(() => {
    setLocalProducts(products)
    setLocalLoading(false)
  }, [products]);

  return (
    <Grid container marginTop={1} spacing={2}>
      <Grid item xs={12}>
        <ProductFilters disableSearch={loading} onSelectCategory={handleSelectedCategory} onFind={handleFindProduct} />
      </Grid>
      {
        loading || localLoading
          ? (
            <>
              {randomArrayToLoading.map(() => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={window.crypto.randomUUID()}
                >
                  <ProductLoading />
                </Grid>
              ))}
            </>
          )
          : (
            <>
              {localProducts.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={product.id}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </>
          )
      }
    </Grid>
  )
}

export default ProductList;