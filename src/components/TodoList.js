import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y: auto;
    background: #fff;
`;

class TodoList extends Component {
    
    _renderMovies = () => {
        const events = this.props.events
        const time = this.props.time
        const movies = this.props.data.map((api) => {
          return (
            <TodoItem text={api.drug}      /*약 고유 ID */
                      done ={api.flag}
                      idx = {api.idx}
                      events ={events}
                      time={time}
                />
            )
        });
        return movies;
    }
    render() {
        //data : false 값 처리 대기중.
        const  data  = this.props.data
        return (
            <TodoListBlock> 
              {data ? this._renderMovies() : "등록된 리스트가 없습니다."}
          </TodoListBlock>
        );
    }
}

export default TodoList;