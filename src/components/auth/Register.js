import React , { useState } from 'react';
import { Button, Form } from "react-bootstrap";

const Register = () => {
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [Name,setName] = useState('');
    const [Gender,setGender] = useState('');
    const [Job,setJob] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
       
        // if(password !== passwordCheck){
        //     return setPasswordError(true);
        // }
        
        console.log({
            Email,
            Password,
            Name,
            Gender,
            Job
        });
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
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



    return (
        <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="input" placeholder="Enter email" name="Email" value={Email}  onChange={onChangeEmail} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="Password" value={Password}  onChange={onChangePassword} />
                </Form.Group>
    
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="input" placeholder="Enter Gender" />
                </Form.Group>


                <Form.Group controlId="formBasicJob">
                    <Form.Label>Job</Form.Label>
                    <Form.Control type="input" placeholder="Enter Job" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    );
};

export default Register;
