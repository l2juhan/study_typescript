/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
  // dog type
  {
    name: '별이',
    age: 12,
  } : 
  // cat
  {
    name: '오리',
    breed: '코리안 길냥이',
  }

dogOrCat. name; // string
dogOrCat.age; // number | undefined

// type을 명시해준다면?
interface Dog{
  name: string;
  age: number;
}
interface Cat{
  name: string;
  breed: string;
}
type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
  {
    name: '별이',
    age: 12,
  } : 
  {
    name: '오리',
    breed: '코리안 길냥이',
  }

dogOrCat2.name; // 당연히 됨
// dogOrCat2.age; -> Property 'age' does not exist on type 'DogOrCat'.

// narrowing
if('age' in dogOrCat2){
  dogOrCat2; // -> Dog type
  dogOrCat2.age;
}else{
  dogOrCat2; // -> Cat type
  dogOrCat2.breed;
}