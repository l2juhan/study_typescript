/**
 * Type vs Interface
 */

interface IObject{
  x: number;
  y:  number;
}
type TObject = {
  x: number;
  y: number;
}
// 실제로 ts를 쓸때는 T,I를 앞에 붙이지 않는것을 권장

// function을 선언할때
interface IFunction {
  (x: number, y: number): number;
}
type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만 
 * Interface 에서는 할 수 없는 것들
 */

// 1. primitive 타입 선언
type Name = string;

// 2. Union 타입 선언
type  UntionType = string | number;

// 3. primitive list 또는 tuple 타입 선언
type TupleType = [number, string];

/**
 * Interface에서는 할 수 있지만
 * Type에서는 할 수 없는 것들
 */

// 1. interface merging
interface IRectangle{
  height: number;
}
interface IRectangle{
  width: number;
}

let rectangle: IRectangle = { // 중첩된 인터페이스는 다 입력해줘야함
  height: 200,
  width: 100,
}

class Review{
  // 프로퍼티 -> 인스턴스에 귀속
  getY = (x: number) => {return x};

  // 메서드 -> 프로토타입에 귀속
  getX(x: number){
    return x;
  }
}
interface GetXnY{
  getX: (x: number) => number;
  getY: (x: number) => number;
}
interface GetXnY{
  getX: (x:number) => number;
  // getY: (y: string) => number; 프로퍼티는 오버로딩이 안되므로 완전히 똑같은 시그니처로 선언해야됨
}

interface GetXnY2{
  getX(x: number): number;
  getY(y: number): number;
}
interface GetXnY2{
  getX(x: number): number;
  getY(y: string): number;
}

const testMethod: GetXnY2 = {
  getX(x){
    return x;
  },
  getY(y){
    return 1;
  }
}