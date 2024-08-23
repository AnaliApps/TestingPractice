import {analyzeArray} from "./analyzeArray";
let container = {}
let func = analyzeArray(container)
describe('function should return an object',()=>{
    it('returns an object',()=>{
        let expectObj={
            average:expect.any(Number),
            min:expect.any(Number),
            max:expect.any(Number),
            length:expect.any(Number)
        }
        expect(func).toMatchObject(expectObj);
    })
})