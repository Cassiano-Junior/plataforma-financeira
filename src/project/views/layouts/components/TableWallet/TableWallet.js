import React, { useContext } from 'react'
import AppContext from '../../../../../framework/helpers/AppContext'


export default function TableWallet() {
  const { transfersWallet } = useContext(AppContext)

  return (
<div class="w-full overflow-x-auto">
    <table class=" bg-white w-full">
      <thead className="text-gray-500 text-[16px]">
        <tr className="bg-bggray">
          <th className="p-4 uppercase">data transação</th> 
          <th className="p-4 uppercase">tipo transação</th>
          <th className="p-4">VALOR</th>
          <th className="p-4">TAXA (BRL)</th>
          <th className="p-4">TOTAL (BRL)</th>
          <th className="p-4">STATUS</th>
        </tr>
      </thead> 
      <tbody className="text-center text-[16px]">
      {transfersWallet?.map((transferWallet, index) => {
          return (
              <tr key={index} className="border border-t-transparent border-b-gray-500">
                <td className="p-4">{transferWallet.date}</td>
                <td>TRANSF</td>
                <td>{transferWallet.value}</td>
                <td></td>
                <td></td>
                <td className="bg-yellow text-white">Em andamento</td>
              </tr>
            
          )
        })}

        <tr className="border border-t-transparent border-b-gray-500">
          <td className="p-4">02/05/2022 10:23</td> 
          <td>TRANSF</td>
          <td>30.000,00</td>
          <td>35.000,00</td>
          <td>000.00,00</td>
          <td className="bg-red-500 text-white">Cancelado</td>
        </tr>
      </tbody> 
    </table>
  </div>
  )
}

