const knex = require('knex')
// (../ => voltar duas pastas)
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

module.exports = connection