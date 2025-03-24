import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*',
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow cookies and auth headers
  })
)

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app