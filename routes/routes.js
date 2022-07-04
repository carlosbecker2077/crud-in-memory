const express = require('express')
const { eTexto, eNumero, sum, sub, mult, divi } = require("../validations/utils")

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

router.get("/sum", (req, res) => {
    const { a, b } = req.body
    const soma = sum(a, b)

    return res.json(soma)
})

router.get("/sub", (req, res) => {
    const { a, b } = req.body
    const subt = sub(a, b)

    return res.json(subt)
})

router.post("/mult", (req, res) => {
    try {
        const { a, b } = req.body
        const multi = mult(a, b)

        return res.status(200).json(multi)

    } catch (error) {
        return res.status(500).json({errorMessage: error.message})

    }

})

router.get("/div", (req, res) => {
    const { a, b } = req.body
    const div = divi(a, b)

    return res.json(div)
})

router.get("/math", (req, res) => {
    const { op, a, b } = req.body

    switch (op) {
        case '+': return res.json(sum(a, b))
        case '-': return res.json(sub(a, b))
        case '*': return res.json(mult(a, b))
        case '/': return res.json(divi(a, b))
    }
})

module.exports = router;