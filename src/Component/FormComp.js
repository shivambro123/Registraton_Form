import React, { useState } from 'react'

const FormComp = () => {
    const [data,setData]=useState({})
    const onChangeHandler = (e) =>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
        
    }
    const getData = () =>{
        alert(data)

    }

  return (
    <div>
        <input type="text" name="name" onChange={onChangeHandler}/>
        <input type="email" name="email" onChange={onChangeHandler}/>
        <input type="password" name="password" onChange={onChangeHandler}/>
        <input type="number" name="contact" onChange={onChangeHandler}/>
    <button onClick={getData}>Submit</button>
    </div>
  )
}

export default FormComp