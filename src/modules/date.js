// 액션 타입 정의
const CALDATE = 'date/CALDATE';


// **** 액션 생섬함수 정의
export const caldate = data => ({ 
  type: CALDATE,
  data
});

// **** 초기상태 정의
const initialState = {
    Caldata: '',
};

// **** 리듀서 작성
export default function date (state = initialState, action) {
    switch (action.type) {
      case CALDATE:
        return {
          Caldata : action.data,
        };
      default:
        return state;
    }
}