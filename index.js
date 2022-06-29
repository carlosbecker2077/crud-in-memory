//importa o express
const UserRouter = require('./routes/routesUser')
const express = require('express')
const router = require('./routes/routes')

//iniciar o projeto
const server = express()

//Para o express reconhecer informações json
server.use(express.json())
server.use(router)
server.use(UserRouter)

//pra aplicação rodar precisamos disponibilizar uma porta
server.listen(3000, ()=>{
    console.log("Server is running in port 3000")
})