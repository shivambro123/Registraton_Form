import React, { useRef, useState } from 'react'

const UserefComp = () => {
    const [data,setData]=useState('')
    const inputdata=useRef(null);
    const Handler =() =>{
        setData(inputdata.current.value)
        inputdata.current.value=""

    }
  return (
    <div>
        <input type="text" ref={inputdata} />
        <button onClick={Handler}>click</button>
        <h1>{data}</h1>
    </div>
  )
}

export default UserefComp