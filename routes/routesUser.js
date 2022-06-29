const express = require('express')

var UserRouter = express.Router();

//const exemplo de crud
const users = ["Carlistos do Callback", "Felipe do ubuntinho"]

// Retornando um curso
UserRouter.get("/user", (req, res) => {
    const { name } = req.body
    name.funcaoMaiuscula()
    return res.json(users) //retorno da arrow function
})

module.exports = UserRouter;
