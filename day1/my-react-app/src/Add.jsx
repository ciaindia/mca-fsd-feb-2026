import React from 'react'
// <Add num1={5} num2={6} />
export default function Add(props) {
    let x = props.num1
    let y = props.num2
  return (
    <div>{x} + {y} = {x + y}</div>
  )
}
