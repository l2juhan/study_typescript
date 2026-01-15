/**
 * Nested Object
 */

type NestedPerson = {
  identity:{
    name: string;
    age: number;
  },
  nationality: string;
}

const leejuhan: NestedPerson = {
  identity:{
    name: 'leejuhan',
    age: 25,
  },
  nationality: 'korean',
}

type TPerson = {
  identity: TPersonIdentity; // type안에 type 넣기
  nationality: string;
}
type TPersonIdentity = {
  name: string;
  age: number;
}

const iu: TPerson = {
  identity: {
    name: 'iu',
    age: 32
  },
  nationality: 'korean',
}

// Nested type 에서 name 객체를 빼먹었을때
/**
 * Property 'name' is missing in type '{ age: number; }' but required in type '{ name: string; age: number; }'.
 */

// Nested type이 아닌 새로운 type을 정의해서 type를 정의했을때 -> 에러메세지가 훨씬 직관적이다
/**
 * Property 'name' is missing in type '{ age: number; }' but required in type 'TPersonIdentity'.
 */

// Interface도 동일함
interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}
interface IPersonIdentity{
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity:{
    name: 'lee',
    age: 25,
  },
  nationality: 'korean',
}
