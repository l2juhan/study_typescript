/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다!
 * JS에서 casting은 존재하지 않는다!
 */

const codefactory = 'code factory';
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string; // string 타입이 아닌데도 string 타입으로 가정하게 됨

console.log(typeof (sampleNumber as string)); // number

let number = 5;
console.log((number as any).toUpperCase()); //number 인데도 불구하고 any로 캐스팅하므로 기능을 잃게 됨

// 그러므로 as를 쓸때 상속상에서 더 구체화한 값으로 캐스팅할때 주로 사용
