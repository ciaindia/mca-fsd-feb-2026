import React from 'react'

export default function Fruits() {
    let fruits = ['Apple', 'Banana', 'Chiku']
  return (
    <div>
        <ul>
            {fruits.map((f) => <li>{f}</li>)}
            
        </ul>
    </div>
  )
}
