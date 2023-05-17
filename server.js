const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

// configurar o express para arquivos estáticos
server.use(express.static('public'))

// configurar template engine
server.set('view engine', 'njk')

nunjucks.configure('views', {
   express: server,
   autoescape: false,
   noCache: true
})

server.get('/', (request, response) => {
   const about = {
      avatar_url: 'https://avatars.githubusercontent.com/u/97414034?v=4',
      name: 'Yaba Ernesto',
      role: 'Aluno - Rocketseat',
      description: 'Programador fullstack, focado em aprender tech novas e foco em novos recursos. Aluno da Rocketseat!',
      links: [
         { name: 'GitHub', url: 'https://github.com/yabaernesto' },
         { name: 'Twitter', url: 'https://twitter.com/yaba_ernesto' },
         { name: 'Linkedin', url: 'https://www.linkedin.com/in/yaba-ernesto-a52845271/' }
      ]
   }

   return response.render('about', { about })
})

server.get('/portfolio', (request, response) => {
   return response.render('portfolio', { items: videos })
})

server.get('/video', (request, response) => {
   const id = request.query.id 

   const video = videos.find(video => {
      return video.id == id
   })

   if (!video) {
      return response.send('Video not found!')
   }

   return response.render('video', { item: video })
})

server.listen(5000, () => {
   console.log('server is running!')
})