import { ChangeEvent, useState } from "react"
import './SignUpCard.css'
import image from '../Assets/companyImg.jpeg'
import logo from '../Assets/logo.webp'

export default function SignUp(){
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  
    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (newValue.length <= 15) {
          setFirstName(newValue);
          setFirstNameError('');
        } else {
          setFirstNameError('First name should be less than 15 characters.');
        }
      };
      const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (newValue.length <= 15) {
          setLastName(newValue);
          setLastNameError('');
        } 
        else {
          setLastNameError('Last name should be less than 15 characters.');
        }
      };
      const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPassword(newValue);
        if (passwordConfirmation && newValue !== passwordConfirmation) {
          setPasswordConfirmationError('Password confirmation does not match.');
        } else {
          setPasswordConfirmationError('');
        }
      };
      const handlePasswordConfirmationChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPasswordConfirmation(newValue);
        if (newValue !== password) {
          setPasswordConfirmationError('Password confirmation does not match.');
        } else {
          setPasswordConfirmationError('');
        }
      };
    return(
        <div className="card">
            <div className="info">
                <img src={logo} alt="" />
                <h2>Create your account</h2>
                <p>Fill the form below to create an account.</p>
                <form id="myForm" >
                    <div className='userInfo'>
                    <label htmlFor="">First name*</label>
                    <input type="text" value={firstName} onChange={handleFirstNameChange} required />
                    {firstNameError && <p className="error">{firstNameError}</p>}
                    </div>
                    <div className='userInfo'>
                    <label htmlFor="">Last name*</label>
                    <input type="text" value={lastName} onChange={handleLastNameChange} required />
                    {lastNameError && <p className="error">{lastNameError}</p>}
                    </div>
                    <div className='email'>
                    <label htmlFor="">Email*</label>
                    <input type="email" required/>
                    </div>
                    <div className='userInfo'>
                    <label htmlFor="">Password*</label>
                    <input type="password"  value={password} onChange={handlePasswordChange} required/>
                    </div>
                    <div className='userInfo'>
                    <label htmlFor="">Password confirmation*</label>
                    <input type="password"  value={passwordConfirmation} onChange={handlePasswordConfirmationChange} required/>
                    {passwordConfirmationError && <p className="error">{passwordConfirmationError}</p>}
                    </div>
                    <div>
                    <p>We want you to know exactly how our service works and why we need your details. Please confirm that you have read,understood and accept the terms and conditions</p>
                        <div className='confirmation'>
                    <input type="checkbox" className="larger-checkbox" required/>
                    <p>I have read,understood and accept the terms and conditions.</p>
                        </div>
                    <button type='submit'id="submitButton" >Next</button>
                    </div>
                </form>
            </div>
            <img src={image} alt=""/>
        </div>
    )
}