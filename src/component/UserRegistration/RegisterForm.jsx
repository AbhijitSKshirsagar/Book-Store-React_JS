import React, { useState, useEffect } from 'react'
import './RegisterForm.css'
import { Link, useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import User from '../Service/UserService'


const RegistrationForm = (props) => {
    let history = useHistory();
    let startValue = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: "",
    }

    const [formValue, setForm] = useState(startValue)
    const onReset = () => {
        setForm({
            ...startValue, id: formValue.id, isUpdate: formValue.isUpdate
        });
    };

    const login = async (event) => {
        event.preventDefault();

        let object = {
            id: formValue.employeeId,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            email: formValue.email,
            address: formValue.address,
            password: formValue.password,
        };

        if (formValue.firstName === "" && formValue.firstName === "" && formValue.email === "" &&
            formValue.address === "" && formValue.password === "") {
            alert("Enter input all Fileds")
        }
        else {
            User.addUser(object).then((response) => {
                console.log(response);
                alert("Data Added!!", response)
            })
            alert("Regitsraion Success....")
            history.push("/login");
        }
    }
    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    return (
        <div>
            <div className="form-content">
                <form className="form" action="#" onSubmit={login}>
                    <div className="form-head">
                        User Registration or Login Form
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">First Name</label>
                        <input type="text" className="input" id="firstName" name="firstName" value={formValue.firstName}
                            placeholder="Your name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Last Name</label>
                        <input type="text" className="input" id="lastName" name="lastName" value=
                            {formValue.lastName}
                            placeholder="Your name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Email Id</label>
                        <input type="email" className="input" id="email" name="email" value={formValue.
                            email}
                            placeholder="Your email.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Address</label>
                        <input type="text" className="input" id="address" name="address" value={formValue.address}
                            placeholder="your address.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Password</label>
                        <input type="password" className="input" id="password" name="password" value={formValue.password}
                            placeholder="password.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <br></br>
                    <div className="submit-reset">
                        <div className="buttonParent">
                            {/* <Link to="/"> <Button variant="contained" size="large" className="resetButton */}
                         {/* button cancleButton">Cancel</Button></Link> */}
                        <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Submit</Button>
                            <Link to="/login"> <Button variant="contained" size="large" type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Login</Button></Link>
                            
                            {/* <Button variant="contained" size="large" type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Reset</Button> */}
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default RegistrationForm;