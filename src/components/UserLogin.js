import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { increment } from '../modules/counter';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { post } from 'axios';
import "../css/Login.css";

class UserLogin extends Component {
    state={
      

    };
    constructor(props) {
        super(props);
        this.submitButton = this.submitButton.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        
    }

   //input 함수 
   handleValueChange (e) {
    this.setState({
        [e.target.name]: e.target.value
    }) 
  }

    submitButton(e) {
        e.preventDefault()
        const email = this.state.email;
        const password = this.state.password;

        this.addCustomer()
        .then((response) => {
         
            console.log(response.data.id);
            if (response.data.id > 0)
            {
                const { increment } = this.props;
                increment(response.data.id);
            }else{
                alert("2");
            }
        })    
        // this._getMovies(email,password);
         const cookies = new Cookies();
        //  cookies.set('LoginState', true, { path: '/' });
        //  this.setState({
        //     logger : true
        // });
        
        // console.log(this.state.movies);
        // const { increment } = this.props;
        // increment();
    }
    _getMovies = async (a,b) => {
        const movies = await this._callApi(a,b);
         const { increment } = this.props;
         increment(movies.id);
    };
    _callApi =(a,b) => {
        let email = a;
        let password = b;

        return fetch(
            "http://localhost:8080/user/namefind/"+ email
          )
          .then(Response =>Response.json())
          .then(json => json)
          .catch(err =>console.log(err));
    }


    /* 등록 API 호출 */
    addCustomer(){
    
         const url = 'http://localhost:8080/user/namefind/';
         const formData = new FormData();
            formData.append('name', this.state.email)
            const config = {
                headers: {
                'content-type': 'multipart/form-data'
                }
            }
            
            return post(url, formData, config)
            
    }
    render() {       
        const   Loginstates   = this.props.Loginstates;

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email">
                        <Typography variant="subtitle1" noWrap>Email</Typography>
                        <FormControl
                        autoFocus
                   
                        name="email"
                        value={this.state.email}
                        onChange={this.handleValueChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" >
                        <Typography variant="subtitle1" noWrap>Password</Typography>
                        <FormControl
                        value={this.state.password}
                        onChange={this.handleValueChange}
                        name="password"
                        />
                    </FormGroup>
                    <Button
                        block   
                       
                        onClick={this.submitButton}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
                {Loginstates ?
                    <Redirect to="/"/> 
                    : ""
                    }
                {/* 
                <Button size="large" onClick={this.submitButton} >
                    <Typography variant="subtitle1" noWrap>Login</Typography>
                    </Button>
                    {val ?
                    <Redirect to="/"/> 
                    : ""
                    } */}
            </div>
        );
    }
}

 // props 로 넣어줄 스토어 상태값
 const mapStateToProps = state => ({
    Loginstates: state.counter.Loginstates,
  });
  
  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
    increment: pro_basic => dispatch(increment(pro_basic)),
  });



  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserLogin);
