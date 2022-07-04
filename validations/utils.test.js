const { eTexto, eNumero, sum, sub, mult, divi, calcula } = require("./utils")
require('jest')

describe('type functions', () => {
    it('should not be able to accept a letter', () => {
        const t = () => {
            eNumero('5555b')
        }
        expect(t).toThrow(TypeError)
        expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to accept a empty string', () => {
        const t = () => {
            eNumero(' ')
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to accept a symbol', () => {
        const t = () => {
            eNumero('.')
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
        
    })

    it('should not be able to accept undefined type', () => {
        const t = () => {
            eNumero(undefined)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to accept undefined string', () => {
        const t = () => {
            eNumero('undefined')
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to accept a NaN type', () => {
        const t = () => {
            eNumero(NaN)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should be able to accept a string made only of numbers', () => {
        expect(eNumero('3454545656567878787654543')).toBe(true)
    })

    it('should be able to accept a number', () => {
        expect(eNumero(2)).toBe(true)
          
    })

    it('should be able to accept a long number', () => {
        expect(eNumero(100000000000000000000)).toBe(true) //max 20 zeroes
          
    })

    it('should be able to accept a floating number string', () => {
        expect(eNumero('34.5')).toBe(true)
          
    })

    it('should be able to accept a floating number', () => {
        expect(eNumero(34.5)).toBe(true)
          
    })

    it('should not be able to accept string with a number', () => {
        const t = () => {
            eTexto('abcde 5555')
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
        
    })

    it('should not be able to accept symbols only', () => {
        const t = () => {
            eTexto('!@#$%¨&*()')
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
        
    })

    it('should not be able to accept null, undefined, NaN and Infinity strings and types', () => {
        const t = () => {
            eTexto('null')
            eTexto('undefined')
            eTexto('NaN')
            eTexto('Infinity')
            eTexto(null)
            eTexto(undefined)
            eTexto(NaN)
            eTexto(Infinity)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
        
    })

    it("should be able to accept capital letters", () => {
        expect(eTexto('JohnBergman')).toBe(true)       
    })
    
    it("should be able to accept symbols with some text", () => {
        expect(eTexto('meu nome, é: John Bergman.!@#$%¨&*()_+')).toBe(true)
        expect(eTexto('s#')).toBe(true)
        expect(eTexto('#s')).toBe(true)
        
    })

})
describe('math functions', () => {
    it('should not be able to sum a string', () =>{
        const t = () => {
            sum('a', 2)
            sum('#', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to sum a space', () =>{
        const t = () => {
            sum(' ', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to sum a nan, null ...', () =>{
        const t = () => {
            sum('null')
            sum('undefined')
            sum('NaN')
            sum('Infinity')
            sum(null)
            sum(undefined)
            sum(NaN)
            sum(Infinity)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })
    
    it('should be able to sum a floating number string', () => {
        expect(sum('34.5', 2)).toBe(36.5)
          
    })

    it('should be able to sum a floating number', () => {
        expect(sum('34.5', 2)).toBe(36.5)    
    })

    it('should not be able to sub a string', () =>{
        const t = () => {
            sub('a', 2)
            sub('#', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to sub a space', () =>{
        const t = () => {
            sub(' ', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to sub a nan, null ...', () =>{
        const t = () => {
            sub('null')
            sub('undefined')
            sub('NaN')
            sub('Infinity')
            sub(null)
            sub(undefined)
            sub(NaN)
            sub(Infinity)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })
    
    it('should be able to sub a floating number string', () => {
        expect(sub('34.5', 2)).toBe(32.5)
          
    })

    it('should be able to sub a floating number', () => {
        expect(sub(34.5, 2)).toBe(32.5)
          
    })

    it('should not be able to mult a string', () =>{
        const t = () => {
            mult('a', 2)
            mult('#', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to mult a space', () =>{
        const t = () => {
            mult(' ', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to mult a nan, null ...', () =>{
        const t = () => {
            mult('null')
            mult('undefined')
            mult('NaN')
            mult('Infinity')
            mult(null)
            mult(undefined)
            mult(NaN)
            mult(Infinity)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })
    
    it('should be able to mult a floating number string', () => {
        expect(mult('34.5', 2)).toBe(69)
          
    })

    it('should be able to mult a floating number', () => {
        expect(mult(34.5, 2)).toBe(69)
          
    })

    it('should not be able to divi a string', () =>{
        const t = () => {
            divi('a', 2)
            divi('#', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to divi a space', () =>{
        const t = () => {
            divi(' ', 2)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })

    it('should not be able to divi a nan, null ...', () =>{
        const t = () => {
            divi('null')
            divi('undefined')
            divi('NaN')
            divi('Infinity')
            divi(null)
            divi(undefined)
            divi(NaN)
            divi(Infinity)
          };
          expect(t).toThrow(TypeError)
          expect(t).toThrow("Invalid data type.")
    })
    
    it('should be able to divi a floating number string', () => {
        expect(divi('34.5', 2)).toBe(17.25)
          
    })

    it('should be able to divi a floating number', () => {
        expect(divi(34.5, 2)).toBe(17.25)
          
    })

    it('should not be able to divide by zero', () =>{
        const t = () => {
            divi(10, 0)
          };
          expect(t).toThrow(Error)
          expect(t).toThrow("Invalid operation: division by zero.")
    })

    it('should not be able to do an invalid operation', () =>{
        const t = () => {
            calcula('sqrt', 20, 200)
            calcula('', 20, 200)
            calcula(' ', 20, 200)
          };
          expect(t).toThrow(Error)
          expect(t).toThrow("Invalid operation.")
    })

    it('should be able to calculate a sum', () => {
        expect(calcula('sum', 34.5, 2)).toBe(36.5)
          
    })

    it('should be able to calculate a sub', () => {
        expect(calcula('sub', 34.5, 2)).toBe(32.5)
          
    })

    it('should be able to calculate a mult', () => {
        expect(calcula('mult', 34.5, 2)).toBe(69)
          
    })

    it('should be able to calculate a divi', () => {
        expect(calcula('divi', 34.5, 2)).toBe(17.25)
          
    })   
})
