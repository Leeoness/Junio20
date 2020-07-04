import { suma } from '../calc'

test('3 + 6 should be 9', function() {
  expect(suma(3, 6)).toBe(9)
})

test('3 + 6 should not be 6', function() {
  expect(suma(3, 6)).not.toBe(6)
})

test('3 + 6 should not be 7', function() {
  expect(suma(3, 6)).not.toBe(7)
})

test('2 + 6 should be 8', function() {
  expect(suma(2, 6)).toBe(8)
})