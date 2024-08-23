import ceasarcipher from "./ceasarcipher";

jest.mock('./ceasarcipher',()=>jest.fn());

beforeEach(()=>{
    ceasarcipher.mockClear();
})

describe('check input and output of ceasarcipher',()=>{
    it('checking input and output',()=>{
        ceasarcipher.mockImplementation(()=>'abc');
        expect(ceasarcipher('xyz',3)).toBe('abc')
        ceasarcipher.mockImplementation(()=>'KhOOr?');
        expect(ceasarcipher('HeLLo?',3)).toBe('KhOOr?')
    })
    it('checking typeof return value',()=>{
        expect(typeof ceasarcipher()).toBe("string")
    })
})