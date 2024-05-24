import React, { useState } from 'react';
// import { Formik } from 'formik';
import './App.css'
import { useFormik } from 'formik';
// import SignupSchema from "./schemas/index";

import Yup from './Yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',  
    confirmPassword: '',
}
const Formike = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        },
    });
    // console.log(errors)
    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <h2 >validation form  </h2>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name='firstName' placeholder='Enter your first name ' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                {errors.firstName && touched.firstName ? (<p className='error'>{errors.firstName}</p>) : null}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name='lastName' placeholder='Enter your last name' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                {errors.lastName && touched.lastName ? (<p className='error'>{errors.lastName}</p>) : null}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name='email' placeholder='Enter your Email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email ? (<p className='error'>{errors.email}</p>) : null}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name='password' placeholder='Enter your password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password ? (<p className='error'>{errors.password}</p>) : null}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name='confirmPassword' placeholder=' Enter your confirm Password' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                {errors.confirmPassword && touched.confirmPassword ? (<p className='error'>{errors.confirmPassword}</p>) : null}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};
export default Formike