const { sum, eTexto, eNumero } = require("./utils")

describe('math functions', () => {
    it('sums 2 numbers', () =>{
        expect(sum(1,2)).toBe(3)
    })
})

describe('type functions', () => {
    it('test if it is a valid number', () => {
        expect(eNumero('5555')).toBe(true)
    })


    it('test if it is a valid string', () => {
        expect(eTexto('asdf')).toBe(true)
    })

})