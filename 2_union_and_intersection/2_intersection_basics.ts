/**
 * Intersection
 * 
 * And 개념
 */

interface Human{
  name: string;
  age: number;
}

interface Contacts{
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: '코드팩토리',
  age: 32,
  phone: '01012341234',
  address: 'seoul',
}

type NumberAndString = number & string; // -> 'never' type
// let numberAndString: NumberAndString = 어떤 값을 넣어도 안됨

