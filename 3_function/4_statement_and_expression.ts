/**
 * Statement and Expression
 */

// statement (문장)
function addTwoNumbers(x: number, y: number){
  return x*y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x*y;
}

/**
 * Statement
 */
function add(x: number, y: number): number{
  return x + y;
}

function subtract(x: number, y: number): number{
  return x - y;
}

/**
 * Expression
 * 
 * statement보다 깔끔하고 편함
 */
type CacultationType = (x: number, y: number) => number;

const add2: CacultationType = (x,y) => {
  return x + y;
}

const subtract2: CacultationType = (x,y) => {
  return x -y;
}