/**
 * Overloading
 */

// 1) 파라미터를 하나 받는 함수
function stringOrStrings(members: string): string;

// 2) 파라미터를 세개 받는 함수
function stringOrStrings(member1: string, member2: string, member3: string): string;

function stringOrStrings(member1: string, member2?: string, member3?: string){
  if(member2 && member3) return `아이브: ${member1}, ${member2}, ${member3}`;
  else return `아이브: ${member1}`;
}

