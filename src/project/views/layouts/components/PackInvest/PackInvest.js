import React from 'react'
import styled from 'styled-components'
import { BiPackage } from 'react-icons/bi'

export default function PackInvest(props) {
  return (
    <ContainerPackInvest>
        <HeaderPackInvest>
          <TextHeaderPackInvest>Pacote</TextHeaderPackInvest>
          <BiPackage className="text-blue-50 text-[30px] md:text-[24px]"/>
        </HeaderPackInvest>
        <MainPackInvest>
            <TextPercentual>{props.percentual}</TextPercentual>
            <TextDays>{props.days}</TextDays>
        </MainPackInvest>
        <ButtonPackInvest>
          Contratar
          <IconPackInvest>{props.icon}</IconPackInvest>
        </ButtonPackInvest>
    </ContainerPackInvest>
  )
}

const ContainerPackInvest = styled.div.attrs({
  className:`
    flex
    flex-col
  `
})``

const HeaderPackInvest = styled.div.attrs({
  className:`
  flex 
  px-4 
  justify-between 
  bg-primary 
  w-[15rem]
  lg:w-[13rem]
  md:w-[12rem]
  sm:w-[10rem]
  mm:w-[15rem]
  h-[4rem] 
  items-center
  `
})``

const TextHeaderPackInvest = styled.div.attrs({
  className:`
    font-roboto
    text-[20px]
    md:text-[16px]
    text-white
  `
})``

const Bold = styled.span.attrs({
  className:`
    font-bold
  `
})``

const MainPackInvest = styled.div.attrs({
  className:`
  flex 
  flex-col 
  h-[10rem] 
  md:h-[8rem]
  w-[15rem] 
  lg:w-[13rem] 
  md:w-[12rem] 
  sm:w-[10rem]
  mm:w-[15rem]
  bg-white 
  items-center 
  justify-center
  `
})``

const TextPercentual = styled.div.attrs({
  className:`
  text-blue-50 
  text-[80px] 
  md:text-[60px]
  font-bold 
  font-sans
  `
})``

const TextDays = styled.div.attrs({
  className:`
    text-gray-500
    text-[16px]
  `
})``

const ButtonPackInvest = styled.button.attrs({
  className:`
  bg-blue-50 
  h-[5rem] 
  md:h-[3rem]
  w-[15rem] 
  lg:w-[13rem] 
  md:w-[12rem]
  sm:w-[10rem]
  mm:w-[15rem]
  px-4 
  flex 
  text-white 
  text-[25px]
  md:text-[20px] 
  items-center 
  justify-between 
  font-roboto
  `
})``

const IconPackInvest = styled.div.attrs({
  className:`
    text-[30px]
    md:text-[26px]
  `
})``