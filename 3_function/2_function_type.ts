/**
 * Function Type
 */

const runner = () =>{
  return ['안유진', '장원영', '레이'].map(
    (x) => `아이브 멤버 ${x}`,
  );
}

type Mapper = (x:string) => string;

const runner2 = (callback: Mapper) => {
  return ['안유진', '장원영', '레이'].map(
    callback,
  );
}
type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
}

/**
 * Interface로 함수 타입 선언하기
 */

interface IMutilplyTwoNumvers{
  (x: number, y:number): number;
}

const multiplyTwoNumbers3: IMutilplyTwoNumvers = (x, y) => {
  return x * y;
}