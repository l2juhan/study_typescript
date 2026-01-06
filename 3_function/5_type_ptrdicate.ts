/**
 * Type Predicate
 * 어떤 변수 혹은 반환값이 특정 타입인지 구분하는 함수
 */
const isNumber = (input: any): input is number => {
  return typeof input === 'number';
}

function isNumberRetBool(input: any): boolean{
  return typeof input === 'number';
}

console.log(isNumber(10));

let number: any = 5;