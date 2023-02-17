import express, { request, response } from "express"
import {user} from '@models/user'
import { config as dotenv } from 'dotenv'

const porta = process.env.porta

const app = express()

const conta : number =  8;

app.get("/", (request, response) => {
  return response.json({ message: 'Hello World' })
})
console.log(porta)
app.listen(porta)
