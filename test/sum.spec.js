import { sum } from '../src/app'

describe('sum method', () => {
  it('1 + 1 return 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
