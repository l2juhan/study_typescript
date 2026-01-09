/**
 * Problems with Array in JS
 */
const number = [1,'2', 3, '4']; // -> JS
let strings: string[] = ['1', '2' ,'3'];
// strings.push(1); -> js와 다르게 ts는 불가능

// ts에서 배열에 number, string 둘 다 담고 싶을 때
let stringsOrNumbersArray: (string | number)[] = [1, '2', 3, '4'];

// ts에서 string배열 혹은 number배열을 담고 싶을 때
let stringArrNumberArr: string[] | number [] = [1,2,3];
stringArrNumberArr = ['1', '2', '3'];

// javascript는 tuple이 아닌 이상 배열의 길이를 신경쓰지 않는다
let num1 = stringArrNumberArr[999]; // -> undefined