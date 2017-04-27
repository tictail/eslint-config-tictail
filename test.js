function foo(bar) {
  // eslint-disable-next-line no-console
  console.log(bar)
}
System.import('./foo')
Promise.resolve('foo')
foo()
jasmine('isGlobal')
describe('foo', () => {
  it('hould fail', () => {
    expect('foo').toBe(true)
  })
  document
  window
  // eslint-disable-next-line jest/no-disabled-tests
  xdescribe('foo', () => {})
  // eslint-disable-next-line jest/no-disabled-tests
  xit('foo', () => {})
})

// eslint-disable-next-line no-unused-vars
const obj = {
  ...{ bar: 'foo' },
}
