/**
 * Loopholes of Any
 */

// any의 문제점 1.runtime error
let number: number = 10;
(number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
  return x * y;
}
let args1: any = 'leejuhan'; let args2: any = true;
// multiplyTwo('leejuhan',args); 
multiplyTwo(args1,args2); // any 타입으로 정의하면 에러를 잡지 못함

// any의 문제점 2.typescript 자동완성
let iu: any = { name: 'lee', age: 30};
iu.name; // 자동완성이 안됨

// any의 문제점 3.any type 의 function -> 의도하지 않은 동작(리팩토링할때 위험함)
const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x);
}
const callbackF = (x: number, y: number) => {
  return x * y;
}
console.log(callbackRunner(5,4,callbackF));