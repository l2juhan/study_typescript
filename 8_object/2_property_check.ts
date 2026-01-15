/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
  name: string;
}
type TAge = {
  age: number;
}

//type보다 초과되는 경우
const iu = { // type에 TName or TAge 불가능
  name: 'IU',
  age: 30,
}
//이건 가능
const testName: TName = iu; 
const testAge: TAge = iu;
console.log(testName); // -> { name: 'IU', age: 30 }
