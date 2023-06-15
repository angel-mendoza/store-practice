import { rest } from 'msw'

export const handlersProfile = [
  rest.get('/api/profile/login', (req, res, ctx) => {

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'angel',
        lastName: 'Maverick',
      })
    )
  }),
]