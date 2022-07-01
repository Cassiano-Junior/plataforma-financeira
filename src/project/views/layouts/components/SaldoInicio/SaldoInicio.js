import React from 'react'
import PieGraphic from '../Graficos/PieGraphic'
import { HiChevronRight } from 'react-icons/hi'
import styled from 'styled-components'


export default function SaldoInicio() {
  return (
    <ContainerSaldoInicio>
      <HeaderSaldoInicio>Saldo/Início</HeaderSaldoInicio>
      <MainSaldoInicio>  
        <div className="text-gray-400 font-bold text-[26px]">4.593%</div>
        <PieGraphic /> 
      </MainSaldoInicio>
      <FooterSaldoInicio>
        <TextFooter>
          Rendendo
          <HiChevronRight className="text-[2rem]" />
        </TextFooter>
      </FooterSaldoInicio>
    </ContainerSaldoInicio>
  )
}

const ContainerSaldoInicio = styled.div.attrs({
  className: `
    flex
    flex-col
    h-auto
    w-[30%]
    md:h-[auto]
    md:w-[20rem]
    sm:w-[17rem]
  `,
})``

const HeaderSaldoInicio = styled.div.attrs({
  className: `
    h-[4.68rem]
    bg-bggray
    w-full
    text-letter
    flex
    pl-[2rem]
    items-center
  `,
})``

const MainSaldoInicio = styled.div.attrs({
  className:`
  bg-white 
  flex 
  flex-col 
  items-center 
  justify-center 
  h-[15rem]
  `
})``

const FooterSaldoInicio = styled.div.attrs({
  className: `
  h-[4.68rem] 
  bg-blue-50  
  w-full 
  text-white 
  flex 
  pl-[2rem] 
  items-center
  `,
})``

const TextFooter = styled.span.attrs({
  className: `
  text-[1.2rem] 
  flex 
  items-center 
  w-[95%] 
  justify-between
  `,
})``
