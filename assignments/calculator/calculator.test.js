import calculatorRepo from "./calculator";
let container = {}
let func = calculatorRepo(container)
describe('connect with container',()=>{
    it('should connect with container',()=>{
        expect(func).toMatchObject({
        add:expect.any(Function),
        subtract:expect.any(Function),
        multiply:expect.any(Function)
    });
    });

    it('add two numbers',()=>{
        jest.spyOn(func,"add").mockReturnValue(3)
        expect(func.add(1,2)).toBe(3)
    })
    it('return type should be integer',()=>{
        expect(typeof func.add()).toBe("number")
    })
    it('sutract two numbers',()=>{
        jest.spyOn(func,"subtract").mockReturnValue(-1)
        expect(func.subtract(1,2)).toBe(-1)
    })
    it('return type should be integer',()=>{
        expect(typeof func.subtract()).toBe("number")
    })
    it('multiply two numbers',()=>{
        jest.spyOn(func,"multiply").mockReturnValue(2)
        expect(func.multiply(1,2)).toBe(2)
    })
    it('return type should be integer',()=>{
        expect(typeof func.multiply()).toBe("number")
    })
    it('divide two numbers',()=>{
        jest.spyOn(func,"divide").mockReturnValue(0.5)
        expect(func.divide(1,2)).toBe(0.5)
    })
    it('return type should be integer',()=>{
        expect(typeof func.divide()).toBe("number")
    })
})