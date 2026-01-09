/**
 * Spread Operator
 */
const onlyString = ['1', '2', '3','4'];
const onlyNumbers = [1, 2, 3];

const arr1 = [ //- > string[] 타입으로 잘 유추됨
  ...onlyString,
]
const arr2 = [ // -> (string | number)[] 타입으로 잘 유추됨
  ...onlyString,
  ...onlyNumbers,
]