import { subtraction } from '../src/app'

describe('subtraction method', () => {
  it('1 - 1 return 0', () => {
    expect(subtraction(1, 1)).toBe(0)
  })
  it('1 - 2 return 0', () => {
    expect(subtraction(1, 2)).toBe(1)
  })
})
