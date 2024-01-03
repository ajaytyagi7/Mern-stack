import React from 'react'
import{useFormik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
 
  email: Yup.string().email('Invalid email').required(' Email is Required'),
  password: Yup.string().required('password id Required' ).min(8,'Password is too short'),

});
const Login = () => {

  const signupform= useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    onSubmit:  (values) =>{console.log(values);},
    validationSchema:LoginSchema
  });
  return (
    <div className=''>
        <div className='container d-flex justify-content-center '>
          <div className="card w-25 bg-body-secondary p-4 ">
            <form  onSubmit={signupform.handleSubmit}>
            <h1 className='text-center'>Login</h1>
            <label htmlFor="email">Enter Email</label>
            <span className='ms-4 fs-6 text-danger'>{signupform.errors.email}</span>
            <input type="Email" className="form-control" id="email" onChange={signupform.handleChange} value={signupform.values.email} />
            <br />
            <label htmlFor="password">Enter password</label>
            <span className='ms-4 fs-6 text-danger'>{signupform.errors.password}</span>
            <input type="password" className="form-control" id="password" onChange={signupform.handleChange} value={signupform.values.password} />
            <br />
            <button className=" btn btn-danger w-100 my-3 ">Submit</button>
            
            <a>Forget Password</a>
            <br />
            <a className='flex justify-content-center text-decoration-none'>Sign up</a>
            </form>
          </div>
          <div className='mx-2'>
            <img src="https://img.freepik.com/free-photo/top-view-female-hands-work-computer-blue-background_169016-17992.jpg" alt="" />
          </div>
          
        </div>
     </div>  
  )
}

export default Login