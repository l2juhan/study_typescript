/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로 
 * 논리적으로 유추 할 수 있게 되는걸 의미함
 */

// let numberOrString: number | string = 'Code Factory';
// numberOrString;

// const decimal = 12.3456;
// console.log(decimal.toFixed(2));  -> 12.34

// numberOrString.toFixed(); -> Narrowing을 string으로 했기 때문에 number내장함수 사용 x

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing -> 특정 값을 할당해서 내로잉
let numbOrString: number | string = 'leejuhan';

numbOrString.toString();

// (2) typeof narrowing
numbOrString = Math.random() > 0.5 ? 1123 : 'leejuhan';

if(typeof numbOrString === 'string'){
  numbOrString;
}else{ // number
  numbOrString;
}

// (3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['IU', 'IVE'];

if(nullOrString){ // null
  nullOrString;
}else{ // string[]
  nullOrString;
}

// (4) Equality Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ? 1234 : 'leejuhan';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? 'kim' : true;

if(numbOrString2 === stringOrBool2){ // 둘 다 string type + TypeScript의 타입 시스템 관점에서 추론하는 것이므로 실제로는 if문이 true가 되는 경우 x
  numbOrString2;
  stringOrBool2;
}else{ // 나머지 경우
  numbOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
  1234 : Math.random() > 0.5 ? 'lee' : null;

if(typeof numberOrStringOrNull === 'number'){
  numberOrStringOrNull; // -> number
}else{
  numberOrStringOrNull // -> string or null
} 

// (5) in operator narrowing
interface Human{
  name: string;
  age: number;
}

interface Dog{
  name: string;
  type: string;
}
let human: Human = {
  name: 'lee',
  age: 25,
}

let dog: Dog = {
  name: 'dog',
  type: 'Yorkshire Terrier',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ?
  human : dog;

if('type' in humanOrDog){
  humanOrDog; // -> Dog type
}else{
  humanOrDog; // -> Human type
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ?
  new Date() : 'lee';

if(dateOrString instanceof Date){
  dateOrString;
}else{
  dateOrString;
}

// (7) Discriminated Union Narrowing
interface Animal{
  type: 'dog' | 'human';
  // 강아지일때
  breed?: string;
  // 인간일때
  height?: number;
}

let animal: Animal = Math.random() > 0.5 ?
  {
    type: 'human',
    height: 177,
  } : {
    type: 'dog',
    breed: 'Yorkshire Terrier',
  };

if(animal.type === 'human'){
  animal.height; // -> number or undefined
}else{
  animal.breed; // -> string or undefined
}

interface Human2{
  type: 'human';
  height: number;
}
interface Dog2{
  type: 'dog';
  breed: string;
}
type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: Human2 | Dog2 = Math.random() > 0.5 ?
  {
    type: 'human',
    height: 177,
  } : {
    type: 'dog',
    breed: 'Yorkshire Terrier',
  };

if(humanOrDog2.type === 'human'){
  humanOrDog2; // -> Human2
}else{
  humanOrDog2; // -> Dog2
}

// (8) Exhuastiveness Checking
switch(humanOrDog2.type){
  case 'human':
    humanOrDog2; // -> Human2
    break;
  case 'dog':
    humanOrDog2; // -> Dog2
    break;
  default:
    humanOrDog2; // -> never

    const _check: never = humanOrDog2; // -> if) 새로운 인터페이스를 추가를 하면 오류가 뜨므로 새로운 타입을 switch문에 추가해야하는 것을 확인을 할 수 있음
    break;
}