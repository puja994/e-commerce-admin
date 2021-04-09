import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import "./loginForm.style.css";

const initialState = {
	email: "",
	password: ""
}


export const LoginForm = () => {
const [login, setLogin] = useState(initialState)

const handleOnChange = e =>{
	const {name, value} = e.target
	

	setLogin({
		...login,
		[name]: value,
	})
}
const handleOnSubmit = e =>{
	e.preventDefault()
}

    return (
        <div className="login-form">
<Card className="p-4">
				<Form onSubmit={handleOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
						 name="email"
						 type="email" 
						 onChange = {handleOnChange}
						 placeholder="Enter email"
						 value ={login.email}
						 required
						 />
					</Form.Group>
                    <Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control 
						name="password"
						type="password"
						value={login.password} 
						onChange = {handleOnChange}
						placeholder="Password" 
						required
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

				<a href="/reset-password" className="text-right">Forgot Password?</a>


			</Card>

            
        </div>
    )
}
