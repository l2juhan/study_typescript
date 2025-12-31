/**
 * Types
 */

let helloText: string = 'Hello';
// helloText = true; -> Error!
/**
  * JS에 존재하는 7개의 타입 
  */
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */

let anyVar: any; // any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
anyVar = 100;
anyVar = '이주한';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean:boolean = anyVar;
console.log(testNumber); // -> true

let unknownType: unknown; // unknown - 알 수 없는 타입
unknownType = 100;
unknownType = '이주한';
unknownType = true;

// let testNumber2: number = unknownType; -> Error
// let testString2: string = unknownType; -> Error
// let testBoolean2:boolean = unknownType; -> Error
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환하지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType2: never = undefined;
// let neverType: never = 'test';

/**
 * 리스트 타입
 */

const koreanGirlGroup: string[] = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList: boolean[] = [true, false, false, true];
