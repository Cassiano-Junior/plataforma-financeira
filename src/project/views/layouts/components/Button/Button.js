import React from 'react'

export default function Button(props) {
  return (
    <button className={`${props.css} flex items-center justify-center text-[16px] text-white rounded-[50px] hover:brightness-90 `} onClick={props.onClick}>
        {props.children}
    </button>
  )
}
