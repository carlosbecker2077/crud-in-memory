const express = require('express')
const { eTexto, eNumero, sum, sub, mult, divi, calcula } = require("../validations/utils")

var router = express.Router();

//const exemplo de crud
const cursos = ["Fullstack", "Linux", "NodeJs"]

// Retornando um curso
router.get("/cursos/:index", (req, res) => {
    const { index } = req.params //destructuring

    return res.json(cursos[index]) //retorno da arrow function
})

// Retornando todos os cursos
router.get("/cursos", (req, res) => {
    return res.json(cursos)
})

// Criando um curso
router.post("/cursos", (req, res) => {
    const { name } = req.body
    cursos.push(name) //só faz o push pra dentro da const/ é possível fazer push em const?

    return res.json(cursos)
})

// Atualizando um curso
router.put("/cursos/:index", (req, res) => {
    const { index } = req.params
    const { name } = req.body

    cursos[index] = name // cursos[0] = "modificado"

    return res.json(cursos)
})

// Deletando um curso
router.delete("/cursos/:index", (req, res) => {
    const { index } = req.params

    cursos.splice(index, 1)
    return res.status(204).json({ message: "O curso foi deletado" })
})


const frutas = ["Maça", "Banana", "Uva"]

// Retornando uma fruta uepa
router.get("/frutas/:index", (req, res) => {
    const { index } = req.params

    return res.json(frutas[index])
})

// Retornando todas as frutas
router.get("/frutas", (req, res) => {
    return res.json(frutas)
})

// Alterando uma fruta
router.put("/frutas/:index", (req, res) => {
    const { index } = req.params
    const { name } = req.body
    //frutas[index] = req.body

    frutas[index] = name

    return res.json(frutas[index])
})

// Adicionando uma nova fruta
router.post("/frutas", (req, res) => {
    const { name } = req.body
    frutas.push(name)

    return res.json(frutas)
})

// Deletando uma fruta
router.delete("/frutas/:index", (req, res) => {
    const { index } = req.params
    frutas.splice(index, 1)

    return res.json({ message: "A fruta foi deletada" })
})

// operações matemáticas
router.post("/math", (req, res) => {
    try{
        const { op, a, b } = req.body
        const calc = calcula(op, a, b)
    
        return res.status(200).json(calc)
    
    } catch (error){
        return res.status(500).json({errorMessage: error.message})
    }
})

module.exports = router;