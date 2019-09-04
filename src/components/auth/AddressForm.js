import React , { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import { post } from 'axios';
import "../../css/AddressForm.css";

export default function AddressForm() {
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [PasswordCheck,setPasswordCheck] = useState('');
    const [Name,setName] = useState('');
    const [Gender,setGender] = useState('');
    const [Job,setJob] = useState('');
    const [open, setopen] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
      setPasswordCheck(e.target.value);
  };


    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeGender = (e) => {
        setGender(e.target.value);
    };

    const onChangeJob = (e) => {
        setJob(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
           if(Password !== PasswordCheck){
              alert("비밀번호 체크 확인 부탁드립니다.");
              return false;
         }
         setopen(true);
         const url = 'http://localhost:8080/dssuser/';
         const formData = new FormData();
         formData.append('Email', Email)
         formData.append('Password', Password)
         formData.append('Name', Name)
         formData.append('Gender', Gender)
         formData.append('Job', Job)
       
         const config = {
             headers: {
                 'Content-Type': 'application/json',
             }
         }
         alert("회원가입 완료 되었습니다."); 
         return post(url, formData, config)
 
    };


  return (
    <React.Fragment>  
     { open ?<Redirect to="/"/>  : "" }     
    <Form onSubmit={onSubmit} style={{padding:'4rem'}}>
    <Typography variant="h5" style={{marginBottom:'1rem', fontWeight:'bold'}}>
       회원가입
      </Typography>
      <div className="join_title"> 
        <div> 
          <strong style={{fontSize:'1.3rem'}}> DSS </strong> <span> 회원가입을</span> 환영합니다.
        </div>
        <p>회원가입은 무료입니다. 다양한 정보와 서비스를 이용하세요. </p>
      </div>
      <Grid container spacing={3}>
   
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email"
            onChange={onChangeEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Password"
            name="Password"
            label="Password"
            fullWidth
            type="password"
            autoComplete="Password"
            onChange={onChangePassword}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="PasswordCheck"
            name="PasswordCheck"
            label="PasswordCheck"
            fullWidth
            type="password"
            autoComplete="PasswordCheck"
            onChange={onChangePasswordCheck}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="Name"
            onChange={onChangeName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="Gender"
            name="Gender" 
            label="Gender" 
            fullWidth
            onChange={onChangeGender}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Job"
            name="Job"
            label="Job"
            fullWidth
            autoComplete="Job"
            onChange={onChangeJob}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <Button variant="primary" type="submit"  style={{position: 'relative', marginTop:'2%' }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
    </React.Fragment>  
  );
}