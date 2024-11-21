import React, { useEffect, useState } from 'react'

const DemoUseEffect = () => {
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(0);
    const [multiply, setMultiply] = useState(0);
    
    useEffect(() => {
        setMultiply(() => count*2);
        setAdd(() => count+2);
    },[count])
  return (
    <>
    <p>count : {count}</p>
    <button type='button' onClick={()=>setCount((c)=>c+1)}>+1 </button>
    <button type='button' onClick={()=>setCount((c)=>c-1)}>-1 </button>
    <p>Add with 2 ={add}</p>
    <p>Multiply by 2 = {multiply}</p>
    </>
  )

}

export default DemoUseEffect