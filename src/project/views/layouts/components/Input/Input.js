import React from 'react'

export default function Input(props) {
  return (
    <input placeholder={props.placeholder} value={props.value} onChange={props.onChange}
      className={`flex items-center outline-none bg-white justify-center p-[25px] h-[3rem] text-[20px] text-gray-400 rounded-[50px] border-2 border-blue-50 ${props.css}`}
    />
  )
}
