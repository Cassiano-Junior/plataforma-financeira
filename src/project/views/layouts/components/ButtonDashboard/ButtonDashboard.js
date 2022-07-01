import React from 'react'

export default function ButtonDashboard(props) {
  return (
    <button className={`flex items-center justify-center p-[25px] w-[15rem] bg-quarty h-[3rem] text-[16px] text-thirdy  text-bold rounded-[50px] hover:brightness-90"`} onClick={props.onClick}>
        {props.children}
    </button>
  )
}
