import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import "./passwordReset.style.css";




export const PasswordResetForm = () => {
const [email, setEmail] = useState("")

const handleOnChange = e =>{
	const { value} = e.target
	setEmail(value)
}
const handleOnSubmit = e =>{
	e.preventDefault()
    console.log(email)
}

    return (
        <div className="password-reset-form">
<Card className="p-4">
				<Form onSubmit={handleOnSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
						 name="email"
						 type="email" 
						 onChange = {handleOnChange}
						 placeholder="Enter email"
						 value ={email}
						 required
						 />
					</Form.Group>
                    
					

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

				<a href="/" className="text-right">Login?</a>


			</Card>

            
        </div>
    )
}
