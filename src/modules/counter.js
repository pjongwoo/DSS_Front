// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const TIME ='counter/TIME'
// **** 액션 생섬함수 정의

// export const changeColor = color => ({ type: CHANGE_COLOR, color });

export const increment = data => ({ 
  type: INCREMENT ,
  data
});

// export const increment = createAction(INCREMENT, data => data );
export const decrement = () => ({ type: DECREMENT });

export const time = data => ({ 
  type: TIME ,
  data
});

// **** 초기상태 정의
const initialState = {
    No : '',
    Name : '',
    Loginstates: false,
    Time:'',

  };

// **** 리듀서 작성
export default function counter(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {
          No : action.data.user_no,
          Name : action.data.name,
          Loginstates : true,
        };
      case DECREMENT:
        return {
          ...state,
          Loginstates : false,
        };
      case TIME:
          return {
            ...state,
            Time : action.data,
          };
      default:
        return state;
    }
}