import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Clock from 'react-live-clock'
const TodoHeadBlock = styled.div`
    padding-top :48px;
    padding-left :32px;
    padding-right: 32px;
    padding-bottom :24px;
    border-bottom :1px solid #e9ecef;

    h1 {
        margin : 0;
        font-size : 32px;
        color :#343a40;
        text-align: left;
    }
    .day {
        margin-top: 10px;
        margin-bottom: 10px;
        color :#868e96;
        font-size: 21px;
    }
    .tasks-left{
        color : #20c997;
        font-size :18px;
        margin-top : 10px;
        font-weight : bold;
    }
`;


function TodoHead ({name}) {
    
    return(
        <TodoHeadBlock>
            <h1> <Clock format={'YYYY년 MM 월 DD 일 dddd  '} ticking={true} /> </h1>
            <div className="day"> {name} 고객님 Drug List Page </div> 
            <div className="tasks-left"> 오늘할일 </div>
        </TodoHeadBlock>
    )
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    Loginstates: state.counter.Loginstates,
    name: state.counter.Name,
  });
  

export default connect(
  mapStateToProps,
  )(TodoHead);
  


