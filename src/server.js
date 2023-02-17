import express, { request, response } from "express"
import { user } from '@models/user'

const app = express()

const conta = 8;


app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(3000)
