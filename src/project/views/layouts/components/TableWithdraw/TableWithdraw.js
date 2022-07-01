import React, {useContext} from 'react'
import AppContext from '../../../../../framework/helpers/AppContext'



export default function TableWithdraw() {
  const {withdraws} = useContext(AppContext)

  return (
    <div class="w-full overflow-x-auto">
  <table class=" bg-white w-full">
    <thead className="text-gray-500 text-[16px]">
      <tr className="bg-bggray">
        <th className="p-4">DATA RETIRADA</th> 
        <th className="p-4">FORMA DE RECEBIMENTO </th>
        <th className="p-4">MOEDA</th>
        <th className="p-4">VALOR</th>
        <th className="p-4">BRL (Current)</th>
        <th className="p-4">TAXA (BRL)</th>
        <th className="p-4">TOTAL (BRL)</th>
        <th className="p-4">STATUS</th>
      </tr>
    </thead> 
    <tbody className="text-center text-[16px]">
      {
         withdraws.map((withdraw) => {
          return (
              <tr className="border border-t-transparent border-b-gray-500">
              <td className="p-4">{withdraw.date}</td>
              <td>{withdraw.paymentType}</td>
              <td>{withdraw.currency}</td>
              <td>{withdraw.value}</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="bg-yellow text-white">Em Andamento</td>
            </tr>
          )
        })
      }
    </tbody> 
  </table>
</div>
  )
}
