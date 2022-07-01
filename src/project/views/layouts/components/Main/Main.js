import React, { useContext } from 'react'
import AppContext from '../../../../../framework/helpers/AppContext'

export default function Main() {
  const myContext = useContext(AppContext)
 

  return (
    
    <div
      id="content"
      className=" w-full flex grow overflow-y-auto  bg-thirdy pt-[2rem]"
    >
      {myContext.context}
    </div>
  )
}
