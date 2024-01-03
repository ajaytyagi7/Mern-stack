import React, { useState } from 'react'
import{useFormik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
 name:Yup.string().required('Name is Required ').min(4,'Name is too short'),
  email: Yup.string().email('Invalid email').required(' Email is Required'),
  password: Yup.string().required('password id Required' ).min(8,'Password is too short')
  .matches(/[a-z][A-z]\d/,'Password must include uppercase and Lowercase letter,Number'),
 confirm: Yup.string().oneOf([Yup.ref('password')],null, 'Confirm Passwords must match ').required('Confirm Password is required')

});


const Signup = () => {
  
  const [passwordHidden, setPasswordHidden] = useState(true);

    const signupform= useFormik({
      initialValues:{
        name:'',
        email:'',
        password:'',
        confirm:'',
      },
      onSubmit:  (values) =>{console.log(values);},
      validationSchema:SignupSchema
    });



  return(
    <div className=''>
        <div className='container d-flex justify-content-center '>
          <div className="card w-50 bg-body-secondary p-4 ">
            <form  onSubmit={signupform.handleSubmit}>
            <h1 className='text-center'>Sign UP</h1>
            <label htmlFor="name">Enter Name</label>
            <span className='ms-4 fs-6 text-danger'>{signupform.touched.name &&  signupform.errors.name}</span>
            <input type="Name" className="form-control" id="name" onChange={signupform.handleChange} value={signupform.values.name} />
           
            <br />
            <label htmlFor="email">Enter Email</label>
            <span className='ms-4 fs-6 text-danger'>{signupform.touched.email   && signupform.errors.email}</span>
            <br />
           <input type={passwordHidden ? 'password': 'text'} className="form-control" id="email" onChange={signupform.handleChange} value={signupform.values.email} />
            <br />
            
            <label htmlFor="password">Enter password</label>
            <span className='ms-4 fs-6 text-danger'>{  signupform.touched.password && signupform.errors.password}</span>
            <input type={passwordHidden ? 'password': 'text'} className="form-control" id="password" onChange={signupform.handleChange} value={signupform.values.password} />
            <br />
            <label htmlFor="password">Confirm password</label>
            <span className='ms-4 fs-6 text-danger'>{  signupform.touched.confirm  &&   signupform.errors.confirm}</span>
            <input type={passwordHidden ? 'password': 'text'}className="form-control" id="confirm" onChange={signupform.handleChange} value={signupform.values.confirm} />
            <button onClick={() =>{setPasswordHidden(!passwordHidden)}}>{passwordHidden ?'Show':'Hide'  }</button>
            <button className=" btn btn-danger w-100 my-3 ">Submit</button>
            
            <a>Forget Password</a>
            <br />
            <a className=' flex justify-content-center text-decoration-none'>Sign up</a>
            </form>
          </div>
          
        </div>
     </div>  
  )
}

export default Signup;