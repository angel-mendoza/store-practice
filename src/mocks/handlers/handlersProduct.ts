import { rest } from 'msw'

import { responsesProduct } from '../responses/responsesProduct';

export const handlersProduct = [
  rest.get('/api/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...responsesProduct.allProducts
      })
    )
  }),
]