// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// **** 액션 생섬함수 정의

// export const changeColor = color => ({ type: CHANGE_COLOR, color });

export const increment = data => ({ 
  type: INCREMENT ,
  data
});

// export const increment = createAction(INCREMENT, data => data );
export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = {
    No : '',
    Name : '',
    Loginstates: false,

  };

// **** 리듀서 작성
export default function counter(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {
          No : action.data.id,
          Name : action.data.name,
          Loginstates : true,
        };
      case DECREMENT:
        return {
          ...state,
          number: state.number - 1,
        };
      default:
        return state;
    }
}