import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './TodoTemplate'
import TodoHead from './TodoHead'
import TodoList from './TodoList'
import TodoCreate from './TodoCreate'
import { ImageFilterTiltShift } from 'material-ui/svg-icons';
import Calendar from 'react-calendar';

const GlobalStyle = createGlobalStyle`
    body {
        backaground : #e9ecef;
    }
`;

class UserMypage extends Component {
    constructor(props) {
        super(props);
         this.state = {
            date: new Date(),
         }
      
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
    
    _delete = (e) =>{
        this.setState({
            val : e
        });
    }


    // MYpage API 호출
    // UserNo : 고객 idx 
    _callApi =() => {
      const  { UserNo  }    = this.props
      return fetch(
          "http://localhost:8080/userdrug/"+UserNo
      ).then(Response =>Response.json())
       .then(json => json)
      .catch(err =>console.log(err));
    }

    render() {
        const { UserNo } = this.props;
        console.log("state" + this.state.val)
        return (
            <div>
                <GlobalStyle/>
                <TodoTemplate>
                    <TodoHead/>
                    <TodoList data={this.state.movies} events ={this._getMovies} del={this._delete}/>
                    <TodoCreate data={UserNo} events ={this._getMovies} val={this.state.val}/>
                    <Calendar
          onChange={this.onChange}
       
          value={this.state.date}
        />
                </TodoTemplate>
            
            </div>
        );
    }
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    UserNo: state.counter.No,
  });
  

  export default connect(
    mapStateToProps,
  )(UserMypage);
  
