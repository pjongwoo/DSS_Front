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
    
      _callApi =() => {
        const  { pro_basic , Loginstates }    = this.props
        console.log(pro_basic);
        return fetch(
            //"http://211.239.124.237:19613/drug/findName/%EB%B9%84%ED%83%80%EB%AF%BC"
            "http://localhost:8080/userdrug/"+pro_basic
          )
          .then(Response =>Response.json())
          .then(json => json)
          .catch(err =>console.log(err));
    }

    

    render() {
         const { pro_basic } = this.props;
        return (
            <div>
                <GlobalStyle/>
                <TodoTemplate>
                    <TodoHead/>
                    <TodoList data={this.state.movies} events ={this._getMovies}/>
                    <TodoCreate data={pro_basic} events ={this._getMovies}/>
                </TodoTemplate>
            
            </div>
        );
    }
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    Loginstates: state.counter.Loginstates,
    pro_basic: state.counter.pro_basic,
  });
  

  export default connect(
    mapStateToProps,
  )(UserMypage);
  
