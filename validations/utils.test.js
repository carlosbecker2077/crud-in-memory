const { eTexto, eNumero, sum, sub, mult, divi } = require("./utils")

describe('type functions', () => {
    it('test if it is a number only', () => {
        expect(eNumero('5555')).toBe(true)
    })

    it('test if it is a text only', () => {
        expect(eTexto('asdf')).toBe(true)
    })

})
describe('math functions', () => {
    it('sums 2 numbers', () =>{
        expect(sum(1,2)).toBe(3)
    })

    it('subtracts 2 numbers', () => {
        expect(sub(5,3)).toBe(2)
    })

    it('multiplies 2 numbers', () => {
        expect(mult(5,3)).toBe(15)
    })

    it('divide 2 numbers', () => {
        expect(divi(6,2)).toBe(3)
    })
})
