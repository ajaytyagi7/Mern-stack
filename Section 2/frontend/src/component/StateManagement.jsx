import React, { useState } from 'react'

const StateManagement = () =>{
        let count=10;
        const [Likes, setLikes] = useState(0);
        const [Comment, setComment] = useState(0)
        const [imgUrl, setImgUrl] = useState("")

        const chooseFile = (e) =>{
            const file=e.target.files[0]

            const reader= new FileReader();
            reader .onload=(content) =>{
                setImgUrl(content.target.result);
            }
            reader.readAsDataURL(file);
        }
  
    return (
    
    <div>
        <div className='container'>
    <h1>Count:{count}</h1>
    
    <button className='btn btn-primary mt-4 'onClick={() => {count++; console.log(count)}}>Add count</button>
    
    <button className='btn btn-danger mt-4' onClick={()  => {setLikes(Likes + 1)}}>Likes :{Likes}</button>
    
    <button className='btn btn-secondary mt-4' onClick={()  => {setComment(Comment + 1)}}>Comment :{Comment}</button>
    
    <input type="text" className='from-control mt-4' placeholder='Enter imgage url' onChange={(e) =>  {setImgUrl(e.target.value)}} />
   
    <input type="file" onChange={chooseFile} />
    
    <p>{imgUrl}</p>

    <img src={imgUrl} alt="" width={300} />
        </div>
    </div>
  )
}

export default StateManagement