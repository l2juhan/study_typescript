/**
 * Extension
 */
interface IName{
  name: string;
}

interface IIdol extends IName{
  age: number;
}

const idol: IIdol = {
  name: 'leejuhan',
  age: 25, 
}

type TName = {
  name: string;
}
type TIdol = TName & {
  age: number;
}

const idol2: TIdol = {
  name: 'leejiho',
  age: 24,
}

interface IIdol2 extends TName{
  age: number;
}

const idol3: IIdol2 = {
  name: 'juhan',
  age: 25,
}

type TIdol2 = IName & {
  age: number;
}

const idol4: TIdol2 = {
  name: 'lee',
  age: 15,
}

/**
 * extending multiple
 * 타입에서 사용하는 extending은 여러개를 상속받을 수 있음
 */

type DogName = {
  name: string;
} 
type DogAge = {
  age: number;
}
type DogBreed = {
  breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: 'lee',
  age: 32,
  breed: 'Poodl'
}

interface CatName{
  name: string;
}
interface CatAge{
  age: number;
}
interface Cat extends CatName, CatAge{
  breed: string;
}

const cat: Cat = {
  name: 'dock',
  age: 7,
  breed: '코리안 길냥이',
}

/**
 * Overriding
 */
type THeight = {
  height: number;
}
type TRectangle = THeight & {
  height: string;
  width: number;
}

// const rectangle: TRectangle = {
//   height: , -> height의 타입에 인터섹션이 생겼으므로 never 타입이 됨
//   width: 100,
// }

type TWidth = {
  width: number | string;
}

type TRectangle2 = TWidth & {
  width: number;
  height: number;
}

const rectangle: TRectangle2 = {
  height: 100,
  width: 200,
}

interface IHeight{
  height: number;
}
interface IRectangle extends IHeight{
  height: number; /// number가 아닌 타입은 불가능
  width: number;
}

interface IWidth{
  width: number | string;
}
interface IRectangle extends IWidth{
  width: number; // -> string도 가능
  heigth: number;
}