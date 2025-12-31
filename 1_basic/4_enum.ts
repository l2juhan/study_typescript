/**
 * Enum
 */

/**
 * API 요청을한다.
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩상태
 * INITIAL - 초기 상태
 */

// 만약 enum이 아닌 string으로 값을 비교하게 됐을때 string에 오타가 있다면
function runWork(){
  let state = 'INITIAL';
  try{
    state = 'LOADING';
    // 작업을 한다.
    state = 'DONE';
  }catch(e){
    state = 'ERROR';
  }finally{
    return state;
  }
}
console.log(runWork() === 'DONNE'); 

//state를 각각 string으로 정의해서 사용을 한다면
const doneState = 'DONE';
const loadingState = 'LOADGNG';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2(){
  let state = initialState;
  try{
    state = loadingState;
    // 작업을 한다.
    state = doneState;
  }catch(e){
    state = errorState;
  }finally{
    return state;
  }
}
console.log(runWork2() === doneState);

// enum 사용(Default는 0부터 1씩 증가)
enum State {
  DONE = 'DONE', 
  LOADING = 'LOADING',
  INITIAL = 'INITIAL',
  ERROR = 'ERROR',
}

function runWork3(){
  let state = State.INITIAL;
  try{
    state = State.LOADING;
    // 작업을 한다.
    state = State.DONE;
  }catch(e){
    state = State.ERROR;
  }finally{
    return state;
  }
}
console.log(runWork3() === State.DONE);
console.log(runWork3());