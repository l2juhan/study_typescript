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

let number: any = 5;
console.log(isNumberRetBool(number)); // false로 나옴 (any type)
console.log(isNumber(number)); // true로 나옴 (number type)

interface Doge{
  name: string;
  age: number;
}
interface Cat{
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

const isDoge = (animal: DogeOrCat): animal is Doge => {
  return (animal as Doge).age !== undefined;
}
const doge: DogeOrCat = Math.random() > 0.5 ? {
  name: 'doge',
  age: 32,
} : {
  name: 'cat',
  breed: 'korean',
}

if(isDoge(doge)){
  doge;
}else{
  doge;
}