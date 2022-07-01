import React from 'react'

export default function Title(props) {
  return (
        <div className={`text-gray-500 ${props.css}`}>
            {props.children}
        </div>
   )
}
