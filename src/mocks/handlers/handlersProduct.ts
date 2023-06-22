import { rest } from 'msw'

import { responsesProduct } from '../responses/responsesProduct';

// helpers
import find from 'lodash/find';
import parseInt from 'lodash/parseInt';

export const handlersProduct = [
  // list all categories of products
  rest.get('/api/products/categories', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...responsesProduct.allCatgories
      })
    )
  }),
  // list all products
  rest.get('/api/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        ...responsesProduct.allProducts
      })
    )
  }),
  // detail one product
  rest.get('/api/products/:id', (req, res, ctx) => {
    const idProduct = req.params.id;
    const dataFilter = find(responsesProduct.allProducts.products, {id: parseInt(idProduct as string)});
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        product: dataFilter
      })
    )
  }),
]