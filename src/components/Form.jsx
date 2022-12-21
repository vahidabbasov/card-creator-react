// 3 heigh width color
import React, { useState } from 'react'
import { Button} from 'antd';

function Form() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [color, setColor] = useState("");
  return (
    <>
    <input type="number" onChange={(e)=>{
        e.target.value = setWidth;
        console.log(parseInt(setWidth) );
    }} />
    <input type="number" onChange={(e)=>{
        e.target.value = setHeight;
    }}/>
    <input type="color" onChange={(e)=>{
        e.target.value = setColor;
    }}/>
    <Button type="primary">Create</Button>
    </>
  )
}

export default Form