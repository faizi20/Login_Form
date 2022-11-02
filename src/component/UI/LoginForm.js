import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({ onSubmit }) {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [formIsValid, setFormIsValid] = useState(true);
    const onEmailHandler = (event) => {
        setEnteredEmail(event.target.value)
        setFormIsValid(
            enteredEmail.includes('@')
        );
    }

    const onPasswordHandler = (event) => {
        setEnteredPassword(event.target.value)
        setFormIsValid(
            enteredEmail.includes('')
        );
    }
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email" placeholder="Enter email" value={enteredEmail} onChange={onEmailHandler} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" placeholder="Password" value={enteredPassword} onChange={onPasswordHandler} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!formIsValid}>
                Login
            </Button>
        </Form>
    )
}

export default LoginForm
