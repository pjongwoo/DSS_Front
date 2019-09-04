import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment';
import Clock from 'react-live-clock'
import Typed from 'react-typed';
import { connect } from 'react-redux';
import { caldate } from '../modules/date';

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

class TodoNewHead extends Component {
    constructor(props) {
        super(props);
         this.state = {
            date: new Date(),
         }
      
    }
  
    onChange = (date) => {
        const val =  moment(date).format("YYYY-MM-DD")
         
        const { caldate } = this.props;
        const events  = this.props.events
        caldate(val);
        events(val);
    }
    
    render() {
        return (
            <TodoHeadBlock>
                    <h1> 
                       <Typed 
                        strings={['Today']}
                        typeSpeed={300}
                        />   
                        <br></br> 
                       <Clock format={'YYYY년 MM 월 DD 일    '} />  
                    </h1>
                    <Calendar 
                        onChange={this.onChange}
                        value={this.state.date}
                     />
            </TodoHeadBlock>
        );
    }
}


const mapStateToProps = state => ({
    Loginstates: state.counter.Loginstates,
});
  
 // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    caldate: (data) => dispatch(caldate(data)),
});
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoNewHead);
