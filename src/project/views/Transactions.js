import React from 'react'
import Auth from './layouts/Auth/Auth'
import styled from 'styled-components'
import TableTransactions from './layouts/components/TableTransactions/TableTransactions'

export default function Transactions() {
  return (
    <Auth>
      <ContainerHeaderTransactions>
        <TextHeaderTransactions>
          transações
        </TextHeaderTransactions>
        <ContentFilterHeader>
          <TextFilterHeader> Período </TextFilterHeader>
          <SelectFilterHeader>
            <option>Últimos 30 dias</option>
            <option>Últimos 60 dias</option>
            <option>Últimos 90 dias</option>
          </SelectFilterHeader>
          <ButtonFilterHeader>
            Filtrar
          </ButtonFilterHeader>
        </ContentFilterHeader>
      </ContainerHeaderTransactions>
      <TableTransactions />
    </Auth>
  )
}



  const ContainerHeaderTransactions = styled.div.attrs({
    className:`
      h-[4.68rem]
      bg-white
      w-full
      text-letter
      flex
      px-[2rem]
      items-center
      justify-between
      mm:flex-col
      mm:p-2
    `
  })``

  const TextHeaderTransactions = styled.span.attrs({
    className: `
      uppercase
    `
  })``

  const ContentFilterHeader = styled.div.attrs({
    className: `
      flex
      gap-2
      items-center
    `
  })``

  const TextFilterHeader = styled.span.attrs({
    className:`
    font-bold
    `
  })``

  const SelectFilterHeader = styled.select.attrs({
    className:`
     border
     cursor-pointer
     outline-none
     p-1
     rounded-md
    `
  })``

  const ButtonFilterHeader = styled.button.attrs({
    className: `
      bg-blue-30
      text-white
      px-3
      py-1
      hover:brightness-90
      rounded-full
    `
  })``



      // <div className="flex flex-col gap-2">
      //   <ContainerHeaderTransactions>
      //     <TextHeaderTransactions>transações</TextHeaderTransactions>
      //     <ContantFilterHeader>
      //       <TextFilterHeader> Período</TextFilterHeader>
      //       <select className="border cursor-pointer outline-none p-1 rounded-md ">
      //         <option>Últimos 30 dias</option>
      //         <option>Últimos 60 dias</option>
      //         <option>Últimos 90 dias</option>
      //       </select>
      //       <button className="bg-blue-30 text-white px-3 py-1 hover:brightness-90 rounded-full">Filtrar</button>
      //     </ContantFilterHeader>
      //   </ContainerHeaderTransactio>
      //   <TableTransactions />
      // </div>
 