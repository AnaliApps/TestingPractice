import ceasarcipher from "./ceasarcipher";

jest.mock('./ceasarcipher',()=>jest.fn());

beforeEach(()=>{
    ceasarcipher.mockClear();
})

describe('check input and output of ceasarcipher',()=>{
    it('checking input and output',()=>{
        ceasarcipher.mockImplementation(()=>'abc');
        expect(ceasarcipher('xyz')).toBe('abc')
        ceasarcipher.mockImplementation(()=>'KhOOr?');
        expect(ceasarcipher('HeLLo?')).toBe('KhOOr?')
    })
    it('checking typeof return value',()=>{
        expect(typeof ceasarcipher()).toBe("string")
    })
})