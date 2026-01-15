/**
 * Optional and Undefined Property
 */
interface Dog{
  name: string;
  age: number;
  // breed를 모르면 undefined
  breed?: string;
}
const byulE: Dog = {
  name: '별이',
  age: 12,
  breed: '미니핀',
}
const ori: Dog = {
  name: '오리',
  age: 3,
}
// 그럼 optional이랑 undefined으로 선언하는거랑 뭐가 다름?
interface Cat{
  name: string;
  age: number;
  breed: string | undefined;
}

const nabi: Cat = {
  name: '나비',
  age: 7,
  breed: undefined, // optional과 다르게 undefined일때도 명시적으로 입력을 해줘야함
}
