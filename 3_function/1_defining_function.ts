/**
 * Defining Function
 */

function printName(name: string){
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string){
  return `${person1}과 ${person2}은/는 사귀고 있습니다`;
}

/**
 * Optional Parameter
 */

function multiplyOrReturn(x: number, y?: number){
  if(y) return x*y;
  else return x;
}

function multiplyOrReturn2(x: number, y: number = 20){
  return x*y;
}

/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args: string[]){
  return args.map((x)=> `너무 좋아 ${x}`);
}

/**
 * Return Type
 */

function addTwoNumbers(x: number, y: number){
  return x + y; // return number;
}

function randomNumber(){
  return Math.random() > 0.5 ? 10 : '랜덤'; // return number | '랜덤'
}

function subtractTwoNumbers(x: number, y: number): number{
  // return 'number가 아닌 값은 반환이 안돼ㅜㅜ';
  return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */

function dpNotReturn(): void{
  console.log('저는 반환을 하지 않습니다');
  return;
}

function throwError(): never{
  while(true){
    //절대 반환이 안될때
  }
}

function throwError2(): never{
  throw Error();
}
