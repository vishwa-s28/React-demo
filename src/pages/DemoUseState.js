import React, { useState } from 'react'

const DemoUseState = () => {
    const [color,setColor] = useState("red");
    const [car, setCar] = useState({
        brand: "ford",
        model: "Mustang",
        year: "1678",
        color: "black"
    })
  return (
    <>
    <h3>My color is {color}!</h3>
    <button type='button' onClick={()=>{setColor("blue")}}>blue</button>
    <button type='button' onClick={()=>{setColor("gray")}}>gray</button>
    <button type='button' onClick={()=>{setColor("black")}}>black</button>
    <button type='button' onClick={()=>{setColor("yellow")}}>yellow</button>

    <h4>My Car's brand is {car.brand}</h4>
    <h4>My Car's model is {car.model}</h4>
    <h4>My Car's color is {car.color}</h4>
    <h4>My Car's year is {car.year}</h4>
    <button type='button' onClick={()=>{setCar((prev)=>{return {...prev,brand: "BMW"}})}}>Change brand</button>
    <button type='button' onClick={()=>{setCar((prev)=>{return {...prev,model: "sedan"}})}}>Change model</button>
    <button type='button' onClick={()=>{setCar((prev)=>{return {...prev,color: "blue"}})}}>Change color</button>
    <button type='button' onClick={()=>{setCar((prev)=>{return {...prev,year: "2013"}})}}>Change year</button>

    </>
  )
}

export default DemoUseState