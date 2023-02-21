import express, { request, response } from 'express'
import { user } from '@models/telefone'
import { config as dotenv } from 'dotenv'

const porta = process.env.porta

const app = express()

const conta = 8

app.get( '/', ( request, response ) => {
  return response.json( { message: 'Hello World' } )
} )
console.log( porta )
console.log( 2 * conta )
app.listen( porta )
