import { suma, diff, mult } from '../calc'
import sumTestCases from './calc.sum.testcases.json'
import diffTestCases from './calc.diff.testcases.json'

/*test('3 + 6 should be 9', function() {
  expect(suma(3, 6)).toBe(9)
})

test('3 + 6 should not be 6', function() {
  expect(suma(3, 6)).not.toBe(6)
})

test('3 * 6 should not be 16', () => {
  expect(mult(3, 6)).not.toBe(16)
})

test('6 - 2 should be 4', function() {
  expect(diff(6, 2)).toBe(4)
})*/

//pruebas de suma
for(let i = 0; i < sumTestCases.length; i++){
  // console.log(SumTestCases[1]);
  //test('3 + 6 should be 9', () => {
    //expect(suma(sumTestCases[i].number1, sumTestCases[i].number2)).toBe(sumTestCases[i].expect)
  //})

  //otra forma de hacer lo anterior
  test(`${sumTestCases[i].number1} + ${sumTestCases[1].number2} should be ${sumTestCases[i].expect}`, () => {
    expect(suma(sumTestCases[i].number1, sumTestCases[i].number2)).toBe(sumTestCases[i].expect)
  })
}
//Pruebas de resta
for(let i = 0; i < diffTestCases.length; i++){
  test(`${diffTestCases[i].number1} - ${diffTestCases[1].number2} should be ${diffTestCases[i].expect}`, () => {
    expect(diff(diffTestCases[i].number1, diffTestCases[i].number2)).toBe(diffTestCases[i].expect)
  })
}