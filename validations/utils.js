function eNumero(n1) {
    if (!/[a-z]/i.test(n1) && n1 !== ' '){
        n1 = Number(n1)
        if (Number.isFinite(n1)){
            return true
        }
    } throw new TypeError('Invalid data type.')
}
function eTexto(s1) {
    const lista = ['NaN', 'null', 'Infinity', 'undefined']
    
    if (typeof s1 === 'string'){
        if (/[a-z]/i.test(s1) && !/[0-9]/.test(s1) && !lista.includes(s1)){
            return true
        } throw new TypeError('Invalid data type.')          //else return false
    } throw new TypeError('Invalid data type.')              //else return false

}

const sum = (a, b) => {
    if(eNumero(a) && eNumero(b)){
        return Number(a) + Number(b)
    } throw new TypeError('Invalid data type.')
}

const sub = (a, b) => {
    if(eNumero(a) && eNumero(b)){
        return a - b
    } throw new TypeError('Invalid data type.')
}

const mult = (a,b) => {
    if(eNumero(a) && eNumero(b)){
        return a * b
    } throw new TypeError('Invalid data type.')
}

const divi = (a,b) => {
    if(eNumero(a) && eNumero(b)){
        if (b > 0){
            return a / b
        } throw new Error('Invalid operation: division by zero.')
    } throw new TypeError('Invalid data type.')
}

const calcula = (op, a, b) => {
    switch (op) {
        case '+': sum(a, b)
        case '-': sub(a, b)
        case '*': mult(a, b)
        case '/': divi(a, b)
    default: throw new Error('Invalid operation.')
    }
}




module.exports = { eNumero, eTexto, sum, sub, mult, divi, calcula}