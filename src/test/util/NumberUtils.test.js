const NumberUtils = require('../../util/NumberUtils');

test("2개의 숫자를 받아 두 값의 차이값을 반환한다.", () => {
    expect(NumberUtils.a.minus(3, 4)).toBe(-1);
});

test("숫자를 받아 짝수 판별", () => {
    expect(NumberUtils.a.even(2)).toBe(true);
});



