import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'
import App from './App'
const LoginForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [uname, setUniversity] = useState("");
    async function submitData(e) {
        e.preventDefault();
        let result;
        if (name === '' || uname === '' || email === '') {
            alert('fields can not be blank');
        }
        else {
            // let jsonformat = { "name": `${name}`, "email": `${email}`, "universityName": `${uname}` }
            try {
                result = await fetch('http://localhost:8080/create/', {
                    method: 'post',
                    // mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ "id": 0, "name": `${name}`, "email": `${email}`, "universityName": `${uname}` })

                });
                
                // props.onSubmit();
            }
            catch(e){
                console.log(e);
            }
            // console.log(result.body);
            
        }
        // props.addRecord(result.body);

    }
    return (
        <>
            <Form onSubmit={props.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>University</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter University"
                        value={uname}
                        onChange={(e) => setUniversity(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button onClick={(e) => submitData(e)} variant="primary" type="submit" block>
                    submit
        </Button>
            </Form>

        </>
    );
};
export default LoginForm;