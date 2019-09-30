const NumberUtils = require('./src/util/NumberUtils');

test('2개의 숫자를 받아 그 합을 반환한다', () => {
   expect(NumberUtils.sum(1, 2)).toBe(3);
   expect(NumberUtils.sum(1, 3)).toBe(4);
   expect(NumberUtils.sum(1, -3)).toBe(-2);
   //expect({age: 1}).toEqual({age: 1});
   const person = {age: 1};
   //expect(person).toBe({age: 1});
   expect(person).toEqual({age: 1});
});
