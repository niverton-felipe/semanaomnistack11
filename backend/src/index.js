const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

/**
 * Solicita ao express que transforme requisição feita em JSON em algo entendível para o JavaScript
*/
// cors => funcionalidade de segurança
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen('3333')