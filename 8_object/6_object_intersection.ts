/**
 * Object Intersection
 */
type PersonType = {
  name: string;
  age: number;
}
type CompanyType = {
  company: string;
  companyRegistrationNumber:  string;
}
type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
  name: 'jisoo',
  age: 32,
  company: 'YG',
  companyRegistrationNumber: 'xxxyyyzzz',
}

type PetType = {
  petName: string;
  petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
  // PersonType
  name: 'leejuhan',
  age: 32,

  // CompanyType
  company: '주식회사 코드팩토리',
  companyRegistrationNumber: 'xxxyyyzzz',

  // PetType
  // petName: '오리', -> Union 중 하나만 만족이 되면 그 다음은 있어도 되고 없어도 됨
  petAge: 8,
}