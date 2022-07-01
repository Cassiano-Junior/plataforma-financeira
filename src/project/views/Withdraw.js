import React from 'react'
import Auth from './layouts/Auth/Auth'
import Card from './layouts/components/Card/Card'
import TableWithdraw from './layouts/components/TableWithdraw/TableWithdraw'
import PainelWithdraw from './layouts/components/PainelWithdraw/PainelWithdraw'
import { FaCoins } from 'react-icons/fa'

import styled from 'styled-components'

export default function Withdraw() {
 
  const totalInvestido = {
    descricao: <FaCoins />,
    valor: "250.000",
    tipo: "Total investido"
  }

  const liberadoRetirada = {
    descricao: <FaCoins />,
    valor: "85.000",
    tipo: "Liberado para retirada"
  }

  return (
    <Auth>
      <ContainerWithdraws>
        <ContainerCards>
          <ContentCards color='bg-primary'>
            <Card {...totalInvestido} />
          </ContentCards>
          <ContentCards color='bg-secondary'>
            <Card {...liberadoRetirada} />
          </ContentCards>
        </ContainerCards>
        <ContainerPainelWithdraw>
          <HeaderPainelWithdraw>
            Retirada
          </HeaderPainelWithdraw>
          <PainelWithdraw />
        </ContainerPainelWithdraw>
      </ContainerWithdraws>
      <TableWithdraw />
    </Auth>
  )
}


const ContainerWithdraws = styled.div.attrs({
  className: `
    flex
    gap-4
    xl:flex-col
    
  `
})``

const ContainerCards = styled.div.attrs({
  className:`
    flex
  `
})``

const ContentCards = styled.div.attrs(props => ({
  className: `
    w-[15rem]
    md:w-[12rem]
    mm:w-[10rem]
    flex
    flex-col
    items-center
    justify-center
    ${props.color}
  `
}))``

const ContainerPainelWithdraw = styled.div.attrs({
  className: `
    flex
    flex-col
  `
})``

const HeaderPainelWithdraw = styled.div.attrs({
  className:`
    h-[4.68rem]
    bg-bggray
    xl:max-w-[50rem]
    text-gray-500
    flex
    pl-[2rem]
    items-center
  `
})``
