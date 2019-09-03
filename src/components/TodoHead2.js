import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment';
import Clock from 'react-live-clock'
import Typed from 'react-typed';

const TodoHeadBlock = styled.div`
    margin: 0 auto;
    padding-top :48px;
    padding-left :32px;
    padding-right: 32px;
    padding-bottom :24px;
    border-bottom :1px solid #e9ecef;

    h1 {
        margin : 0;
        font-size : 32px;
        color :#343a40;
        text-align: center;
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

class TodoHead2 extends Component {
    constructor(props) {
        super(props);
         this.state = {
            date: new Date(),
         }
      
    }
  
    onChange = (date) => {
        const val =  moment(date).format("YYYY-MM-DD")
        alert(val);     
        
      }
    
    render() {
        return (
            <TodoHeadBlock>
                 <h1>  <Typed
                    strings={['Today']}
                    typeSpeed={40}
                />   <br></br> <Clock format={'YYYY년 MM 월 DD 일   '}  /> </h1>
                    <Calendar 
                        onChange={this.onChange}
                        value={this.state.date}
                     />
            </TodoHeadBlock>
        );
    }
}

export default TodoHead2;