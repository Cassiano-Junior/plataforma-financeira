import React from 'react'

export default function Card({ descricao, valor, tipo }) {
  return (
    <div className="h-[12.375rem] flex items-center justify-center p-4">
      <div className=" flex gap-[2.5rem] lg:gap-[1.5rem] mm:gap-[1rem] flex-col text-lg items-center text-white">
        <div className="flex justify-center space-x-4 text-[30px] lg:text-[20px]">
          {descricao}
        </div>
        <div className="flex text-[40px] lg:text-[30px] text-center">
          {valor}
        </div>
        <div className="flex text-[16px] text-center">{tipo}</div>
      </div>
    </div>
  )
}

