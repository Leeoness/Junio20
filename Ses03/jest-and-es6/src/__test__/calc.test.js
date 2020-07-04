const { suma } = require('../calc')
//const { sum } = require('../calc')
import { suma } from '../calc'

test('3 + 6 should be 9', function() {
  expect(suma(3, 6)).toBe(9)
})

test('3 + 6 should not be 6', function() {
  expect(suma(3, 6)).not.toBe(9)
})