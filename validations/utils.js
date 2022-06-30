function eNumero(n1) {
    if (!/[a-z]/i.test(n1)){
        n1 = Number(n1)
        if (Number.isFinite(n1)){
            return true
        }
    } return false
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
        return a + b
    } else {
        throw TypeError
    }
}

const sub = (a, b) => {
    if(eNumero(a) && eNumero(b)){
        return a - b
    } else {
        throw TypeError
    }
}

const mult = (a,b) => {
    if(eNumero(a) && eNumero(b)){
        return a * b
    } else {
        throw TypeError
    }
}

const divi = (a,b) => {
    if(eNumero(a) && eNumero(b)){
        if (b > 0){
            return a / b
        } else throw 'Division by zero'
    } else {
        throw TypeError
    }
}


module.exports = { eNumero, eTexto, sum, sub, mult, divi}