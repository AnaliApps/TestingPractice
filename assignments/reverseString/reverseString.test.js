import reverseString  from "./reverseString";
jest.mock('./reverseString',()=>jest.fn());

beforeEach(()=>{
    reverseString.mockClear();
})
describe('Return a reversed string',()=>{
    it('returns a string',()=>{
        reverseString.mockReturnValue('ilanA')
        expect(typeof reverseString()).toBe('string');
    })

    it('returns a reversedString',()=>{
        reverseString.mockImplementation(()=>'ilanA')
        expect(reverseString('Anali')).toBe('ilanA');
    })
})