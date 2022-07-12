const calculaUsecase = require("../../../usecase/calculaUsecase");
const { calcula } = require("../utils/utils");

function mathController(req, res){
    try{
        const { op, a, b } = req.body
        
        // Joga camada de caso de uso
        calc = calculaUsecase(op, a, b)
        return res.status(200).json(calc)

    } catch (error){
        return res.status(500).json({errorMessage: error.message})
    }
}

module.exports = mathController;