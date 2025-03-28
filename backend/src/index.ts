import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600,
}));


app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app