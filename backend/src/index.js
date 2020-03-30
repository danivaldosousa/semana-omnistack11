const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * Rota / Recursos
 */
/**
 * Métodos HTPP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no Back-end
 * PUT: Altera uma Informação no Back-End
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * Query Params: São parametros  nomeados enviados na rota após o ponto de interrogação (Filtros , paginação)
 * Route Params: São parametros utilizados para identificar recursos
 * Request Body: Corpo da Requisição, utilizado para criar e/ou alterar
 *  */


app.listen(3333, ()=>{
    console.log("Servidor Rodando em http://localhost:3333")
});