const express = require('express')

const OngController = require('./controllers/OngController')

const IncidentController = require('./controllers/IncidentController')

const ProfileController = require('./controllers/ProfileController')

const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/*
rota padrão
recurso (após a "/") - determinada funcionalidade que queremos acessar no site 
*/ 

/**
 * npm install nodemon -D =: implicar em tornar o nodemon uma dependência de desenvolvimento, isto é, uma 
 * uma dependência utilizada enquanto se está codando.
 */

/*
*MÉTODOS HTTP:
*
*GET: buscar/listar uma informação do back-end (retorno de request) (SELECT)
*POST : criar uma informação no back-end. Exemplo: criar usuário (INSERT)
*PUT: alterar uma informação no back-end (UPDATE)
*DELETE: deletar uma informação no back-end (DELETE)
*************  CRUD  *******************
*
*/

/**
 * Tipos de parâmetro:
 * 
 * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * exemplo: app.get('/users?name=Diego'
 * 
 * Route Params: parâmtros utilizados para identificar recursos
 * exemplo: app.get('/users'/1 => trará informação somente do id 1
 * 
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/** Conceito request e response
 * Request: guarda todos os dados que foram requisitados pelo usário
 * Response: responsável por retornar uma resposta ao usuário em formato .json
 *  
 */

 // listagem de ongs
routes.get('/ongs', OngController.index)
// cadastro de uma ong
routes.post('/ongs', OngController.create);

//listagem dos incidentes
routes.get('/incidents', IncidentController.index)
// cadastro de um caso
routes.post('/incidents', IncidentController.create)
// deletar caso
routes.delete('/incidents/:id', IncidentController.delete)

// Acessar os casos de uma determinada ONG
routes.get('/profile', ProfileController.index)

// Rota para início de sessaõ (login)
routes.post('/sessions', SessionController.create )

// exportar variável do arquivo
module.exports = routes