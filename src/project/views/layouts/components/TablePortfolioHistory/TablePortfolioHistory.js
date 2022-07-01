import React from 'react'

export default function TablePortfolio() {
  return (
    <div class="w-full overflow-x-auto">
  <table class=" w-full bg-white ">
    <thead className="text-gray-500 text-[16px]">
      <tr className="bg-bggray">
        <th  className="p-4">Data Compra</th> 
        <th className="p-4">Produto</th> 
        <th className="p-4"> Pacote</th> 
        <th className="p-4">Tempo Restante</th> 
        <th className="p-4">Total Investimento</th> 
        <th className="p-4">Rentabilidade</th>
        <th className="p-4">Total + Rentabilidade</th>
        <th className="p-4">Total Saque</th>
        <th className="p-4">Status</th>
      </tr>
    </thead> 
    <tbody className="text-center text-[16px]">
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>Pacote</td> 
        <td>90 dias</td> 
        <td>45 dias</td> 
        <td>BRL 30.500,00</td> 
        <td>16%</td>
        <td>R$35.580,00</td>
        <td>R$0,00</td>
        <td className="bg-yellow text-white">Em Andamento</td>
      </tr>
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>Pacote</td> 
        <td>90 dias</td> 
        <td>45 dias</td> 
        <td>BRL 30.500,00</td> 
        <td>16%</td>
        <td>R$35.580,00</td>
        <td>R$0,00</td>
        <td className="bg-yellow text-white">Em Andamento</td>
      </tr>
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>Pacote</td> 
        <td>90 dias</td> 
        <td>45 dias</td> 
        <td>BRL 30.500,00</td> 
        <td>16%</td>
        <td>R$35.580,00</td>
        <td>R$0,00</td>
        <td className="bg-yellow text-white">Em Andamento</td>
      </tr>
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>Pacote</td> 
        <td>90 dias</td> 
        <td>45 dias</td> 
        <td>BRL 30.500,00</td> 
        <td>16%</td>
        <td>R$35.580,00</td>
        <td>R$0,00</td>
        <td className="bg-yellow text-white">Em Andamento</td>
      </tr>
      <tr className="border border-t-transparent border-b-gray-500">
        <td className="p-4">02/05/2022 10:23</td> 
        <td>Pacote</td> 
        <td>90 dias</td> 
        <td>45 dias</td> 
        <td>BRL 30.500,00</td> 
        <td>16%</td>
        <td>R$35.580,00</td>
        <td>R$0,00</td>
        <td className="bg-yellow text-white">Em Andamento</td>
      </tr>
    </tbody> 
  </table>
</div>
  )
}
