import React from 'react'

export default function TableTransactions() {
  return (
    <div class="w-full overflow-x-auto">
  <table class=" bg-white w-full">
    <thead className="text-gray-500 text-[16px]">
      <tr className="bg-bggray">
        <th className="p-4 uppercase">data transação</th> 
        <th className="p-4 uppercase">tipo transação</th>
        <th className="p-4">PRODUTO</th>
        <th className="p-4">MOEDA</th>
        <th className="p-4">BRL (Current)</th>
        <th className="p-4">TAXA (BRL)</th>
        <th className="p-4">TOTAL (BRL)</th>
        <th className="p-4">STATUS</th>
      </tr>
    </thead> 
    <tbody className="text-center text-[16px]">
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>CRIPTO</td>
        <td>BNB</td>
        <td>2.00</td>
        <td>2.00</td>
        <td>2.00</td>
        <td>2.00</td>
        <td className="bg-yellow text-white">Em andamento</td>
      </tr>
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>CRIPTO</td>
        <td>BTC</td>
        <td>0.50</td>
        <td>0.50</td>
        <td>0.50</td>
        <td>0.50</td>
        <td className="bg-green-500 text-white">Finalizado</td>
      </tr>
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>CRIPTO</td>
        <td>BNB</td>
        <td>8.00</td>
        <td>8.00</td>
        <td>8.00</td>
        <td>8.00</td>
        <td className="bg-green-500 text-white">Finalizado</td>
      </tr>
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>BRL</td>
        <td>PIX</td>
        <td>30.000</td>
        <td>30.000</td>
        <td>30.000</td>
        <td>30.000</td>
        <td className="bg-red-500 text-white">Cancelado</td>
      </tr>
    </tbody> 
  </table>
</div>
  )
}
