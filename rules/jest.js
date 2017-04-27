module.exports = {
  plugins: ['jest'],
  globals: {
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    jest: true,
    jasmine: true,
    describe: true,
    expect: true,
    it: true,
    xit: true,
    xdescribe: true,
  },
  rules: {
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    // 'jest/valid-expect': 2, // Next release
  },
}
