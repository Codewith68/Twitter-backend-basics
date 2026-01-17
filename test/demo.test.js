function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
describe('sum function',()=>{
        
test("add of 6 + 7 gives 13",()=>{
    expect(sum(6,7)).toBe(13);
})
test('add of 6 + 7 not equal to 57',()=>{
        expect(sum(6,7)).not.toBe(57);
})
});

describe('subtract function',()=>{
    test('subtraction of 5-4  gives 1 ',()=>{
    expect(subtract(5,4)).toBe(1);
})
})