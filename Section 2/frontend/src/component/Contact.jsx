import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({

  name: Yup.string().required('Name is Required'),
  email: Yup.string().email('Invalid email').required(' Email is Required'),
  message: Yup.string().required('message is Required' ),

});

const Contact = () => {
  
  const contactForm=useFormik({
    initialValues:{
      name:'',
      email:'',
      message:'',
    },
    onSubmit:(values) =>{console.log(values)},
    validationSchema:ContactSchema

  })
  return (
    <div className=' container d-flex flex-row '>
      <div className='card w-50 p-4 bg-body-primary mx-3  '>
        <form onSubmit={contactForm.handleSubmit}>
        <h1 className='text-center'>Contact us</h1>
        <p className='text-center b-bold parag'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nobis sed molestiae tempora </p>
        <br />
        
        <label className='name' htmlFor="Name">Enter Your Name</label>
        <input className='bg-bold' type="Name" placeholder='Enter Your Name' name="form-control" id="name" onChange={contactForm.handleChange} value={contactForm.values.name} />
        <br /> 
        <label className='email' htmlFor="Email">Enter Email</label>
        <input type="Email" placeholder='Enter Email' name="form-control" id="email" onChange={contactForm.handleChange} value={contactForm.values.email} />
        <br />
        <label className='message' htmlFor="Message">Enter message</label>
        <textarea id="message" name="form-control" placeholder="Write your message here..."  onChange={contactForm.handleChange} value={contactForm.values.message}></textarea>
        </form>
        <br />
        <button className='btn btn-primary w-50'>Send Message</button>
        <br />
        <a className='text-center bg-bold'>Contact us</a>
      </div>
      <div className=' d-flex w-75  '>
        <img className='  myimg'src="https://images.pexels.com/photos/190168/pexels-photo-190168.jpeg?auto=compress&cs=tinysrgb&w=600"alt=""/>
        
      </div>
    </div>
  )
}

export default Contact