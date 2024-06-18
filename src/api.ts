import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Bindings, JsonResponse } from './bindings'

const api = new Hono<{ Bindings: Bindings }>()

api.get('/', (c) => {
  const response: JsonResponse = {
    code: 0,
    message: 'Hello Jiujiu!'
  }
  return c.json(response)
})

api.get('/ping', (c) => {
  const response: JsonResponse = {
    code: 0,
    message: 'Pong!'
  }
  return c.json(response)
})
export default api