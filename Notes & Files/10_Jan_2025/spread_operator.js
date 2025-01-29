parent component:

import React,{useState} from 'react'
import { Child1 } from './child1'

export const Parent1 = () => {

    const [parent_message, setParentMessage] = useState("Hello from Parent");
    const [ child_message, setChildMessage] = useState('hai');

    const datafromchildd = (message) => {
        setChildMessage(message);
    }

  return (
    <div>
        <h1>Parent component</h1>
        <p>Data from Parent: {parent_message}</p>
        <p>Data from Child: {child_message}</p>
        <Child1 msg={parent_message} datatoparent={datafromchildd} />
        {/* <button onClick={send_message}>Send Data to Parent</button> */}
        
    </div>
  )
}






























child component:

import React,{useState} from 'react'

export const Child1 = (props, datatoparent) => {

    const [child_message, setChildMessage] = useState("Hello from Child");

    const send_message = () => {
        props.datatoparent(child_message);

    }

  return (
    <div>
        <h1>Child component</h1>
        <p>Data from Parent: {props.msg}</p>
        <button onClick={send_message}>Send Data to Parent</button>
    </div>
  )
}