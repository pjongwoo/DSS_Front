import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './TodoTemplate'
import TodoHead from './TodoHead'
import TodoList from './TodoList'
import TodoCreate from './TodoCreate'

const GlobalStyle = createGlobalStyle`
    body {
        backaground : #e9ecef;
    }
`;

class UserMypage extends Component {
    constructor(props) {
        super(props);
         this.state = {}
      
    }
    componentDidMount() {
        this._getMovies();
    }
    
    _getMovies = async () => {
      const movies = await this._callApi();
      this.setState({
         movies
      });
    };
    
    // MYpage API 호출
    // UserNo : 고객 idx 
    _callApi =() => {
      const  { UserNo , Loginstates }    = this.props
      return fetch(
          "http://localhost:8080/userdrug/"+UserNo
      ).then(Response =>Response.json())
       .then(json => json)
      .catch(err =>console.log(err));
    }

    render() {
        const { UserNo } = this.props;
        return (
            <div>
                <GlobalStyle/>
                <TodoTemplate>
                    <TodoHead/>
                    <TodoList data={this.state.movies} events ={this._getMovies}/>
                    <TodoCreate data={UserNo} events ={this._getMovies}/>
                </TodoTemplate>
            
            </div>
        );
    }
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    Loginstates: state.counter.Loginstates,
    UserNo: state.counter.No,
  });
  

  export default connect(
    mapStateToProps,
  )(UserMypage);
  
