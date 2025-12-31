/**
 * Type Inference
 * 
 * 타입 추론
 */

let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = 'false'; -> Error

const constStringType = 'const string'; // const string - > 처음에 선언한 값만 가능(string literal type)
// const constStringType: 'const string' = 'cosnt string' 도 가능

const constBooleanType = true;

let yuJin = {
  name: '안유진',
  age: 2003
};

const yuJin2 = {
  name: '안유진',
  age: 2003
}
yuJin2.name =  '나이주한~';
console.log(yuJin2); // const로 정의했지만 name이 바뀜

const yuJin3 = {
  name: '안유진' as const, // casting -> 특정 타입으로 지정해주기
  age: 2003 as const,
}
// 값 변경 불가

/**
 * Array
 */

let numbers = [1,2,3,4,5];
let numbersAndString = [1,2,3,'4','5','6']; // union 섹션

// numbers.push(6); -> possible
// numbers.push('6') -> impossible

const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[6]; //typescript는 리스트의 길이를 넘는 인덱스를 가져왔는지 알지를 못함(undefined)

// tuple
const twoNumbers = [1,3] as const; // const twoNumbers: readonly [1, 3]
const first = twoNumbers[0];
// const third = twoNumbers[3]; -> 리스트와 다르게 튜플의 길이를 넘는 인덱스는 에러를 반환

