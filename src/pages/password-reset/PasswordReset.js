import React from 'react'
import { PasswordResetForm } from '../../components/password-reset-form/PasswordResetForm'
import './passwordReset.style.css'
//import {PasswordResetForm} from '../../components/password-rest-form/PasswordResetForm'





 const PasswordReset = () => {
    return (
        <div className="password-reset-page bg-dark">
           <PasswordResetForm /> 
        
        </div>
    )
}

export default PasswordReset;