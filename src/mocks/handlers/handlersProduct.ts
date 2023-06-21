import { rest } from 'msw'

import { responsesProduct } from '../responses/responsesProduct';

export const handlersProduct = [
  // listo all products
  rest.get('/api/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        ...responsesProduct.allProducts
      })
    )
  }),
  // list all categories of products
  rest.get('/api/products/categories', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...responsesProduct.allCatgories
      })
    )
  }),
]