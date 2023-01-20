const Testcase = require('./Testcase');
test('If User enter birth day system will display age of patient 2023 - 1998 to equal 25', () => {
   expect(Testcase(2023, 1998)).toBe(25);
});