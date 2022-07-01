import React from 'react'
import Auth from './layouts/Auth/Auth'
import styled from 'styled-components'
import FormPayment from './layouts/components/FormPayment/FormPayment'
import PackInvest from './layouts/components/PackInvest/PackInvest'
import { FiChevronDown } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import BannerInvestNow from './layouts/components/BannerInvestNow/BannerInvestNow'

export default function InvestNow() {
  const pack1 = {
    percentual: '75%',
    days: '360 dias',
    icon: <FiChevronDown />,
  }

  const pack2 = {
    percentual: '45%',
    days: '180 dias',
    icon: <FiChevronRight />,
  }

  const pack3 = {
    percentual: '30%',
    days: '90 dias',
    icon: <FiChevronRight />,
  }

  return (
    <Auth>
      <ContainerInvestNow>
      <BannerInvestNow />
      <ContainerPacks>
        <PackInvest {...pack1} />
        <PackInvest {...pack2} />
        <PackInvest {...pack3} />
      </ContainerPacks>
      <FormPayment />
      </ContainerInvestNow>
    </Auth>
  )
}

const ContainerInvestNow = styled.div.attrs({
  className:`
    flex
    flex-col
    
    mm:items-center
    gap-10
  `
})``

const ContainerPacks = styled.div.attrs({
  className:`
    flex
    mm:flex-col
    gap-6
    sm:gap-4
  `
})``
