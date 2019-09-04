import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './TodoTemplate'
import TodoNewHead from './TodoNewHead'
import TodoList from './TodoList'
import TodoCreate from './TodoCreate'
import moment from 'moment';

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
        const date = new Date();
        const val =  moment(date).format("YYYY-MM-DD")
        this._getMovies(val);
    }
    
    _getMovies = async (val) => {
      const movies = await this._callApi(val);
      this.setState({
         movies
      });
    };
    
    _delete = (e) =>{
        this.setState({
            val : e
        });
    }

    _callApi =(val) => {
      const  { UserNo  }    = this.props
      return fetch(
        "http://localhost:8080/userdrug/"+UserNo+"/"+val
      ).then(Response =>Response.json())
       .then(json => json)
      .catch(err =>console.log(err));
    }

    render() {
        const { UserNo, Caldata } = this.props;
        let Caldatas =""
       if (Caldata==="") {
         const date = new Date();
         const NewDate =  moment(date).format("YYYY-MM-DD")
         Caldatas = NewDate
       }else{
         Caldatas = this.props.Caldata
       }
       console.log(Caldatas)
        
        return (
            <div>
                <GlobalStyle/>
                <TodoTemplate>
                    <TodoNewHead events={this._getMovies}/>
                    <TodoList data={this.state.movies} events ={this._getMovies} time={Caldatas}/>
                    <TodoCreate data={UserNo} events ={this._getMovies} val={Caldatas}/>
                </TodoTemplate>
            
            </div>
        );
    }
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    UserNo: state.counter.No,
    Caldata : state.date.Caldata,
  });
  

  export default connect(
    mapStateToProps,
  )(UserMypage);
  
