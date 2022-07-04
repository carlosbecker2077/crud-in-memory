const { eTexto, eNumero, sum, sub, mult, divi } = require("./utils")
require('jest')

describe('type functions', () => {
    it('test if it is a number only', () => {
        expect(eNumero('5555')).toBe(true)
    })

    it('should not be able to accept a empty string', () => {
        const t = () => {
            eNumero(' ')
          };
          expect(t).toThrow(TypeError);
          expect(t).toThrow("Invalid data type");
    })

    it('test if it is a text only', () => {
        expect(eTexto('s')).toBe(true)
    })

    it('should not be able to accept a number in a string', () => {
        expect(eTexto('dhjuiwhaiusd5')).toBe(false)
    })

    it('should not be able to accept a number', () => {
        expect(eTexto(6)).toBe(false)
    })

    it('should not be able to accept a symbol', () => {
        expect(eTexto('$')).toBe(false)
    })

    it('should not be able to accept a space', () => {
        expect(eTexto(' ')).toBe(false)
    })

    it('should not be able to accept empty', () => {
        expect(eTexto('')).toBe(false)
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
