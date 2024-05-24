import * as yup from 'yup';

 const SignupSchema = yup.object({
    firstName:yup.string().min(2).max(10).required('please enter your name'),
    lastName:yup.string().min(2).max(10).required('please enter your name'),
    email:yup.string().email().required('please enter your email'),
    password:yup.string().min(6).required('please enter your password'),
    confirmPassword:yup.string().required().oneOf([yup.ref('password'),null,'password must match'])

})
export default SignupSchema