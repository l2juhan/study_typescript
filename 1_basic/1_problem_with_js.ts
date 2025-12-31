function add(num1: number, num2: number){
  return num1 + num2;
}

console.log(add(1,2));
// console.log(add(1,'2'));  Argument of type 'string' is not assignable to parameter of type 'number'.

// ts의 장점
// 1. 컴파일 타임에 에러를 잡아줌.
// 2. 모든 정의들을 정확하게 할 수 있고 사용의도를 강제할 수 있다.