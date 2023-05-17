const express = require('express')
// template engine
const nunjucks = require('nunjucks')

const server = express()

// configurar o express para arquivos estáticos
server.use(express.static('public'))

// configurar template engine
server.set('view engine', 'njk')

nunjucks.configure('views', {
   express: server
})

server.get('/', (request, response) => {
   return response.render('about')
})

server.get('/portfolio', (request, response) => {
   return response.render('portfolio')
})

server.listen(5000, () => {
   console.log('server is running!')
})