import React, { useState } from 'react'

const Page=() =>{
    const [Like, setLike] = useState(0)
    const [Comment, setComment] = useState(0)
  return (
    <div className='container '>
    <div className='card mycard '>
        <div className='d-flex'>
        <img className='myimg3 mx-2 mt-3' src="https://media.licdn.com/dms/image/D4D03AQFNSkKTI_nqdQ/profile-displayphoto-shrink_100_100/0/1691219028469?e=1707955200&v=beta&t=WrK6NN6svIOGjhL2jJeg5larvkG10RKPw6fgxDwEatA"  alt=""  />
        <a className='mt-4'><h5 className='text-dark'>Mern Full Stack Developer</h5></a>
        </div>
         <p className='mx-5'>Ajay Kumar Tyagi <p>5h.🌍 </p></p>
        
         <p className='mx-3  '>Dealing with a legacy system is like trying to change the engines of an airplane while it’s still flying. It’s challenging, but sometimes it’s necessary for the journey to continue.</p>
        <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        
        <p className='mt-2'>❤️ 102 <hr /></p>
        <div className='d-flex'>
        <button className='btn btn-light mx-3' onClick={()  => {setLike(Like +1)}}>👍 Like  {Like}</button>
        <button className='btn btn-light mx-3' onClick={()=>{setComment(Comment +1)}}>💬 Comment {Comment}</button>
        <button className='btn btn-light mx-3'>®️Repost</button>
        <button className='btn btn-light mx-3'>📩Send</button>

        </div>
        
        
    </div>
    </div>
  )
}

export default Page