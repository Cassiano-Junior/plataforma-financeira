import React from 'react'
import { BsFillInboxesFill } from 'react-icons/bs'
import { FaCoins } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { RiFundsBoxLine } from 'react-icons/ri'
import Card from '../Card/Card'

import styled from 'styled-components'

export default function CardsDashboard() {
  const totalAporte = {
    descricao: <FaCoins />,
    valor: '$ 0.00',
    tipo: 'Total Aporte',
  }

  const saldoAtual = {
    descricao: <FaCoins />,
    valor: '$ 0.00',
    tipo: 'Saldo Atual',
  }

  const rendimentosMensal = {
    descricao: <RiFundsBoxLine />,
    valor: '4.593%',
    tipo: 'Rendimentos do Mês',
  }

  const pacoteKlaIndex = {
    descricao: <BsFillInboxesFill />,
    valor: '02',
    tipo: 'Pacote Contratado',
  }

  const logoutAccount = {
    valor: <MdLogout />,
    tipo: 'Logout Account',
  }

  return (
    <ContainerCardsDashboard>
      <ContentCardsDashboard color='bg-blue-50'>
        <Card {...totalAporte} />
      </ContentCardsDashboard>
      <ContentCardsDashboard color='bg-blue-40'>
        <Card {...saldoAtual} />
      </ContentCardsDashboard>
      <ContentCardsDashboard color='bg-blue-30'>
        <Card {...rendimentosMensal} />
      </ContentCardsDashboard>
      <ContentCardsDashboard color='bg-blue-20'>
        <Card {...pacoteKlaIndex} />
      </ContentCardsDashboard>
      <ContentCardsDashboard color='bg-blue-10'>
        <Card {...logoutAccount} />
      </ContentCardsDashboard>
    </ContainerCardsDashboard>
  )
}

const ContainerCardsDashboard = styled.div.attrs({
  className: `
    flex
    w-full
    justify-between
    md:flex-wrap
    md:justify-center
    md:gap-[15px]
    mm:justify-center
  `
})``

const ContentCardsDashboard = styled.div.attrs(props => ({
  className: `
    w-[15rem]
    flex
    flex-col
    items-center
    ${props.color}
  `
}))``