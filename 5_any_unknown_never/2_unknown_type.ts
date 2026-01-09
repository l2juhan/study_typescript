/**
 * Unknown Type
 */
// Unknown type은 any type과 마찬가지로 어떤 타입도 다 넣을 수 있다
let unknownValue: unknown;

unknownValue = 24;
unknownValue = 'lee';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// 할당에서의 차이(any와 다르게 any와 unknown에만 할당가능)
let anyType: any = unknownValue;
let unknownType: unknown = unknownValue;

// any와 다른 unknown 의 엄격성(알지 못하는 값을 구현할 수 없음)
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

// unknown 버전
const isStringUnknown = (target: unknown): target is string => {
  return typeof target === 'string';
  // target.toUpperCase() - 타입 체크 전엔 아무것도 못함
}

// any 버전
const isStringAny = (target: any): target is string => {
  return typeof target === 'string';
  // target.toUpperCase() - 아무거나 다 됨 (위험)
  // target.foo.bar.baz() - 이런 것도 에러 안남
}

/**
 * Union type
 * 
 *unknown은 any를 제외한 모든 타입을 unknown으로 반환
 */
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;

/**
 * Intersection type
 * 
 * unknown은 무조건 상대의 타입으로 반환
 */
type uAndString = unknown & unknown;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;

/**
 * Operator 사용
 * 
 * unknown 이 사용할 수 있는 operator
 */
let n1: unknown = 10; 
let n2: unknown = 20;
n1 === n2;
n1 !== n2;
n1 == n2;
n1 != n2;