import React from 'react'

const Eventhandling = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Eventhandling</h1>
        <hr />
        <button className='btn btn-danger'onClick={()=> alert("Button was Click") }>Button</button>

        <h3 className='mt-5'>Change Event</h3>
        <input type="text" className='from-control' onChange={(e)=> {console.log(e.target.value)}} />
        
        <input type="color" onChange={(e) => {console.log(e.target.value); document.body.style.background= e.target.value }} />

        <input type="file" onChange={()=> { console.log(e.target.files[0].name)}}/>

        

    </div>
  )
}

export default Eventhandling