const {sum} = require('../calc')

TextDecoderStream('3 + 6 should be 9', function(){
  expect(sum(3, 6)).toBe(6)
} )