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
    state={};

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
   //submit 함수 
   submitButton(e) {
        e.preventDefault()
        const email = this.state.email;
        const password = this.state.password;
        
        console.log("email" + email);
        console.log("password" + password);
        
        //Login API 호출 
        this.LoginApi()
        .then((response) => {
            //Return 값 확인
            console.log(response.data);
            if (response.data.user_no > 0)
            {
                //dispatch 함수 호출
                const { increment } = this.props;
                increment(response.data);
            }else{
                alert("ID/PW 확인 부탁드립니다.");
                this.setState({
                    email: '',
                    password :'',

                });  
            }
        })    
    }

    /* API 호출 */
    LoginApi(){
        const url = 'http://localhost:8080/dssuser/userCheck/';
        const formData = new FormData();
        formData.append('email', this.state.email)
        formData.append('pwd', this.state.password)
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
                        type="password"
                        /> 
                     
                    </FormGroup>
                    <Button
                        block   
                        onClick={this.submitButton}
                        type="submit">
                        Login
                    </Button>
                </form>
                { Loginstates ?<Redirect to="/"/>  : "" }
            </div>
        );
    }
}

 // props 로 넣어줄 스토어 상태값
 // Loginstates : 로그인 상태 값 (boolean)
 const mapStateToProps = state => ({
    Loginstates: state.counter.Loginstates,
  });
  
  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
    increment: data => dispatch(increment(data)),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserLogin);
