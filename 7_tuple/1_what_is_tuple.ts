/**
 * Tuple
 */
let iveTopMembers : string[] = ['안유진', '장원영', '레이'];

let numberAndStringTuple: [number, string] = [
  23, 'lee',
]

numberAndStringTuple.push('juhan'); // js는 tuple이 없기 때문에 가능

let unmodifiableTuple: readonly [number, string] = [
  25, 'lee'
]
// unmodifiableTuple.push('juhan'); -> 불가능

/**
 * Tuple 유추하기
 */

let actress = ['a', 'b', 'c'];
let actressTuple = ['a', 'b', 'c'] as const;
const actressTupleConst = ['a', 'b', 'c'] as const;

let stringArray: string[] = [
  ...actressTuple,
  ...actressTupleConst,
  //...[1,2,3] 은 불가능
]

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = [
  'lee',
  25,
]

/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능
 */
const tuple1: [string, string] = ['lee', 'juhan'];
const tuple2: [number, number] = [1,2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;
let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = [
  '장원영',
  '안유진',
]
let stringArr: string[] = ive; // 가능
// let ive2: [string, string] = stringArr; 불가능

/**
 * Multi Dimensional Tuple
 */
const tuple2D: [string, number][] = [
  ['lee', 25],
  ['ju', 24],
  ['han', 23],
]