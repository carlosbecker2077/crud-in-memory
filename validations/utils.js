function eNumero(n1) {
    if (!/[a-z]/i.test(n1) && n1 !== ' '){
        n1 = Number(n1)
        if (Number.isFinite(n1)){
            return true
        }
    } throw new TypeError('Invalid data type')
}
function eTexto(s1) {
    const lista = ['NaN', 'null', 'Infinity', 'undefined']
    
    if (typeof s1 === 'string'){
        if (/[a-z]/i.test(s1) && !/[0-9]/.test(s1) && !lista.includes(s1)){
            return true
        } else return false
    }else return false

}

const sum = (a, b) => {
    if(eNumero(a) && eNumero(b)){
        return Number(a) + Number(b)
    } else {
        return 'Operação inválida'
    }
}

const sub = (a, b) => {
    if(eNumero(a) && eNumero(b)){
        return a - b
    } else {
        return 'Operação inválida'
    }
}

const mult = (a,b) => {
    if(eNumero(a) && eNumero(b)){
        return a * b
    } else {
        return 'Operação inválida'
    }
}

const divi = (a,b) => {
    if(eNumero(a) && eNumero(b)){
        if (b > 0){
            return a / b
        } else return 'Operação inválida: divisão por zero'
    } else {
        return 'Operação inválida'
    }
}


module.exports = { eNumero, eTexto, sum, sub, mult, divi}