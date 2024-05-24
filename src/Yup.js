import * as yup from 'yup';

 const Yup = yup.object({
    firstName:yup.string().min(2).max(15).required('please enter your firstName'),
    lastName:yup.string().min(2).max(15).required('please enter your lastName'),
    email:yup.string().email().required('please enter your email'),
    password:yup.string().min(6).required('please enter your password'),
    confirmPassword:yup.string().required().oneOf([yup.ref('password'),null,'password must match'])

})
export default Yup
