import {
  Application,
  Router,
} from 'https://deno.land/x/denotrain@v0.4.4/mod.ts'
import { quotes } from './api/quotes.ts'

const app = new Application({ hostname: '192.168.1.65' })

const router = new Router()

app.use('/api', router)

app.get('/', ctx => {
  return 'Hello, world!'
})

router.get('/quotes', ctx => {
  return {
    quotes: quotes,
  }
})

await app.run()
