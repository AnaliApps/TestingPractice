import capitalize from './capitalize.js'
jest.mock('./capitalize',()=>jest.fn());
beforeEach(()=>{
    capitalize.mockClear();
})
describe('Return capitalized string',()=>{
    it('expect function to return capitalized string',()=>{
        capitalize.mockReturnValue('Alex')
        expect(capitalize()).toMatch(new RegExp(/^[A-Z][a-z]*$/))
    })
    it('expect function to return a string',()=>{
        capitalize.mockImplementation(()=>"Anali")
        expect(typeof capitalize()).toBe("string")
    })
})