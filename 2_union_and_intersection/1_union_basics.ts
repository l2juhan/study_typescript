/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나
 */

type StringOfBooleanType = string | boolean;

let stringOfBooleanType: StringOfBooleanType = "아이브";
stringOfBooleanType = true;

// stringOfBooleanType = undefined; -> Error

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; -> ERROR

/**
 * List의 Union
 */

// string 으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let stringListorBooleanList: StringListOrBooleanList = [
  '아이유', '김고은', '박소담',
]

stringListorBooleanList = [
  true, false, false, true,
]

// stringListorBooleanList = [   -> type을 섞는건 불가능
//   true, '아이유', false, '박소담' 
// ]

type StrOrNumberList = (string | number) [];

let strOrNumberList = [
  1,2,3,
  '아이유', '레드벨벳',
]

/**
 * Interface로 사용하는 union
 */

interface Animal{
  name: string;
  age: number;
}

interface Human{
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = { // -> Human type으로 ts는 해석 -> address가 있기 때문에
  name: '최지호',
  age: 32,
  address: '대한민국',
}

animalOrHuman = { // -> address가 없으므로 ts는 Aniaml type으로 해석
  name: '오리',
  age: 9,
}

// console.log(animalOrHuman.address); -> 'Animal' 타입에 address는 없으므로 Error 

let animalOrHuman2: { // -> animalOrHuman 과 동일하게 작동 but interface를 지정해서 하는게 에러를 파악하기 편함
  name: string;
  age: number;
} | {
  name: string;
  age: number;
  address: string;
} = {
  name: '최지호',
  age: 33,
  address: '대한민국',
};

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가

type Person = {
  name: string;
  age: number;
}

type Cat = {
  breed: string;
  country: string;
}

type PersonOrCat = Person | Cat;

const personOrCat1: PersonOrCat = {
  name: 'leejuhan',
  age: 25,
}

const personOrCat2: PersonOrCat = {
  breed: 'Yorkshire Terrier',
  country: 'UK',
}

const personOrCat3: PersonOrCat = { // -> Union은 합집합의 개념이므로 다 포함이 될 수 있다! 
  name: 'leejuhan',
  age: 25,
  breed: 'Yorkshire Terrier',
  country: 'UK',
}

const personOrCat4: PersonOrCat = { // Union은 type의 일부분만 정의해도 된다 
  name: 'leejuhan',
  breed: 'Yorkshire Terrier',
  country: 'UK',
}

// const personOrCat5: PersonOrCat = { -> But 최소 한개 이상의 type은 다 정의가 되어야한다, 아니면 Error
//   name: 'leejuhan',
//   country: 'UK',
// }